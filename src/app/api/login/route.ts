import getConnection from '@/utility/dbHandler';
import * as bcrypt from 'bcrypt';
import * as jose from 'jose';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { env } from '../../../utility/EnvironmentValidatior';
import { User } from '@/types/TableModels';
import { object, string } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
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

            const secret = new TextEncoder().encode(
                env.USER_SECRET_KEY
            );
            const token = await new jose.SignJWT({ username: username, password: password })
                .setProtectedHeader({ alg: "HS256" })
                .sign(secret);
            cookies().set({
                name: "token",
                value: token,
                httpOnly: true,
            });

            return NextResponse.json({ status: "success", username: username });
        }
    }
    return NextResponse.json({ status: "fail", message: "Incorrect username or password" });

}
