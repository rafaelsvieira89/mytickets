import {DefaultSession} from "next-auth";
import {Organization} from "@prisma/client";

declare module "next-auth" {
    interface Session{
        user:{
            id:string,
            organization?: Organization
        } & DefaultSession["user"]
    }
}