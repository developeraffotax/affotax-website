import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// .env: ALLOWED_ORIGINS=http://localhost:3000,https://crm.yourdomain.com
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function withCors(response, origin) {
  // Access-Control-Allow-Origin can only ever hold ONE origin (or "*"),
  // so we echo back the request's origin if it's on the allow-list,
  // rather than trying to set the whole list at once.
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }
  response.headers.set("Vary", "Origin"); // don't cache this response for a different origin
  response.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // ---- CORS for the CRM-facing chart API ----
  if (pathname.startsWith("/api/chart")) {
    const origin = request.headers.get("origin");

    if (request.method === "OPTIONS") {
      return withCors(new NextResponse(null, { status: 204 }), origin);
    }
    return withCors(NextResponse.next(), origin);
  }

  // ---- existing admin auth guard (unchanged) ----
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const secret = new TextEncoder().encode(process.env.SECRET_JWT);
  const isTokenValid = await jwtVerify(token.value, secret);

  if (!isTokenValid) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/chart/:path*"],
};









// import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";


// export async function middleware(request) {

  

// 	const token = request.cookies.get("token");
// 	if (!token) {
// 		return NextResponse.redirect(new URL("/login", request.url));
// 	}


// 	const secret = new TextEncoder().encode(process.env.SECRET_JWT);
// 	const isTokenValid = await jwtVerify(token.value, secret);


// 	if (!isTokenValid) {
// 		return NextResponse.redirect(new URL("/login", request.url));
// 	}
// }


// // See "Matching Paths" below to learn more
// export const config = {
// 	matcher: "/admin/:path*",
// };

 
