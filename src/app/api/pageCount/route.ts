import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
interface AnimalCount {
    total: string
}

export async function GET(request: Request) {
    const database = getConnection();
    if (database) {
        const count = await database('animals').count<AnimalCount>('* as total').first();
        if (count) {

            await database.destroy();
            return NextResponse.json(count);
        }
        await database.destroy();
        return NextResponse.json("fail");
    }
    return NextResponse.json("fail");
}
