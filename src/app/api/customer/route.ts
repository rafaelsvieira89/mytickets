import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function DELETE(request: Request) {

    const session = await getServerSession(authOptions)
    if (!session || !session.user)
        return NextResponse.json({error: "Não autorizado"}, {status: 401})

    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id");
    if (!id) {
        return NextResponse.json({error: "ID não fornecido"}, {status: 400});
    }

    const findTickets = await prisma.ticket.findFirst({
        where: {
            customerId: id //id do cliente passado por parametro na url
        }
    })
    if (findTickets)
        return NextResponse.json({error: "Não é possível excluir clientes que possuem chamados"}, {status: 400});

    try {
        await prisma.customer.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json({message: "Cliente excluído com sucesso"});
    } catch (err) {
        return NextResponse.json({error: "Não foi possível excluir o cliente"}, {status: 400});
    }
}

export async function POST(request: Request) {

    const session = await getServerSession(authOptions)
    if (!session || !session.user)
        return NextResponse.json({error: "Não autorizado"}, {status: 401})

    const organization = await prisma.organization.findFirst({
        where:{
            id: session.user.id
        }
    })


    if (!organization)
        return NextResponse.json({error: "Não autorizado"}, {status: 401})

    const {name, phone, email, address, userId} = await request.json()

    try {
        await prisma.customer.create({
            data: {
                name,
                phone,
                email,
                organizationId: organization.id,
                address: address ? address : "",
                userId: userId
            }
        })
        return NextResponse.json({message: "Cliente cadastrado com sucesso"})
    } catch (err) {
        return NextResponse.json({error: "Não foi possível criar um novo cliente"}, {status: 400})
    }


}