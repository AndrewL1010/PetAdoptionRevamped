import { NextResponse } from 'next/server';
import getConnection from '@/utility/dbHandler';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import { env } from '../../../utility/EnvironmentValidatior';
import { User } from '@/types/TableModels';
import VerifiedUserToken from '@/types/VerifiedToken';
export async function POST(request: Request) {
    const info = await request.json();
    const data = info.schema;
    const token = cookies().get("token");
    if (!token) {
        return NextResponse.json({ status: "fail" })
    }

    try {
        const tokenString = token.value.toString();
        const secret = new TextEncoder().encode(
            env.SECRET_KEY
        );
        const user = await jose.jwtVerify(tokenString, secret);
        console.log(user);
        const username = user.payload.username
        const database = getConnection();
        if (database && typeof username === "string") {
            const userData = await database<User>('users').where({ username: username }).first();
            if (userData) {
                await database('applications').insert({
                    user_id: userData.id,
                    animal_id: data.animal_id,
                    firstname: data.firstName,
                    lastname: data.lastName,
                    occupation: data.occupation,
                    address: data.address,
                    experience: data.experience,
                    email: data.email,
                });
                await database.destroy();
                return NextResponse.json({ status: "success" });

            }
            await database.destroy();
            return { status: false };

        }
        NextResponse.json({ status: "fail", description: "Unable to establish database connection" });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ status: "fail" })
    }
}

