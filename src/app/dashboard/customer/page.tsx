import {Container} from "@/components/container";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function Customer(){

    const session = await getServerSession(authOptions)

    if(!session || !session.user)
        redirect("/")

    return(
        <Container>
            <div>
                Clientes
            </div>
        </Container>
    )
}