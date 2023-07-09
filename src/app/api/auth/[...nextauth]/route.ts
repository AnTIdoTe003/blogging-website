import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/utils/db";
import userModel from "@/models/userModel";
import bcrypt from 'bcrypt'
const handler = NextAuth({
  providers: [
   CredentialsProvider({
     id: "credentials",
     name: 'Credentials',
     // @ts-ignore
     authorize: async (credentials: any) => {
       try {
         await connectDb();
         const existUser = await userModel.findOne({ email: credentials.email });
         console.log(existUser);
         console.log(credentials);
         if (existUser) {
           const isPasswordCorrect = await bcrypt.compare(credentials.password, existUser.password);
           console.log(isPasswordCorrect);
           if (!isPasswordCorrect) {
             throw new Error("Please check your password");
           } else {
             return Promise.resolve(existUser)
           }
         } else {
           throw new Error("User not found");
         }

       } catch (error: any) {
         throw new Error(error);
         console.log(error);
       }
     },
    //  @ts-ignore
     credentials: undefined
   }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});


export {handler as GET, handler as POST}