import { NextResponse } from 'next/server';
import getConnection from '@/utility/dbHandler';
import { env } from '../../../../utility/EnvironmentValidatior';
import * as jose from 'jose';
import { User } from '@/types/TableModels';
export async function GET(request: Request, { params }: { params: { token: string } }) {
    console.log("middleware passed");
    try {
        const emailToken = params.token;
        const secret = new TextEncoder().encode(
            env.EMAIL_SECRET_KEY
        );
        const user = await jose.jwtVerify(emailToken, secret);
        const database = getConnection();
        if (database && typeof user.payload.id === "number") {
            await database<User>('users').where({ id: user.payload.id }).update({
                confirmation: true
            })
            await database.destroy();
            return NextResponse.redirect(env.BASE_URL);
        }

    }
    catch (error) {
        console.log(error);
        return NextResponse.json("error");
    }



};
