const knexDB = require("../../database/knexConfig");
const bcrypt = require("bcrypt");
// import handleQuery from '@/utility/dbHandler';
import getConnection from '@/utility/dbHandler';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const database = getConnection();
    const data = await request.json();
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

// export async function POST(request: Request) {
//     const data = await request.json();
//     const rawQuery1 = `
//     SELECT *
//     FROM users
//     WHERE username = '${data.username}'
//     LIMIT 1`;

//     const existingUser = await handleQuery(rawQuery1);
//     if (existingUser.length > 0) {
//         return NextResponse.json("fail");
//     }
//     const { username, password } = data;
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const rawQuery2 = `
//     INSERT INTO users (username, password)
//     VALUES ('${username}','${hashedPassword}')`;


//     await handleQuery(rawQuery2);

//     return NextResponse.json("success");
// }