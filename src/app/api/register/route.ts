const knexDB = require("../../database/knexConfig");
const bcrypt = require("bcrypt");
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const database = getConnection();
    const info = await request.json();
    const data = info.schema;
    if (database) {
        const existingUser = await database("users").where({ username: data.username }).first();
        if (existingUser) {
            return NextResponse.json("fail");
        }
        const { username, password } = data;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);


        await database("users").insert({
            username: username,
            password: hashedPassword,
        })
        await database.destroy();

        return NextResponse.json("success");
    }
    else {
        return NextResponse.json("fail");
    }
}
