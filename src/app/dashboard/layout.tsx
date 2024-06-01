import {ReactNode} from "react";
import {DashboardHeader} from "@/app/dashboard/components";

export default function DashboardLayout({children}:{children: ReactNode}){
    return(
        <div>
            <DashboardHeader/>
            {children}
        </div>
    )
}