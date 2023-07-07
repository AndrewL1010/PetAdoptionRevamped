import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import {env} from '../../../utility/EnvironmentValidatior';
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, text, subject } = body.schema;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.HOST_EMAIL,
                pass: process.env.HOST_PASSWORD,
            }
        });
        const mailOptions = {
            from: email,
            to: env.HOST_EMAIL,
            subject: `${subject} - sent by ${email}`,
            text: text,
            replyTo: email,
        }
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({ status: "success", description: info });


    }
    catch (error) {
        return NextResponse.json({ status: "error", description: error });
    }



};
