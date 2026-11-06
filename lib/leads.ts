export const LEADS_API = "https://mysign.au/signagebackend/api";
export const LEAD_SCREENS = "1-5";
export const LEAD_CAPTCHA_TOKEN = "XXXX.DUMMY.TOKEN.XXXX";

export type LeadKind = "demo" | "trial";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  state: string;
  message: string;
  screens: string;
  captchaToken: string;
};

export type LeadResponse = {
  success?: boolean;
  message?: string;
};

export async function submitLead(kind: LeadKind, payload: LeadPayload): Promise<LeadResponse> {
  const path = kind === "trial" ? "trials" : "demos";
  const response = await fetch(`/api/${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: LeadResponse = {};
  try {
    data = (await response.json()) as LeadResponse;
  } catch {
    data = {};
  }

  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}
