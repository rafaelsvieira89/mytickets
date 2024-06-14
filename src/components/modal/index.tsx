"use client"

import {useContext, useRef, MouseEvent} from "react";
import {ModalContext} from "@/providers/modal";
import {TicketProps} from "@/utils/ticket.type";
import {CustomerProps} from "@/utils/customer.type";

interface TicketInfo{
    ticket: TicketProps;
    customer: CustomerProps | null;
}

interface ModalTicketProps {
    ticket?: TicketInfo | undefined
}

export function ModalTicket({ticket}: ModalTicketProps) {

    const {handleModalVisible} = useContext(ModalContext)
    const modalRef = useRef<HTMLDivElement | null>(null);

    function handleCloseModal(e: MouseEvent<HTMLDivElement>) {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleModalVisible()
        }
    }


    return (
        <div className="absolute bg-gray-900/80 w-full min-h-screen" onClick={handleCloseModal}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div ref={modalRef} id="centraliza-conteudo-absoluto"
                     className="bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-lg md:text-2xl">Detalhes do chamado</h1>
                        <button className="bg-red-500 rounded p-1 px-2" onClick={handleModalVisible}>Fechar</button>
                    </div>

                    <div className="flex gap-1 flex-wrap mb-2">
                        <h2 className="font-bold">Nome:</h2>
                        <p>{ticket?.ticket?.name}</p>
                    </div>

                    <div className="flex flex-col flex-wrap gap-1 mb-2">
                        <h2 className="font-bold">Descrição:</h2>
                        <p>{ticket?.ticket?.description}</p>
                    </div>

                    <div className="w-full border-b-[1.5px] my-4"></div>
                    <h1 className="font-bold text-lg mb-4">Detalhes do cliente</h1>

                    <div className="flex gap-1 flex-wrap mb-2">
                        <h2 className="font-bold">Nome:</h2>
                        <p>{ticket?.customer?.name}</p>
                    </div>

                    <div className="flex gap-1 flex-wrap mb-2">
                        <h2 className="font-bold">Telefone:</h2>
                        <p>{ticket?.customer?.phone}</p>
                    </div>

                    <div className="flex gap-1 flex-wrap mb-2">
                        <h2 className="font-bold">Email:</h2>
                        <p>{ticket?.customer?.email}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}