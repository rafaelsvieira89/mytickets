"use client"
import {Container} from "@/components/container";
import {Input} from "@/components/input";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {FiSearch} from "react-icons/fi";
import {white} from "next/dist/lib/picocolors";

const schema = z.object({
    email: z.string().email("Digite o email do cliente para localizar").min(1, "O campo email é obrigatorio")
})

type FormData = z.infer<typeof schema>

export default function OpenTicket() {
    const {register, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    return (
        <div className="w-full max-w-2xl mx-auto px-2">
            <h1 className="font-bold text-3xl text-center mt-24">Abrir Chamado</h1>
            <main className="flex flex-col mt-4 mb-2">
                <form className="bg-slate-200 py-6 px-2 rounded border-2">
                    <div className="flex flex-col gap-3">
                        <Input type="text" placeholder="Informe o email do cliente..." name="email" register={register}
                               error={errors.email?.message}/>
                        <button
                            className="flex bg-blue-500 flex-row gap-3 px-2 h-11
                                text-white items-center justify-center rounded active:bg-blue-400">
                            Procurar cliente
                            <FiSearch size={24} color="#FFF"/>
                        </button>
                    </div>

                </form>
            </main>
        </div>
    )
}