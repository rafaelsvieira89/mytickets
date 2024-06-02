import {NextResponse} from "next/server";

export async function POST(request: Request){

    const {name, phone, email, address} = await request.json()


    return NextResponse.json({message: "Rota de cadastro"})
}