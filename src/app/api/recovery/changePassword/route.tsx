import { NextResponse } from 'next/server';
import getConnection from '@/utility/dbHandler';
import { env } from '../../../../utility/EnvironmentValidatior';
import * as jose from 'jose';
import * as bcrypt from 'bcrypt';
import { User } from '@/types/TableModels';
import { object, string, ref } from 'yup';
import ValidationUtility from '@/utility/ValidateorUtility';
export async function PUT(request: Request) {
    const data = await request.json()
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
            env.EMAIL_SECRET_KEY
        );
        const user = await jose.jwtVerify(recoverytoken, secret);
        const database = getConnection();
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.schema.password, salt);
        if (database && typeof user.payload.id === "number") {
            await database<User>('users').where({ id: user.payload.id }).update({
                password: hashedPassword
            })
            await database.destroy();
            return NextResponse.json("success");
        }
        return NextResponse.json("success");

    }
    catch (error) {
        console.log(error);
        return NextResponse.json("fail");
    }



};
