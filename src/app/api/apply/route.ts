import { NextResponse } from 'next/server';
import getConnection from '@/utility/dbHandler';
export async function POST(request: Request) {
    const info = await request.json();
    const data = info.schema;
    const database = getConnection();
    if (database) {
        try {
            await database('applications').insert({
                user_id: data.user_id,
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
        catch (error) {
            console.log(error);
            return NextResponse.json({ status: "fail"})
        }
    }
    NextResponse.json({ status: "fail", description: "Unable to establish database connection" });




};
