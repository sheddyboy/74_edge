import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/inventory`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
