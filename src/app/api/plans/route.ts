import {
  AdditionalFieldsResponse,
  FloorPlanResponse,
  InventoryResponse,
} from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 86400;

export async function GET(req: NextRequest) {
  try {
    const monthlyCC = await getMonthlyCC();
    const monthlyRE = await getMonthlyRE();
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
      if (monthlyCC.data) {
        monthlyCC.data.some((cc) => {
          const hasMonthlyCC = cc.inventory_id === item.id;
          if (hasMonthlyCC) {
            item.monthly_cc = cc;
          } else {
            item.monthly_cc = null;
          }
          return hasMonthlyCC;
        });
      }
      if (monthlyRE.data) {
        monthlyRE.data.some((re) => {
          const hasMonthlyRE = re.inventory_id === item.id;
          if (hasMonthlyRE) {
            item.monthly_re = re;
          } else {
            item.monthly_re = null;
          }
          return hasMonthlyRE;
        });
      }
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

async function getAdditionalFields(endpoint: string) {
  try {
    const res = await fetch(`${process.env.BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = (await res.json()) as AdditionalFieldsResponse;
    return { data: data.additional_fields, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
async function getMonthlyCC() {
  return await getAdditionalFields("/standardized-fields/9716");
}
async function getMonthlyRE() {
  return await getAdditionalFields("/standardized-fields/9715");
}
async function getDisplayOnWeb() {
  return await getAdditionalFields("/standardized-fields/9653");
}
