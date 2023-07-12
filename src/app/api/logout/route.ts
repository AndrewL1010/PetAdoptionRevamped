import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { env } from '../../../utility/EnvironmentValidatior';
import * as jose from 'jose';
export async function POST(request: Request) {
   const unverified_csrf_token_cookie = cookies().get('csrf_token')?.value;
   const unverified_csrf_token_headers = request.headers.get('csrf_token');


   if (unverified_csrf_token_cookie && unverified_csrf_token_headers) {
      const csrf_secret = new TextEncoder().encode(
         env.CSRF_SECRET_KEY
      );
      const verified_token1 = await jose.jwtVerify(unverified_csrf_token_cookie, csrf_secret);
      const verified_token2 = await jose.jwtVerify(unverified_csrf_token_headers, csrf_secret);

      if (verified_token1.payload.csrf_token === verified_token2.payload.csrf_token) {
         cookies().delete('token');
         cookies().delete('csrf_token');
         return NextResponse.json({ status: "success" });
      }
   }

   return NextResponse.json({ status: "fail", message: "Invalid request for third party" });




}