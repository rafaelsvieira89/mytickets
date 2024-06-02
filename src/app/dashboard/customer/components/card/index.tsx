import {CustomerProps} from "@/utils/customer.type";


export function CustomerCard({customer}: {customer: CustomerProps}) {
    return (
        <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg hover:scale-105 duration-300">
            <h2>
                <a className="font-bold">Nome:</a> {customer.name}</h2>
            <p>
                <a className="font-bold">Email:</a> {customer.email}
            </p>
            <p>
                <a className="font-bold">Telefone:</a> {customer.phone}
            </p>
            <button className="bg-red-500 px-4 rounded text-left self-start text-white">
                Deletar
            </button>
        </article>
    )
}