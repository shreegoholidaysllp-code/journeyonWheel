import { NextResponse } from "next/server";
import { sendInquiryEmail } from "@/services/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, interest, customText } = body;

    if (!name || !phone || !interest) {
      return NextResponse.json(
        { error: "Name, Phone, and Interest are required" },
        { status: 400 }
      );
    }

    const result = await sendInquiryEmail({ name, phone, interest, customText });

    if (result.success) {
      return NextResponse.json({ message: "Email sent successfully" });
    } else {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
