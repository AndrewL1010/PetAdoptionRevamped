import { NextResponse } from 'next/server';
import getConnection from '@/utility/dbHandler';
import  {env} from '../../../../utility/EnvironmentValidatior';
import * as jose from 'jose';
export async function GET(request: Request, { params }: { params: { token: string } }) {
    try {
        const emailToken = params.token;
        const secret = new TextEncoder().encode(
            env.EMAIL_SECRET_KEY
        );
        const user = await jose.jwtVerify(emailToken, secret);
        const database = getConnection();
        if (database) {
            await database('users').where({ id: user.payload.id }).update({
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
