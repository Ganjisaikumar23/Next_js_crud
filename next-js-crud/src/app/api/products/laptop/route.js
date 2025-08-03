import { NextResponse } from "next/server"
import MobileModel from "@/app/utils/models/mobile"
import { DBconnection } from "@/app/utils/config/db"
import LaptopModel from "@/app/utils/models/laptop"



const connectDB= async () => {
    await DBconnection()
}

connectDB()


export async function GET() {

    const LaptopData= await LaptopModel.find({})
    return NextResponse.json({LaptopData})
    
}





export async function POST(request){
 
    const {title,laptopmodel,laptopprice}= await request.json()

    await  LaptopModel.create(
        {
            title,laptopmodel,laptopprice
        }
    )
    return NextResponse.json({Laptop :"Laptop added sucessfully "})
}