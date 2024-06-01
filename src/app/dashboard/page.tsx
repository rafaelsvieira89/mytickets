import {Container} from "@/components/container";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/")
    }

    return (
        <Container>
            <main className="mt-9 mb-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Chamados</h1>
                    <Link href="/dashboard/new" className="bg-blue-500 text-white rounded px-4 py-1">
                        Abrir Chamado
                    </Link>
                </div>
            </main>
        </Container>
    )
}