import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import { env } from '../../../utility/EnvironmentValidatior';
import { object, string } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
export async function POST(request: Request) {
    const data = await request.json();
    const schema = object({
        subject: string().required().min(1),
        email: string().email().required(),
        text: string().required().min(1),
    });
    const validationResult = await ValidationUtility(schema, data);
    if (validationResult.status === "fail") {
        return NextResponse.json(validationResult);
    }

    try {

        const { email, text, subject } = data;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.HOST_EMAIL,
                pass: env.HOST_PASSWORD,
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
        return NextResponse.json({ status: "success", message: info });


    }
    catch (error) {
        return NextResponse.json({ status: "fail", message: error });
    }



};
