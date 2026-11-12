import { TRAIL_API } from "@/lib/leads";
import { NextResponse } from "next/server";

const FIELDS = ["Name", "Email", "Phone", "Message", "State", "Company", "request_type"] as const;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;

    const form = new FormData();
    for (const key of FIELDS) {
      form.append(key, String(body[key] ?? "").trim());
    }

    const response = await fetch(TRAIL_API, {
      method: "POST",
      body: form,
      cache: "no-store",
    });

    const text = await response.text();
    let data: Record<string, unknown> = {};
    try {
      data = text ? (JSON.parse(text) as Record<string, unknown>) : {};
    } catch {
      data = { status: false, message: text || "Unexpected response" };
    }

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ status: false, message: "Unable to submit your request." }, { status: 502 });
  }
}
