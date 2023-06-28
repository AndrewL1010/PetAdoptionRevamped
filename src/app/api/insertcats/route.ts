const knexDB = require("../../database/knexConfig");
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    if (!data) {
        return NextResponse.json({ status: "fail" })
    }
    for (const cat of data) {
        const { type, name, age, gender, weight, breed, alt, image } = cat;
        await knexDB('cats').insert({
            type,
            name,
            age,
            gender,
            weight,
            breed,
            alt,
            image,
        });

    }

    return NextResponse.json({ status: "success" });
}