import getConnection from '@/utility/dbHandler';
import * as bcrypt from 'bcrypt';
import * as jose from 'jose';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import {env} from '../../../utility/EnvironmentValidatior';
import { User } from '@/types/TableModels';
export async function POST(request: Request) {
    console.log("bypassed");
    const database = getConnection();
    if (database) {
        let info = await request.json();
        let data = info.schema;
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
                env.SECRET_KEY
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
