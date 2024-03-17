"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/app/auth";

const defaultValues = {
  username: "",
  password: "",
};

export async function login(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    await signIn("credentials", formData);

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
  await signOut();
}
