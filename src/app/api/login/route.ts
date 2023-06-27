const knexDB = require("../../database/knexConfig");
import * as bcrypt from 'bcrypt';
import * as jose from 'jose';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import crypto from 'crypto';
export async function POST(request: Request) {
    let data = await request.json();
    const { username, password } = data;
    const user = await knexDB("users").where({ username: username }).first();
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
    return NextResponse.json({ status: "fail" });

}
