import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request, res: Response) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user)
        return NextResponse.json({error: "Not authorized"}, {status: 401});

    const { id } = await req.json()
    const findTicket = await prisma.ticket.findFirst({
        where: {
            id: id as string
        }
    })

    if(!findTicket)
        return NextResponse.json({error: "Ticket deste id não encontrado"}, {status: 400});

    try{
        await prisma.ticket.update({
            where: {
                id: id as string
            },
            data:{
                status: "FECHADO"
            }
        })
        return NextResponse.json({error: "Ticket atualizado para os status FECHADO"}, {status: 200});
    }catch (err){
        return NextResponse.json({error: "Falha ao atualizar tocket"}, {status: 400});
    }
}