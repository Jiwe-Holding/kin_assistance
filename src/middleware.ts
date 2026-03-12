import { NextRequest, NextResponse } from "next/server";
import { decrypt, TOKEN_NAME } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (pathname.startsWith("/admin")) {
    // Exception for the login page itself
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    const token = request.cookies.get(TOKEN_NAME)?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      await decrypt(token);
      return NextResponse.next();
    } catch (error) {
      // Invalid token
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete(TOKEN_NAME);
      return response;
    }
  }

  return NextResponse.next();
}

// Config to limit middleware to admin routes for performance
export const config = {
  matcher: ["/admin/:path*"],
};
