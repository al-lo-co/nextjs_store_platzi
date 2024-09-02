//import { NextResponse } from "next/server";

export const runtime = "edge"; //edge runtime implemented
export async function GET() {
  //return NextResponse.json({ status: "ok" });
  return Response.json({ status: "ok" })
}