const bcrypt = require("bcrypt");
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import * as jose from 'jose';
import { env } from '../../../utility/EnvironmentValidatior';
import { User } from '../../../types/TableModels';
export async function POST(request: Request) {
    const database = getConnection();
    const info = await request.json();
    const data = info.schema;
    if (database) {
        const existingUser = await database<User>("users").where({ username: data.username }).first();
        if (existingUser) {
            return NextResponse.json("fail");
        }
        const { username, password, email } = data;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);


        const dbresult = await database<User>("users").insert({
            username: username,
            password: hashedPassword,
            email: email,
        }).returning(['id']);
        const user = dbresult[0];
        const user_id = user.id;
        const secret = new TextEncoder().encode(
            env.EMAIL_SECRET_KEY
        );
        const emailToken = await new jose.SignJWT({ id: user_id, email: email })
            .setProtectedHeader({ alg: "HS256" })
            .sign(secret);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.HOST_EMAIL,
                pass: env.HOST_PASSWORD,
            }
        });
        const URL = `${env.BASE_URL}/api/confirmation/${emailToken}`;
        console.log(email);
        const mailOptions = {
            from: env.HOST_EMAIL,
            to: email,
            subject: "Pet Sanctuary Account Registration Confirmation",
            html: `Please click the link to verify your account: <a href=${URL}>${URL}</a>`
        }
        console.log("sending email");
        await transporter.sendMail(mailOptions);
        await database.destroy();

        return NextResponse.json("success");
    }
    else {
        return NextResponse.json("fail");
    }
}
