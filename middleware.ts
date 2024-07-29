import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { TLocalStore } from "./utils";
// export function middleware(req) {
  // const accessToken = getCookie(TLocalStore.ACCESS_TOKEN);

  // if (!accessToken) {
  //   if (req.nextUrl.pathname === "/login") {
  //     return NextResponse.next();
  //   }

  //   const loginUrl = req.nextUrl.clone();
  //   loginUrl.pathname = "/login";
  //   return NextResponse.redirect(loginUrl, req.url);
  // }

//   return NextResponse.next();
// }

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
