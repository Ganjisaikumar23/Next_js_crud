import { NextResponse } from "next/server"
import MobileModel from "@/app/utils/models/mobile"
import { DBconnection } from "@/app/utils/config/db"



const connectDB= async () => {
    await DBconnection()
}

connectDB()


export async function GET() {

    const mobileData= await MobileModel.find({})
    return NextResponse.json({mobileData})
    
}





export async function POST(request){
 
    const {title,model,price}= await request.json()

    await  MobileModel.create(
        {
            title,model,price
        }
    )
    return NextResponse.json({mobile :"mobile added sucessfully "})
}


export async function PUT(request) {
    
    const mobileId= await request.nextUrl.searchParams.get("id")

    const {newTitle:title,newModel:model,newPrice:price} = await request.json()
    await MobileModel.findByIdAndUpdate(mobileId,{title,model,price})

    return NextResponse.json({mobileUpdate :"all the data update"})
}

export async function DELETE(request) {
    
     const mobileId= await request.nextUrl.searchParams.get("id");
     await MobileModel.findByIdAndDelete(mobileId)
return NextResponse.json({mobileDelect:"particular mobile data delected thtough id"})
}