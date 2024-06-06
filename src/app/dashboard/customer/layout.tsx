import {ReactNode} from "react";
import {Container} from "@/components/container";

export default function CustomerLayout({children}: {children: ReactNode}){
    return(
        <Container>
            <h1>Clientes layout</h1>
            {children}
        </Container>
    )
}