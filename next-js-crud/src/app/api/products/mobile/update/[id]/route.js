import { DBconnection } from "@/app/utils/config/db";
import MobileModel from "@/app/utils/models/mobile"
import { NextResponse } from "next/server"

const connectDB = async () => {
  await DBconnection();
};

connectDB();

export async function GET(request,context) {
    console.log("this is context",context)

   const { id } = await context.params;

    const  productRecord=await MobileModel.findById(id)
    //console.log(productRecord.title)

    return NextResponse.json(productRecord)
}