import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {NextResponse} from "next/server";

export async function POST(request: Request){
    const session = await getServerSession(authOptions)
    if (!session || !session.user)
        return NextResponse.json({error: "Não autorizado"}, {status: 401})


}