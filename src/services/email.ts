import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(payload: ContactPayload) {
  if (!isEmailJsConfigured) {
    throw new Error("EmailJS is not configured");
  }

  return emailjs.send(
    SERVICE_ID!,
    TEMPLATE_ID!,
    {
      from_name: payload.name,
      from_email: payload.email,
      subject: payload.subject,
      message: payload.message,
    },
    { publicKey: PUBLIC_KEY! }
  );
}
