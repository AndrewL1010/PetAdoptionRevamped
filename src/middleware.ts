import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { string, object, number, ref, } from 'yup';
import * as yup from 'yup';
import * as jose from 'jose';
import { env } from './utility/EnvironmentValidatior';


export async function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/adopt')) {
        const token = request.cookies.get("token");
        if (!token) {
            return NextResponse.redirect(env.BASE_URL);
        }
        try {
            const tokenString = token.value.toString();
            const secret = new TextEncoder().encode(
                env.USER_SECRET_KEY
            );
            const user = await jose.jwtVerify(tokenString, secret);
            return NextResponse.next();
        }
        catch (error) {
            return NextResponse.redirect(env.BASE_URL);
        }
    }
    // if (request.nextUrl.pathname.startsWith('/recovery')) {
    //     const token = request.nextUrl.searchParams.get("recoveryToken");
    //     if (!token) {
    //         return NextResponse.redirect(env.BASE_URL);
    //     }
    //     try {
    //         const secret = new TextEncoder().encode(
    //             env.RECOVERY_SECRET_KEY
    //         );
    //         const recoveryToken = await jose.jwtVerify(token, secret);
    //         return NextResponse.next();
    //     }
    //     catch (error) {
    //         return NextResponse.redirect(env.BASE_URL);
    //     }

    // }
};
