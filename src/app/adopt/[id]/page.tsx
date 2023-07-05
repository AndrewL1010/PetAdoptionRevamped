import PageProps from "@/types/PageProps"
import getConnection from "@/utility/dbHandler";
import ApplicationComponent from "@/components/ApplicationComponent";
import Animal from "@/types/Animal";
import { cookies } from "next/headers";
import * as jose from 'jose';

async function getUserID(): Promise<any> {

    const token = cookies().get("token");
    if (!token) {
        return { status: false, user_id: "" };
    }
    else {
        try {
            const tokenString = token.value.toString();
            const secret = new TextEncoder().encode(
                process.env.SECRET_KEY
            );
            const user = await jose.jwtVerify(tokenString, secret);
            const username = user.payload.username
            const database = getConnection();
            if (database) {
                const userData = await database('users').where({ username: username }).first();
                await database.destroy();
                if (userData) {
                    return { status: true, user_id: userData.id };
                }
                return { status: false };

            }
            return { status: false };
        }
        catch (error) {
            return { status: false };
        }
    }
}


async function Page({ params: { id } }: PageProps) {
    const database = getConnection();
    if (database) {
        const animal: Animal = await database('animals').where({ id: id }).first();
        await database.destroy();
        const response = await getUserID();
        if (response.status === true) {
            return (
                <ApplicationComponent name={animal.name} breed={animal.breed} animal_id={animal.id} user_id={response.user_id}></ApplicationComponent>
            )
        }

    }


}

export default Page