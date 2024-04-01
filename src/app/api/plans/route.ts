import { FloorPlanResponse, InventoryResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/inventory`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = (await res.json()) as InventoryResponse[];

    for (const item of data) {
      if (item.floorplan_id) {
        const id = item.floorplan_id;
        try {
          const res = await fetch(`${process.env.BASE_URL}/floorplans/${id}`, {
            headers: {
              Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          });
          const floorPlan = (await res.json()) as FloorPlanResponse;

          item.floorplan = floorPlan;
        } catch (error) {
          console.log("error", error);
        }
      } else {
        item.floorplan = null;
      }
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
