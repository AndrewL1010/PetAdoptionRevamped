const knexDB = require("../../database/knexConfig");
import { NextResponse } from 'next/server';
import handleQuery from '@/utility/dbHandler';
import Animal from '@/types/Animal';
import getConnection from '@/utility/dbHandler';
export async function POST(request: Request) {
    const data = await request.json();
    const database = getConnection();
    if (!data) {
        return NextResponse.json({ status: "fail" })
    }
    // for (const animal of data) {
    //     const { type, name, age, gender, weight, breed, alt, image, description } = animal;
    //     const rawQuery = `
    //     INSERT INTO animals (type, name, age, gender, weight, breed, alt, image, description)
    //     VALUES ('${type}','${name}','${age}','${gender}','${weight}','${breed}','${alt}','${image}','${description}')`;
    //     await handleQuery(rawQuery);
    // }
    if (database) {
        for (const animal of data) {
            const { type, name, age, gender, weight, breed, alt, image, description } = animal;
            await database("animals").insert({
                type,
                name,
                age,
                gender,
                weight,
                breed,
                alt,
                image,
                description,
            })
        }
        await database.destroy();
    }


    return NextResponse.json({ status: "success" });
}