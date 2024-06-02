import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {

    const session = await getServerSession(authOptions)
    if (!session || !session.user)
        return NextResponse.json({error: "Não autorizado"}, {status: 401})


    const {name, phone, email, address, userId} = await request.json()

    try {
        await prisma.customer.create({
            data: {
                name,
                phone,
                email,
                address: address ? address : "",
                userId: userId
            }
        })
        return NextResponse.json({message: "Cliente cadastrado com sucesso"})
    } catch (err) {
        return NextResponse.json({error: "Não foi possível criar um novo cliente"}, {status: 400})
    }


}