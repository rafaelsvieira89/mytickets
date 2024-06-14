import {CustomerProps} from "@/utils/customer.type";

export interface TicketProps {
    id: string
    name: string;
    description: string;
    created_at: Date | null;
    status: string;
    customer: CustomerProps;
    code: string
}