import { SignJWT } from "jose";
import { JWT_MAX_AGE } from "../utils/constants";
import { User } from "next-auth";

export const generateJwt = (user: User) => {
    const secret = new TextEncoder().encode(process.env.API_SECRET);
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
    }
    const expirationTime = `${JWT_MAX_AGE}days`;
    const jwt = new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(expirationTime)
        .sign(secret);
    return jwt;
}
