import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/floorplans/${params.id}`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
