"use client"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/input";


const schema = z.object({
    name: z.string().min(1, "O campo nome é obrigatório"),
    email: z.string().email("Digite um email valido").min(1, "O campo email é obrigatório"),
    phone: z.string().refine((value) => {
        return /^(?:\(d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value)
    }, {
        message: "O numero de telegone deve estar no formato (DD) 999999999"
    }),
    address: z.string()
})

type FormData = z.infer<typeof schema>

export function NewCustomerForm() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    function handleSubmitCustomer(data: FormData) {
        console.log(data)
    }

    return (
        <form className="flex flex-col mt-6" onSubmit={handleSubmit(handleSubmitCustomer)}>
            <label className="mb-1">Nome completo</label>
            <Input
                type="text"
                name="name"
                placeholder="Digite o nome completo"
                error={errors.name?.message}
                register={register}
            />
            <section className="flex gap-2 my-2 flex-col sm:flex-row">
                <div className="flex-1">
                    <label className="mb-1">Telefone</label>
                    <Input
                        type="number"
                        name="phone"
                        placeholder="Exemplo (dd) 999909020"
                        error={errors.phone?.message}
                        register={register}
                    />
                </div>
                <div className="flex-1">
                    <label className="mb-1">Email</label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Digite o email"
                        error={errors.email?.message}
                        register={register}
                    />
                </div>
            </section>

            <label className="mb-1">Endereço completo</label>
            <Input
                type="text"
                name="address"
                placeholder="Digite o endereço completo"
                error={errors.address?.message}
                register={register}
            />
            <button className="bg-blue-500 text-white rounded h-11 px-2 my-4 font-bold"
                    type="submit">Cadastrar
            </button>

        </form>
    )
}