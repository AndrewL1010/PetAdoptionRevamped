import { NextResponse } from 'next/server';
import getConnection from '@/utility/dbHandler';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { env } from '../../../utility/EnvironmentValidatior';
import { Application, User } from '@/types/TableModels';
import { object, string, number } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
export async function POST(request: Request) {

    const unverified_csrf_token_cookie = cookies().get('csrf_token')?.value;
    const unverified_csrf_token_headers = request.headers.get('csrf_token');
    if (!unverified_csrf_token_cookie || !unverified_csrf_token_headers) {
        return NextResponse.json({ status: "fail", message: "Invalid request from third party" });
    }

    const csrf_secret = new TextEncoder().encode(
        env.CSRF_SECRET_KEY
    );
    const verified_token1 = await jose.jwtVerify(unverified_csrf_token_cookie, csrf_secret);
    const verified_token2 = await jose.jwtVerify(unverified_csrf_token_headers, csrf_secret);
    if (verified_token1.payload.csrf_token !== verified_token2.payload.csrf_token) {
        return NextResponse.json({ status: "fail", message: "Invalid request from third party" });
    }



    const data = await request.json();
    if (!data) {
        return NextResponse.json({ status: "failed", message: "No body provided" })
    }
    const schema = object({
        animal_id: number().required().min(1),
        firstName: string().required().min(1),
        lastName: string().required().min(1),
        occupation: string().required().min(1),
        address: string().required().min(1),
        experience: string().required().min(1),
        email: string().required(),
    });

    const validationResult = await ValidationUtility(schema, data);
    if (validationResult.status === "fail") {
        return NextResponse.json(validationResult);
    }


    const token = cookies().get("token");
    if (!token) {
        return NextResponse.json({ status: "fail" })
    }

    try {
        const tokenString = token.value.toString();
        const secret = new TextEncoder().encode(
            env.USER_SECRET_KEY
        );
        const user = await jose.jwtVerify(tokenString, secret);
        const username = user.payload.username
        const database = getConnection();
        if (database && typeof username === "string") {
            const userData = await database<User>('users').where({ username: username }).first();
            if (userData) {
                await database<Application>('applications').insert({
                    user_id: userData.id,
                    animal_id: data.animal_id,
                    firstname: data.firstName,
                    lastname: data.lastName,
                    occupation: data.occupation,
                    address: data.address,
                    experience: data.experience,
                    email: data.email,
                });
                await database.destroy();
                return NextResponse.json({ status: "success" });

            }
            await database.destroy();
            return { status: "fail" };

        }
        return NextResponse.json({ status: "fail", message: "Something went wrong on server side" });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ status: "fail", message: error });
    }
}

