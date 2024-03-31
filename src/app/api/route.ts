import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    console.log("hi")
    return NextResponse.json("hey")
}