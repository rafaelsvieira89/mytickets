import {Container} from "@/components/container";
import Link from "next/link";

export function DashboardHeader(){
    return (
        <Container>
            <header>
                <Link href="/dashboard">
                    Chamados
                </Link>
                <Link href="/dashboard/customer">
                    Clientes
                </Link>
            </header>
        </Container>
    )
}