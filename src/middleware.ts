import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { string, object, number, ref } from 'yup';
import * as jose from 'jose';
import { env } from './utility/EnvironmentValidatior';
const loginSchema = object({
    username: string().required().min(1),
    password: string().required().min(6),
});
const recoverySchema = object({
    username: string().required().min(1),
});
const changePasswordSchema = object({
    password: string().required().min(1),
    confirmPassword: string().oneOf([ref('password')]).required(),
});
const registrySchema = object({
    username: string().required().min(1),
    password: string().required().min(1),
    email: string().email().required()
});
const contactSchema = object({
    subject: string().required().min(1),
    email: string().required(),
    text: string().required().min(1),
});
const applicationSchema = object({
    animal_id: number().required().min(1),
    firstName: string().required().min(1),
    lastName: string().required().min(1),
    occupation: string().required().min(1),
    address: string().required().min(1),
    experience: string().required().min(1),
    email: string().required(),
});

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/register') || request.nextUrl.pathname.startsWith('/api/login') || request.nextUrl.pathname.startsWith('/api/email') || request.nextUrl.pathname.startsWith('/api/apply')) {
        const { schema, schemaType } = await request.json();
        try {
            if (schemaType === "login") {
                const result = await loginSchema.validate(schema);
                return NextResponse.next();
            }
            if (schemaType === "register") {
                const result = await registrySchema.validate(schema);
                return NextResponse.next();
            }
            if (schemaType === "contact") {
                const result = await contactSchema.validate(schema);
                return NextResponse.next();
            }
            if (schemaType === "application") {
                const result = await applicationSchema.validate(schema);
                return NextResponse.next();
            }
            if (schemaType === "recovery") {
                const result = await recoverySchema.validate(schema);
                return NextResponse.next();
            }
            if (schemaType === "change_password") {
                const result = await changePasswordSchema.validate(schema);
                return NextResponse.next();
            }

            return NextResponse.json({ status: "fail" });

        }
        catch (error) {
            if (schemaType === "login") {
                return NextResponse.json({ status: "fail", message: "Incorrect username or password" });
            }
            return NextResponse.json("input-error");
        }
    }
    if (request.nextUrl.pathname.startsWith('/profile') || request.nextUrl.pathname.startsWith('/adopt')) {
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
