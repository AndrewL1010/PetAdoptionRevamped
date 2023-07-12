import { NextResponse } from "next/server";
import * as jose from 'jose';
import { cookies } from 'next/headers'
import { env } from "@/utility/EnvironmentValidatior";

export async function POST(request: Request) {

    const token = cookies().get("token");
    if (!token) {
        return NextResponse.json({ status: "fail" });
    }
    try {
        const tokenString = token.value.toString();
        const secret = new TextEncoder().encode(
            env.USER_SECRET_KEY
        );
        await jose.jwtVerify(tokenString, secret);
        return NextResponse.json({ status: "success" });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ status: "fail" });
    }

}