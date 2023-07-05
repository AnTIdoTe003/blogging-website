import postModel from "@/models/postModel"
import connectDb from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request:NextRequest)=>{
    try{
        await connectDb()
        const posts = await postModel.find()
        return new NextResponse(JSON.stringify(posts) as any, {status:200})
        }catch(error){
        return new NextResponse("Db Error",{status: 500})
    }
}