import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      _id: string;
      emp_id: string;
    } & DefaultSession["user"];
    error: string;
  }
  interface User {
    id: string;
    _id: string;
    email: string;
    emp_id: string;
    name: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    _id: string;
    emp_id: string;
  }
}
