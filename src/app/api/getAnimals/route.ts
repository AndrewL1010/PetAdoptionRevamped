import { Animal } from '@/types/TableModels';
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
interface AnimalCount {
    total: string
}

export async function POST(request: Request) {
    const data = await request.json()
    const filter = data.filter;
    const page = data.page === 0 ? parseInt(data.page) : parseInt(data.page) - 1;
    const database = getConnection();
    if (database) {
        if (filter === "all") {
            const animals = await database<Animal>('animals').limit(21).offset(page * 21);
            const count = await database('animals').count<AnimalCount>('* as total').first();

            await database.destroy();
            return NextResponse.json({ status: "success", animals: animals, count: count });

        }
        else {
            const animals = await database<Animal>('animals').where({ type: filter }).limit(21).offset(page * 21);
            const count = await database('animals').where({ type: filter }).count<AnimalCount>('* as total').first();
            await database.destroy();
            return NextResponse.json({ status: "success", animals: animals, count: count });

        }

    }
    return NextResponse.json("fail");
}
