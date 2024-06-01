export function CustomerCard() {
    return (
        <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg hover:scale-105 duration-300">
            <h2>
                <a className="font-bold">Nome:</a>
                Customer Card</h2>
            <p>
                <a className="font-bold">Email:</a> teste@teste.com
            </p>
            <p>
                <a className="font-bold">Telefone:</a> 32325248
            </p>
            <button className="bg-red-500 px-4 rounded text-left self-start text-white">
                Deletar
            </button>
        </article>
    )
}