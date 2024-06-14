"use client"

export function ModalTicket() {
    return (
        <section className="absolute bg-gray-900/80 w-full min-h-screen">
            <div className="absolute inset-0 flex items-center justify-center">
                <div id="centraliza-conteudo-absoluto"
                     className="bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded">
                    <div className="flex items-center justify-between">
                    <h1 className="font-bold text-lg md:text-2xl">Detalhes do chamado</h1>
                        <button className="bg-red-500 rounded p-1 px-2">Fechar</button>
                    </div>

                </div>
            </div>
        </section>
    )
}