import postModel from "@/models/postModel";
import connectDb from "@/utils/db";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server"

export const POST = async(request:NextRequest, )=>{
    try{
        await connectDb()
        const {title, content, description, image, name} = await request.json()
        // console.log(title)
        const existPost = await postModel.findOne({title: title})
        if(existPost){
            return new NextResponse("The post already exists", {status:500})
        }
        const newPost = await postModel.create({title, content, description, image, name})
        return new NextResponse(newPost, {status:200})
    }catch(error:any){
        return new NextResponse(error.message, {status:500})
    }
}

