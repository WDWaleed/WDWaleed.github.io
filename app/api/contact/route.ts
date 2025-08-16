import { NextResponse } from "next/server";
import { sendMail } from "@/lib/utils/sendEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    await sendMail({ name, email, subject, message });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { success: false, error: err.message },
        { status: 500 }
      );
    }
    // fallback in case it's not an Error object
    return NextResponse.json(
      { success: false, error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
