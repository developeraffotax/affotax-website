import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import WaSubmission from "@/lib/Model/WaSubmission";

export async function POST(request) {
  try {
    const authHeader = request.headers.get("x-api-key");

    if (authHeader !== process.env.WHATSAPP_LEAD_WEBHOOK_SECRET) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { phoneNumber, firstMessage,  } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { success: false, message: "Phone number is required." },
        { status: 400 }
      );
    }

    await connectDB();

    await WaSubmission.updateOne(
      { phoneNumber },
      {
        $setOnInsert: {
          phoneNumber,
          firstMessage,
 
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}