import bcrypt from 'bcrypt';
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import * as jose from 'jose';
import { env } from '../../../utility/EnvironmentValidatior';
import { User } from '../../../types/TableModels';
import { object, string } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
export async function POST(request: Request) {
    const data = await request.json();
    if (!data) {
        return NextResponse.json({ status: "fail", message: "No data provided." });
    }
    const schema = object({
        username: string().required().min(1),
        password: string().required().min(1),
        email: string().email().required().min(1),
    });
    const validationResult = await ValidationUtility(schema, data);
    if (validationResult.status === "fail") {
        return NextResponse.json(validationResult);
    }

    const database = getConnection()

    if (database) {
        const existingUser = await database<User>("users").where({ username: data.username }).first();
        if (existingUser) {
            return NextResponse.json({ status: "fail", message: "Username Taken, please try again." });
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
            env.EMAIL_REGISTER_KEY
        );
        const emailToken = await new jose.SignJWT({ id: user_id, email: email })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h")
            .sign(secret);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.HOST_EMAIL,
                pass: env.HOST_PASSWORD,
            }
        });
        const URL = `${env.BASE_URL}/api/confirmation/${emailToken}`;
        const mailOptions = {
            from: env.HOST_EMAIL,
            to: email,
            subject: "Pet Sanctuary Account Registration Confirmation",
            html: `Please click the link to verify your account: <a href=${URL}>${URL}</a>`
        }
        await transporter.sendMail(mailOptions);
        await database.destroy();

        return NextResponse.json({ status: "success" });
    }
    else {
        return NextResponse.json({ status: "fail", message: "Something went wrong on the server side" });
    }
}
