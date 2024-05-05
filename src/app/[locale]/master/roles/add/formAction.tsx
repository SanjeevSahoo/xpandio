"use server";

import { schema } from "./formSchema";

export type FormState = {
  message: string;
  fields?: Record<string, any>;
  issues?: string[];
};

export async function onSubmitAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);
  console.log(formData);
  if (!parsed.success) {
    const fields: Record<string, any> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key];
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  return { message: "Role Created Successfully" };
}
