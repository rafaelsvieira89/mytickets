import {Container} from "@/components/container";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import Link from "next/link";
import {TicketItem} from "@/app/dashboard/components/ticket";
import prisma from "@/lib/prisma";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    const organization = await prisma.organization.findFirst({
        where: {
            userId: session.user.id
        }
    })

    if (!organization)
        redirect("/organization/new")

    const tickets = await prisma.ticket.findMany({
            where: {
                customer: {
                    organizationId: organization.id
                },
                status: "ABERTO"
            },
            include: {
                customer: true
            },
            orderBy: {
                created_at: "desc"
            }
        }
    )

    return (
        <Container>
            <main className="mt-9 mb-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Chamados</h1>
                    <Link href="/dashboard/new" className="bg-blue-500 text-white rounded px-4 py-1">
                        Abrir Chamado
                    </Link>
                </div>
                <table className="w-full my-2">
                    <thead>
                    <tr>
                        <th className="font-medium text-left pl-1">
                            Cliente
                        </th>
                        <th className="font-medium text-left hidden sm:table-cell pl-1">
                            Ticket
                        </th>
                        <th className="font-medium text-left pl-1">
                            Assunto
                        </th>
                        <th className="font-medium text-left hidden sm:block">
                            Abertura
                        </th>
                        <th className="font-medium text-left">
                            Status
                        </th>
                        <th className="font-medium text-left hidden sm:block">
                            #
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {tickets.length !== 0 && (
                        tickets.map(item => (
                            <TicketItem key={item.id} ticket={item}/>
                        ))
                    )}

                    </tbody>
                </table>
                {tickets.length === 0 && (
                    <h1>Não encontramos chamados abertos...</h1>
                )}
            </main>
        </Container>
    )
}