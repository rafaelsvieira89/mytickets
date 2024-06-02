"use client"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/input";


const schema = z.object({
    name: z.string().min(1, "O campo nome é obrigatório"),
    email: z.string().email("Digite um email valido").min(1, "O campo email é obrigatório"),
    phone: z.string().refine((value) =>{
        return /^(?:\(d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value)
    },{
        message: "O numero de telegone deve estar no formato (DD) 999999999"
    }),
    address: z.string()
})

type FormData = z.infer<typeof schema>

export function NewCustomerForm(){

    const {register,
        handleSubmit,
        formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    return(
        <form className="flex flex-col mt-6">
            <label className="mb-1">Nome completo</label>
            <Input
                type="text"
                name="name"
                placeholder="Digite o nome completo"
                error={errors.name?.message}
                register={register}
            />
        </form>
    )
}