import postModel from "@/models/postModel"
import connectDb from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request:NextRequest, {params}:{params:any})=>{
    const {id} = params
    try{
        await connectDb()
        const post = await postModel.find({title:id})
        return new NextResponse(JSON.stringify(post) as any, {status:200})
        }catch(error){
        return new NextResponse("Db Error",{status: 500})
    }
}