import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  revalidatePath("/api/plans");
  return NextResponse.json("revalidated", { status: 200 });
}
