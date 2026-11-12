import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Server-side logging for Vercel Functions dashboard logs
    console.log("=== NEW CONTACT INQUIRY RECEIVED ===");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || "No subject"}`);
    console.log(`Message: ${message}`);
    console.log("=====================================");

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}

