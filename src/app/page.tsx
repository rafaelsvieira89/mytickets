import Image from "next/image";
import heroImg from "@/assets/hero.svg"

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
            <h2 className="font-medium text-2xl mb-2">Gerencie sua empresa</h2>
            <h2 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">Atendimento, clientes</h2>
            <Image src={heroImg} alt="Imagem hero de atendente"
                   width={600}
                   className="max-w-sm md:max-w-xl"
            />
        </main>
    );
}
