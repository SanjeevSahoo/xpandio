import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import AuthService from "@/_common/db/services/auth";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const user = await AuthService.authenticateUser(
          credentials.username as string,
          credentials.password as string
        );

        if (user && !user.error) {
          return user.data;
        } else {
          console.log("Invalid Credentials");

          return null;
        }
      },
    }),
  ],
});
