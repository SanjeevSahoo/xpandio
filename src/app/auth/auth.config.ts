import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  trustHost: true,
  session: {
    strategy: "jwt",
    maxAge: 60 * 1,
  },
  pages: {
    error: "/",
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;
      return isAuthenticated;
    },
    async jwt({ token, account, user }) {
      if (account && account.type === "credentials") {
        token._id = user._id || "";
        token.email = user.email || "";
        token.emp_id = user.emp_id || "";
      }
      return token;
    },
    async session({ session, token }) {
      session.user._id = token._id || "";
      session.user.email = token.email || "";
      session.user.emp_id = token.emp_id || "";
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
