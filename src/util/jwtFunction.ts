import jwt from "jsonwebtoken";

type JwtPayloadType = {
	userId: string;
};

export function jwtFunction(token: string): string {
	const decodeToken = jwt.verify(
		token,
		process.env.JWT_SECRET!,
	) as JwtPayloadType;

	return decodeToken.userId;
}
