// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 루트(/) 접근 시 /mimimemo로 리디렉트
  if (pathname === "/") {
    return NextResponse.redirect("/mimimemo");
  }

  return NextResponse.next();
}
