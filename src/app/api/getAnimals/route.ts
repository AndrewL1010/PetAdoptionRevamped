import { Animal } from '@/types/TableModels';
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';
interface AnimalCount {
    total: string
}

export async function POST(request: Request) {
    const data = await request.json()
    const filter = data.filter;
    // console.log("#################################################");
    // console.log(filter);
    // console.log(data)

    const page = parseInt(data.page);
    const database = getConnection();
    if (database) {
        if (filter === "all") {
            const animals = await database<Animal>('animals').limit(21).offset(page * 21);

            await database.destroy();
            return NextResponse.json({ status: "success", animals: animals });

        }
        else {
            const animals = await database<Animal>('animals').where({ type: filter }).limit(21).offset(page * 21);;
            await database.destroy();
            return NextResponse.json({ status: "success", animals: animals });

        }

    }
    return NextResponse.json("fail");
}
