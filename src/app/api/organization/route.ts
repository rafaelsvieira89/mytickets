import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export async function POST(req: Request){

    const session = await getServerSession(authOptions)



    const {name, email, phone} = await req.json()

    try{
        const org = await prisma.organization.create({
            data:{
                name,
                phone,
                email,
                userId: session?.user.id

            }
        })

        await prisma.user.update({
            data:{
                organizationId: org.id,
            },
            where:{
                id: session?.user.id
            }
        })

        return NextResponse.json({message: "Organização cadastrada com sucesso"})
    }catch (err){
        return NextResponse.json({message: "Erro ao cadastrar organizacao"}, {status: 400})
    }

}