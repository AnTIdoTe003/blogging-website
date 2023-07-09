import postModel from '@/models/postModel'
import connectDb from '@/utils/db'
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request:NextRequest, {params}:{params:any})=>{
    const {id} = params
    try{
        await connectDb()
        const post = await postModel.find({name:id})
        return new NextResponse(JSON.stringify(post) as any, {status:200})
        }catch(error){
        return new NextResponse("Db Error",{status: 500})
    }
}

export const PUT = async (request:NextRequest, {params}:{params:any})=>{
    const {id} = params
    try{
        await connectDb()
        const {title, content, description, image, name} = await request.json()
        console.log(title)
        const post = await postModel.findByIdAndUpdate({_id:id},{title, content, description, image, name},{new:true})
        return new NextResponse("Post successfully updated", {status:200})
        }catch(error){
        return new NextResponse("Db Error",{status: 500})
    }
}

export const DELETE = async (request:NextRequest, {params}:{params:any})=>{
    const {id} = params
    try{
        await connectDb()
        const post = await postModel.findByIdAndDelete({_id:id})
        return new NextResponse("Post successfully deleted", {status:200})
        }catch(error){
        return new NextResponse("Db Error",{status: 500})
    }
}

