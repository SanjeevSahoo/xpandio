"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/app/[locale]/auth";
import { decryptData } from "@/_common/utils/crypto";

const defaultValues = {
  username: "",
  password: "",
};

export async function login(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();
    const decDomainId = decryptData(username || "");
    const decPassword = decryptData(password || "");

    await signIn("credentials", {
      username: decDomainId,
      password: decPassword,
      redirectTo: "/dashboard",
    });

    return {
      message: "success",
      errors: {},
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "credentials error",
            errors: {
              ...defaultValues,
              credentials: "incorrect username or password",
            },
          };
        default:
          return {
            message: "unknown error",
            errors: {
              ...defaultValues,
              unknown: "unknown error",
            },
          };
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/" });
}
