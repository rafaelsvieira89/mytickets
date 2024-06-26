import {Container} from "@/components/container";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import {NewCustomerForm} from "@/app/dashboard/customer/components/form";
import prisma from "@/lib/prisma";

export default async function NewCustomer() {

    const session = await getServerSession(authOptions)

    if(!session || !session.user)
        redirect("/")
    const organization = await prisma.organization.findFirst({
        where:{
            userId: session.user.id
        }
    })
    if (!organization)
        redirect("/")

    return (
        <Container>
            <main className="flex flex-col mt-9 mb-2">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/customer" className="bg-gray-900 px-4 py-1 rounded text-white">Voltar</Link>
                    <h1 className="text-3xl font-bold">Novo cliente</h1>
                </div>

                <NewCustomerForm userId={session.user.id}/>



            </main>
        </Container>
    )
}