import {Container} from "@/components/container";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import Link from "next/link";
import {CustomerCard} from "@/app/dashboard/customer/components/card";
import prisma from "@/lib/prisma";

export default async function Customer() {

    const session = await getServerSession(authOptions)

    if (!session || !session.user)
        redirect("/")

    const customers = await prisma.customer.findMany({
        where:{
            userId: session.user.id
        }
    })

    return (
        <Container>
            <main className="mt-9 mb-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">
                        Meus clientes
                    </h1>
                    <Link href="/dashboard/customer/new" className="bg-blue-500 rounded text-white px-4 py-1">
                        Novo cliente
                    </Link>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                    {customers.map(customer => (
                        <CustomerCard key={customer.id}
                                      customer={customer} />
                    ))}

                </section>
            </main>
        </Container>
    )
}