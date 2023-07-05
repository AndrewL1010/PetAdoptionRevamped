import getConnection from '@/utility/dbHandler';
import * as bcrypt from 'bcrypt';
import * as jose from 'jose';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
export async function POST(request: Request) {
    const database = getConnection();
    if (database) {
        console.log("helooooooooooooooo");
        let info = await request.json();
        let data = info.schema;
        const { username, password } = data;
        const user = await database("users").where({ username: username }).first();
        if (!user) {
            return NextResponse.json({ status: "fail" });
        }
        if (await bcrypt.compare(password, user.password)) {

            const secret = new TextEncoder().encode(
                process.env.SECRET_KEY
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
    return NextResponse.json({ status: "fail" });

}
