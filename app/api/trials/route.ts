import { NextResponse } from "next/server";
import { LEADS_API } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(`${LEADS_API}/trials`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const text = await response.text();
    let data: unknown = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { success: false, message: text || "Unexpected response" };
    }

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to submit trial request." }, { status: 502 });
  }
}
