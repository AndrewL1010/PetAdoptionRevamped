
import React from 'react'
import NavBar from './NavBar'
import * as jose from 'jose';
import { cookies } from 'next/headers';

async function getStatus(): Promise<{status: boolean, username: string}>{

    const token = cookies().get("token");
    if (!token) {
        return { status: false, username: ""};
    }
    else {
        try {
            const tokenString = token.value.toString();
            const secret = new TextEncoder().encode(
                process.env.SECRET_KEY
            );
            const user = await jose.jwtVerify(tokenString, secret);
            return { status: true, username: user.payload.username as string};
        }
        catch (error) {
            return { status: false, username: ""};
        }
    }
}
async function NavBarParent() {
    const result = await getStatus();


    return (
        <NavBar status={result.status} user={result.username} ></NavBar>
    )
}

export default NavBarParent