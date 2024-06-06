"use client"
import {Input} from "@/components/input";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {api} from "@/lib/api";

const schema = z.object({
    name: z.string().min(1, "Informe o nome da organização"),
    email: z.string().email("Informe o email da organização"),
    phone: z.string()
})

type FormData = z.infer<typeof schema>

export function OrganizationForm(){

    const {register,
        handleSubmit,
    formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    async function handleSubmitOrganization(formData: FormData){
        await api.post("/api/organization", {
            name: formData.name,
            phone: formData.phone,
            email: formData.email
        })
    }

    return(
        <form onSubmit={handleSubmit(handleSubmitOrganization)}>
            <label>Nome:</label>
            <Input
                error={errors.name?.message}
                type="text" placeholder="Informe o nome da oraganização" name="name" register={register}/>
            <label>Telefone:</label>
            <Input
                error={errors.phone?.message}
                type="text" placeholder="Informe o nome da oraganização" name="phone" register={register}/>
            <label>Email:</label>
            <Input type="text"
                   error={errors.email?.message}
                   placeholder="Informe o nome da oraganização" name="email" register={register}/>
            <button type="submit">Cadastrar</button>
        </form>
    )
}