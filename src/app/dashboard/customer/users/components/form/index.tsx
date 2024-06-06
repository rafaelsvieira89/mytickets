"use client"

import {z} from "zod";
import {Input} from "@/components/input";
import {useForm} from "react-hook-form";
import {api} from "@/lib/api";

interface NewCustomerUserProps{
    customerId: string
}

const schema = z.object({
    name: z.string().min(1, "Informe o nome do usuário"),
    email: z.string().email("Informe o email do usuário")
})

type FormData = z.infer<typeof schema>

export function CustomerUserForm({customerId}: NewCustomerUserProps){

    const{register,
    handleSubmit,
    formState:{errors}} = useForm<FormData>()

    async function handleNewCustomerUserSubmit(formData: FormData) {
        await api.post("/api/customer/users", {
            name: formData.name,
            email: formData.email,
            customerId: customerId
        })
    }

    return(
        <form onSubmit={handleSubmit(handleNewCustomerUserSubmit)}>
            <label>Nome:</label>
            <Input
                type="text" placeholder="informe o nome"
                name="name" register={register}
                error={errors.name?.message}/>
            <label>Email:</label>
            <Input
                type="text" placeholder="informe o email"
                name="email" register={register}
                error={errors.email?.message}/>
            <button type="submit">Cadastrar</button>
        </form>
    )
}