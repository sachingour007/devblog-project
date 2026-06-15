import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const verifyToken = async (token: string) => {
	try {
		const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
		const { payload } = await jwtVerify(token, secret);
		return payload;
	} catch {
		return null;
	}
};

export async function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value;
	const pathname = req.nextUrl.pathname;

	const privateRoutes = ["/dashboard"];
	const redirectIfAuthenticated = ["/login", "/signup"];
	const adminRoutes = ["/admin"];

	const isPrivateRoute = privateRoutes.some((route) =>
		pathname.startsWith(route),
	);
	const isAuthRoute = redirectIfAuthenticated.some((route) =>
		pathname.startsWith(route),
	);
	const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

	if ((isPrivateRoute || isAdminRoute) && !token) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	if (token) {
		const payload = await verifyToken(token);

		if (!payload) {
			return NextResponse.redirect(new URL("/login", req.url));
		}
		if (isAdminRoute && payload.role !== "admin") {
			return NextResponse.redirect(new URL("/dashboard", req.url));
		}
		if (isAuthRoute) {
			return NextResponse.redirect(new URL("/dashboard", req.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/signup"],
};
