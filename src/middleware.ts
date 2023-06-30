import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { string, object } from 'yup';
import * as knexDb from "./app/database/knexConfig";
const jose = require('jose');
const registrySchema = object({
    username: string().required(),
    password: string().required(),
});
const contactSchema = object({
    subject: string().required(),
    email: string().required(),
    text: string().required(),
});


export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/register') || request.nextUrl.pathname.startsWith('/api/login') || request.nextUrl.pathname.startsWith('/api/email')) {
        try {
            const data = await request.json();
            if (data.username) {
                const result = await registrySchema.validate(data);
            }
            else {
                const result = await contactSchema.validate(data);
            }

            return NextResponse.next();
        }
        catch (error) {
            return NextResponse.json("input-error");
        }
    }
    if (request.nextUrl.pathname.startsWith('/welcome')) {
        const token = request.cookies.get("token");
        if (!token) {
            return NextResponse.redirect('http://localhost:3000/');
        }
        try {
            const tokenString = token.value.toString();
            const secret = new TextEncoder().encode(
                process.env.SECRET_KEY
            );
            const user = jose.jwtVerify(tokenString, secret);
            return NextResponse.next();
        }
        catch (error) {
            return NextResponse.redirect('http://localhost:3000/');
        }
    }


};
