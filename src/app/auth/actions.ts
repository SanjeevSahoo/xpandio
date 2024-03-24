"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/app/auth";
import { decryptData, encryptData } from "@/_common/utils/crypto";

const defaultValues = {
  username: "",
  password: "",
};

export async function login(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();
    const pathname = formData.get("pathname")?.toString();
    const decDomainId = decryptData(username || "");
    const decPassword = decryptData(password || "");

    let appBase = pathname || "/dashboard";
    appBase = appBase.replace("/signin", "");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await signIn("credentials", {
      username: decDomainId,
      password: decPassword,
      redirectTo: appBase,
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

export async function logout(formData: FormData) {
  const pathname = formData.get("pathname");
  let signInBase = pathname ? pathname.toString() : "/";

  signInBase = signInBase === "/" ? "/" : `${signInBase}/signin`;
  await signOut({ redirectTo: signInBase });
}
