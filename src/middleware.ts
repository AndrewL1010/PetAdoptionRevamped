import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { string, object, number } from 'yup';
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
const applicationSchemqa = object({
    user_id: number().required(),
    animal_id: number().required(),
    firstName: string().required(),
    lastName: string().required(),
    occupation: string().required(),
    address: string().required(),
    experience: string().required(),
    email: string().required(),
});


export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/register') || request.nextUrl.pathname.startsWith('/api/login') || request.nextUrl.pathname.startsWith('/api/email') || request.nextUrl.pathname.startsWith('/api/apply')) {
        try {
            const { schema, schemaType } = await request.json();
            if (schemaType === "register" || schemaType === "login") {
                const result = await registrySchema.validate(schema);
                return NextResponse.next();
            }
            if (schemaType === "contact") {
                const result = await contactSchema.validate(schema);
                return NextResponse.next();
            }
            if (schemaType === "application") {
                const result = await applicationSchemqa.validate(schema);
                return NextResponse.next();
            }
            return NextResponse.json({ status: "fail" });

        }
        catch (error) {
            return NextResponse.json("input-error");
        }
    }
    if (request.nextUrl.pathname.startsWith('/profile') || request.nextUrl.pathname.startsWith('/adopt')) {
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
