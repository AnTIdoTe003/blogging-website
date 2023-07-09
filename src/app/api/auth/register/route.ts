import userModel from "@/models/userModel";
import connectDb from "@/utils/db";
import bcrypt from "bcrypt";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
export const POST = async(
  req: NextRequest,
  res: NextApiResponse
) =>{
    try {
      await connectDb();
      const { name, email, password }:any = await req.json();
      const existUser = await userModel.findOne({email: email});
      if(existUser) {
        return new NextResponse("User already exists",{status:202})
      }
      const hashedPassword = await bcrypt.hash(password, 10)  
      const newUser = await userModel.create({name, email, password:hashedPassword});
     return new NextResponse(newUser,{status:200})
    } catch (error: any) {
      return new NextResponse(error, {status:500})
    }
  }

