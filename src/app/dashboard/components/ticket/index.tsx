"use client"
import {FiCheckSquare, FiFile} from "react-icons/fi";
import {TicketProps} from "@/utils/ticket.type";
import {api} from "@/lib/api";
import {useRouter} from "next/navigation";
import {useContext} from "react";
import {ModalContext} from "@/providers/modal";

export function TicketItem({ticket}: {ticket: TicketProps}){
    const router = useRouter();

    const {handleModalVisible} = useContext(ModalContext)

    async function handleChangeStatus() {
        try {
            const resp = await api.patch("/api/ticket", {id: ticket.id})
            router.refresh()
        }catch (err){
            console.error(err)
        }
    }

    function handleOpenModal() {
        handleModalVisible();
    }

    return(
        <>
            <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300">
                <td className="text-left pl-1">
                    {ticket.customer.name}</td>
                <td className="text-left pl-1 hidden sm:table-cell">
                    {ticket.code}</td>
                <td className="text-left pl-1">
                    {ticket.name}</td>
                <td className="text-left hidden sm:table-cell">
                    {ticket.created_at?.toLocaleDateString("pt-BR")}
                </td>
                <td className="text-left">

                    <span className="bg-green-500 px-2 py-1 rounded">{ticket.status}</span></td>

                <td className="text-left hidden sm:table-cell">
                    <button className="mr-2 active:bg-gray-300 active:rounded" onClick={handleChangeStatus}>
                        <FiCheckSquare size={24} color="#131313"/>
                    </button>
                    <button onClick={handleOpenModal}>
                        <FiFile size={24} color="#3b82f6"/>
                    </button>
                </td>
            </tr>
        </>
    )
}