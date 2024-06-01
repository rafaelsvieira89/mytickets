import {Container} from "@/components/container";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import Link from "next/link";
import {CustomerCard} from "@/app/dashboard/customer/components/card";

export default async function Customer() {

    const session = await getServerSession(authOptions)

    if (!session || !session.user)
        redirect("/")

    return (
        <Container>
            <main className="mt-9 mb-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">
                        Meus clientes
                    </h1>
                    <Link href="/dashboar/customer/new" className="bg-blue-500 rounded text-white px-4 py-1">
                        Novo cliente
                    </Link>
                </div>
                <section>
                    <CustomerCard/>
                    <CustomerCard/>
                    <CustomerCard/>
                    <CustomerCard/>
                </section>
            </main>
        </Container>
    )
}