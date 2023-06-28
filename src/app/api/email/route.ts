import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
export async function POST(request: Request) {
    try {
        const { email, text, subject } = await request.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.HOST_EMAIL,
                pass: process.env.HOST_PASSWORD,
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.HOST_EMAIL,
            subject: `${subject} - sent by ${email}`,
            text: text,
            replyTo: email,
        }
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({status: "success", description: info});


    }
    catch(error){
        return NextResponse.json({status: "error", description: error})
    }



};
