import {Container} from "@/components/container"
import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import prisma from "@/lib/prisma";

export default async function NewTicket() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user)
        redirect("/")


    const customers = await prisma.customer.findMany({
        where:{
            userId: session.user.id
        }
    })

    return (
        <Container>
            <main className="mt-9 mb-2">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard"
                          className="text-white px-4 py-1 bg-gray-900 rounded">Voltar</Link>
                    <h1 className="text-3xl font-bold">Novo ticket</h1>
                </div>

                <form className="flex flex-col mt-6">
                    <label className="mb-1 font-medium text-lg">Assunto</label>
                    <input type="text" placeholder="Digite o assunto" required
                           className="w-full h-11 rounded-md px-2 border-2 mb-2"
                    />
                    <label className="mb-1 font-medium text-lg">Descreva o problema</label>
                    <textarea placeholder="Descreva o problema..." required
                              className="w-full h-32 rounded-md px-2 border-2 mb-2 resize-none"
                    ></textarea>

                    {customers.length !== 0 && (
                        <>
                        <label className="mb-1 font-medium text-lg">Selecione o cliente</label>
                        <select className="w-full h-11 rounded-md px-2 border-2 mb-2 bg-white"
                        >

                            {customers.map(c => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                            ))}


                        </select>
                        </>
                    )}
                    {customers.length === 0 && (
                        <Link href="/dashboard/customer/new">Voce ainda não tem nenhum cliente,
                            <span className="text-blue-500 font-bold">Cadastrar cliente</span></Link>
                    )}

                    <button type="submit"
                            className="bg-blue-500 px-2 h-11 my-4 rounded-md disabled:bg-gray-400 text-white font-bold disabled:cursor-not-allowed"
                            disabled={customers.length === 0}
                    >Cadastrar</button>


                </form>
            </main>
        </Container>
    )
}