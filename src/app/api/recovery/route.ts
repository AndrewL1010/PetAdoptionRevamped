import { User } from '@/types/TableModels';
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import * as jose from 'jose';
import { env } from '../../../utility/EnvironmentValidatior';
import { object, string } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
export async function POST(request: Request) {
    const data = await request.json();
    const schema = object({
        username: string().required().min(1)
    });
    const validationResult = await ValidationUtility(schema, data);
    if (validationResult.status === "fail") {
        return NextResponse.json(validationResult);
    }




    const database = getConnection();
    if (database) {
        const existingUser = await database<User>("users").where({ username: data.username }).first();
        if (!existingUser) {
            return NextResponse.json("fail");
        }

        const secret = new TextEncoder().encode(
            env.RECOVERY_SECRET_KEY
        );
        const recoveryToken = await new jose.SignJWT({ id: existingUser.id, email: existingUser.email, username: existingUser.username })
            .setExpirationTime("1h")
            .setProtectedHeader({ alg: "HS256" })
            .sign(secret);

        await database('recovery_tokens').insert({
            token: recoveryToken,
        });


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
            Please click the link to recover your account: <a href=${URL}>${URL}</a>
            <br>
            This link will expire in 1 hour.`
        }
        await transporter.sendMail(mailOptions);
        await database.destroy();

        return NextResponse.json("success");
    }
    else {
        return NextResponse.json("fail");
    }
}