import { DBconnection } from "@/app/utils/config/db";
import { NextRequest, NextResponse } from "next/server";

const connectDB = async () => {
  await DBconnection();
};

connectDB();

export async function GET() {
  return NextResponse.json({ student: "all student are present" });
}
