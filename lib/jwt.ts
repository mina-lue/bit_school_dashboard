import jwt from "jsonwebtoken";

interface DecodedToken {
  sub: string;
  username: string;
  role: "ADMIN" | "SUPER_ADMIN" | "STAFF" | "BASIC";
  exp: number;
  iat: number;
}

export function decodeToken(token: string): DecodedToken | null {
  try {
    return jwt.decode(token) as DecodedToken;
  } catch {
    return null;
  }
}
