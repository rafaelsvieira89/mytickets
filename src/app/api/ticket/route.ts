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

    console.log(findTicket)

    return NextResponse.json({message: "Teste chamada"})
}