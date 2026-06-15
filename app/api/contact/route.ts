import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey || !toEmail) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactRequest;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company =
      typeof body.company === "string" ? body.company.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New contact request from ${name}`,
      replyTo: email,
      text: `New contact form submission from SpinCulture website

Name: ${name}
Email: ${email}
Company / Institution: ${company || "Not provided"}

Message:
${message}`,
    });

    if (error) {
      const resendMessage =
        "message" in error && typeof error.message === "string"
          ? error.message
          : "Unknown Resend error.";

      console.error("Resend error:", {
        name: "name" in error ? error.name : undefined,
        message: resendMessage,
      });

      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? `Resend: ${resendMessage}`
              : "The message could not be sent. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
