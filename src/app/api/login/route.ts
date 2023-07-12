import getConnection from '@/utility/dbHandler';
import * as bcrypt from 'bcrypt';
import * as jose from 'jose';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { env } from '../../../utility/EnvironmentValidatior';
import { User } from '@/types/TableModels';
import { object, string } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
import * as crypto from 'crypto';
export async function POST(request: Request) {
    const data = await request.json();
    const schema = object({
        username: string().required().min(1),
        password: string().required().min(1),
    });
    const validationResult = await ValidationUtility(schema, data);
    if (validationResult.status === "fail") {
        return NextResponse.json(validationResult);
    }




    const database = getConnection();
    if (database) {

        const { username, password } = data;
        const user = await database<User>("users").where({ username: username }).first();
        await database.destroy();
        if (!user) {
            return NextResponse.json({ status: "fail", message: "Incorrect username or password" });
        }
        if (user.confirmation === false) {
            return NextResponse.json({ status: "fail", message: "Please check your email. You must verify your account before logging in" });
        }
        if (await bcrypt.compare(password, user.password)) {

            const user_secret = new TextEncoder().encode(
                env.USER_SECRET_KEY
            );
            const token = await new jose.SignJWT({ username: username, password: password })
                .setProtectedHeader({ alg: "HS256" })
                .setExpirationTime("1h")
                .sign(user_secret);
            cookies().set({
                name: "token",
                value: token,
                httpOnly: false,
            });


            const csrf_token = crypto.randomBytes(64).toString('hex');
            const csrf_secret = new TextEncoder().encode(
                env.CSRF_SECRET_KEY
            );
            const csrf_signed_token = await new jose.SignJWT({ csrf_token: csrf_token })
                .setProtectedHeader({ alg: "HS256" })
                .setExpirationTime("1h")
                .sign(csrf_secret);
            cookies().set({
                name: "csrf_token",
                value: csrf_signed_token,
                httpOnly: false,
            });

            return NextResponse.json({ status: "success", username: username });
        }
    }
    return NextResponse.json({ status: "fail", message: "Incorrect username or password" });

}
