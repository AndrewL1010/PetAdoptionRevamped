const knexDB = require("../../database/knexConfig");
const bcrypt = require("bcrypt");
import { NextResponse} from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    const existingUser = await knexDB('users').where({ username: data.username }).first();
    if (existingUser) {
        return NextResponse.json("fail");
    }
    const { username, password } = data;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await knexDB('users').insert({
        username: username,
        password: hashedPassword
    });
    

    return NextResponse.json("success");
}