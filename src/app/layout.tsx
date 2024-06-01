import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";
import {AuthProvider} from "@/providers/auth";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "My Tickets - sistema de gerenciamento de tickets",
    description: "Gerencie seus clientes e atendimentos facilmente",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt_br">

        <body className={inter.className}>
        <AuthProvider>
            <Header/>
            {children}
        </AuthProvider>
        </body>

        </html>
    );
}
