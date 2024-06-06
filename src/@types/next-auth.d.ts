import {DefaultSession} from "next-auth";
import {Organization} from "@prisma/client";

declare module "next-auth" {
    interface Session{
        user:{
            id:string,
        } & DefaultSession["user"]
    }
}