import { NextResponse } from 'next/server';
import getConnection from '@/utility/dbHandler';
import { env } from '../../../../utility/EnvironmentValidatior';
import * as jose from 'jose';
import * as bcrypt from 'bcrypt';
import { Recovery_Token, User } from '@/types/TableModels';
import { object, string, ref } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
export async function PUT(request: Request) {
    const data = await request.json()

    if (!data.recoveryToken) {
        return NextResponse.redirect(env.BASE_URL);
    }
    try {
        const secret = new TextEncoder().encode(
            env.RECOVERY_SECRET_KEY
        );
        await jose.jwtVerify(data.recoveryToken, secret);
    }
    catch (error) {
        return NextResponse.redirect(env.BASE_URL);
    }
    const schema = object({
        password: string().required().min(1),
        confirmpassword: string().required().min(1),
    });

    const validationResult = await ValidationUtility(schema, data);
    if (validationResult.status === "fail") {
        return NextResponse.json(validationResult);
    }

    try {
        const recoverytoken = data.recoveryToken;
        const secret = new TextEncoder().encode(
            env.RECOVERY_SECRET_KEY
        );

        const database = getConnection();
        if (!database) {
            return NextResponse.json({ status: "fail", message: "Something went wrong on server side" });
        }

        const storedToken = await database<Recovery_Token>('recovery_tokens').where({ token: recoverytoken }).first();
        if (!storedToken) {
            return NextResponse.json({ status: "fail", message: "Invalid recovery link, please request another one" });
        }
        if (storedToken.valid === false) {
            return NextResponse.json({ status: "fail", message: "Your link has expired, please request another one" });
        }

        const user = await jose.jwtVerify(recoverytoken, secret);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, salt);
        if (database && typeof user.payload.id === "number") {
            await database<User>('users').where({ id: user.payload.id }).update({
                password: hashedPassword
            })
            await database('recovery_tokens').where({token: recoverytoken}).update({valid: false});
            await database.destroy();
        }
        return NextResponse.json("success");

    }
    catch (error) {
        console.log(error);
        return NextResponse.json("fail");
    }



};
