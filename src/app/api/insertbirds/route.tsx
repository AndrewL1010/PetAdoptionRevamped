const knexDB = require("../../database/knexConfig");
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    if (!data) {
        return NextResponse.json({ status: "fail" })
    }
    for (const bird of data) {
        const { type, name, age, gender, weight, breed, alt, image } = bird;
        await knexDB('birds').insert({
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