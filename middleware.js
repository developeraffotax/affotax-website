import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { nanoid } from "nanoid";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // --- 1. Admin auth check ---
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.SECRET_JWT);
      await jwtVerify(token.value, secret);
    } catch (err) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  // --- 2. Public page view tracking (skip /admin and /api) ---
  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  let visitorId = request.cookies.get("visitor_id")?.value;

  if (!visitorId) {
    visitorId = nanoid();
    response.cookies.set("visitor_id", visitorId, {
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: true,
    });
  }

  fetch(`${request.nextUrl.origin}/api/log-view`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: pathname, visitorId }),
  }).catch(() => {});

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|woff|woff2|ttf|map|xml|txt|json)$).*)",
  ],
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

 
