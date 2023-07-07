const bcrypt = require("bcrypt");
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import * as jose from 'jose';
export async function POST(request: Request) {
    const database = getConnection();
    const info = await request.json();
    const data = info.schema;
    if (database) {
        const existingUser = await database("users").where({ username: data.username }).first();
        if (existingUser) {
            return NextResponse.json("fail");
        }
        const { username, password, email } = data;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);


        await database("users").insert({
            username: username,
            password: hashedPassword,
            email: email,
        });

        const user = await database("users").where({ username: username }).first();
        const user_id = user.id;
        const secret = new TextEncoder().encode(
            process.env.EMAIL_SECRET_KEY
        );
        const emailToken = await new jose.SignJWT({ id: user_id, email: email })
            .setProtectedHeader({ alg: "HS256" })
            .sign(secret);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.HOST_EMAIL,
                pass: process.env.HOST_PASSWORD,
            }
        });
        const URL = `${process.env.BASE_URL}/api/confirmation/${emailToken}`;
        console.log(user.email);
        const mailOptions = {
            from: process.env.HOST_EMAIL,
            to: user.email,
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
