import { TRAIL_API } from "@/lib/leads";
import https from "node:https";
import { NextResponse } from "next/server";

const FIELDS = ["Name", "Email", "Phone", "Message", "State", "Company", "request_type"] as const;

const insecureTls =
  process.env.TRAIL_INSECURE_TLS === "true" || (process.env.NODE_ENV === "development" && process.env.TRAIL_INSECURE_TLS !== "false");

function postTrailJson(payload: Record<string, string>) {
  const body = JSON.stringify(payload);
  const url = new URL(TRAIL_API);

  return new Promise<{ status: number; text: string }>((resolve, reject) => {
    const req = https.request(
      url,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
        rejectUnauthorized: !insecureTls,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          resolve({ status: res.statusCode ?? 502, text: Buffer.concat(chunks).toString("utf8") });
        });
      },
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;

    const payload: Record<string, string> = {};
    for (const key of FIELDS) {
      payload[key] = String(body[key] ?? "").trim();
    }

    const { status, text } = await postTrailJson(payload);

    let data: Record<string, unknown> = {};
    try {
      data = text ? (JSON.parse(text) as Record<string, unknown>) : {};
    } catch {
      data = { status: false, message: text || "Unexpected response" };
    }

    return NextResponse.json(data, { status });
  } catch (error) {
    console.error("Trail proxy error:", error);
    return NextResponse.json({ status: false, message: "Unable to submit your request." }, { status: 502 });
  }
}
