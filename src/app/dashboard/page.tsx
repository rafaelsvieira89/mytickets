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

    const tickets = await prisma.ticket.findMany(
        { where: { userId: session.user.id } }
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
                        <th className="font-medium text-left hidden sm:block">
                            Cadastro
                        </th>
                        <th className="font-medium text-left">
                            Status
                        </th>
                        <th className="font-medium text-left">
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
            </main>
        </Container>
    )
}