import {Container} from "@/components/container"
import Link from "next/link";

export default function NewTicket() {
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
                    <label className="mb-1 font-medium text-lg">Selecione o cliente</label>
                    <select className="w-full h-11 rounded-md px-2 border-2 mb-2 bg-white"
                    >
                        <option>Teste</option>
                        <option>Teste</option>
                        <option>Teste</option>
                    </select>
                </form>
            </main>
        </Container>
    )
}