import { User } from '@/types/TableModels';
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import * as jose from 'jose';
import { env } from '../../../utility/EnvironmentValidatior';
export async function POST(request: Request) {
    const database = getConnection();
    const info = await request.json();
    const data = info.schema;
    if (database) {
        const existingUser = await database<User>("users").where({ username: data.username }).first();
        if (!existingUser) {
            return NextResponse.json("fail");
        }

        const secret = new TextEncoder().encode(
            env.EMAIL_SECRET_KEY
        );
        const recoveryToken = await new jose.SignJWT({ id: existingUser.id, email: existingUser.email, username: existingUser.username })
            .setProtectedHeader({ alg: "HS256" })
            .sign(secret);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.HOST_EMAIL,
                pass: env.HOST_PASSWORD,
            }
        });
        const URL = `${env.BASE_URL}/recovery?recoveryToken=${recoveryToken}`;
        const mailOptions = {
            from: env.HOST_EMAIL,
            to: existingUser.email,
            subject: "Pet Sanctuary Account Recovery",
            html: `<strong><h2>if you did not request this recovery please ignore this email </h2> </strong>
            <br>
            Please click the link to recover your account: <a href=${URL}>${URL}</a>  `
        }
        await transporter.sendMail(mailOptions);
        await database.destroy();

        return NextResponse.json("success");
    }
    else {
        return NextResponse.json("fail");
    }
}