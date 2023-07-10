import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { string, object, number, ref, } from 'yup';
import * as yup from 'yup';
import * as jose from 'jose';
import { env } from './utility/EnvironmentValidatior';
const schemas = {
    login: object({
        username: string().required().min(1),
        password: string().required().min(1),
    }),
    recovery: object({
        username: string().required().min(1),
    }),
    change_password: object({
        password: string().required().min(1),
        confirmPassword: string().oneOf([ref('password')]).required(),
    }),
    register: object({
        username: string().required().min(1),
        password: string().required().min(1),
        email: string().email().required()
    }),
    contact: object({
        subject: string().required().min(1),
        email: string().required(),
        text: string().required().min(1),
    }),
    application: object({
        animal_id: number().required().min(1),
        firstName: string().required().min(1),
        lastName: string().required().min(1),
        occupation: string().required().min(1),
        address: string().required().min(1),
        experience: string().required().min(1),
        email: string().required(),
    }),

};

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/register') || request.nextUrl.pathname.startsWith('/api/login') || request.nextUrl.pathname.startsWith('/api/email') || request.nextUrl.pathname.startsWith('/api/apply')) {
        console.log("middleware");
        const { schema, schemaType } = await request.json();
        console.log(schema);
        console.log(schemaType);
        try {
            await schemas[schemaType as keyof typeof schemas].validate(schema);
            console.log("schema validated");
            return NextResponse.next();
        }
        catch (error) {
            if (error instanceof yup.ValidationError) {
                const message = error.errors[0];
                return NextResponse.json({ status: "fail", message: message });
            }
            return NextResponse.json({ status: "fail", message: "Something went wrong on server side" });
        }
    }
    if (request.nextUrl.pathname.startsWith('/adopt')) {
        const token = request.cookies.get("token");
        if (!token) {
            return NextResponse.redirect(env.BASE_URL);
        }
        try {
            const tokenString = token.value.toString();
            const secret = new TextEncoder().encode(
                env.SECRET_KEY
            );
            const user = await jose.jwtVerify(tokenString, secret);
            return NextResponse.next();
        }
        catch (error) {
            return NextResponse.redirect(env.BASE_URL);
        }
    }
    if (request.nextUrl.pathname.startsWith('/recovery')) {
        const token = request.nextUrl.searchParams.get("recoveryToken");
        if (!token) {
            return NextResponse.redirect(env.BASE_URL);
        }
        try {
            const secret = new TextEncoder().encode(
                env.EMAIL_SECRET_KEY
            );
            const recoveryToken = await jose.jwtVerify(token, secret);
            return NextResponse.next();
        }
        catch (error) {
            return NextResponse.redirect(env.BASE_URL);
        }

    }
};
