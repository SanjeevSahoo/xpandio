"use client";

import { login } from "@/app/auth/actions";
import { useFormState } from "react-dom";
import { Input } from "@/_common/components/ui/input";
import { Button } from "@/_common/components/ui/button";
import { usePathname } from "next/navigation";

const loginInitialState = {
  message: "",
  errors: {
    username: "",
    password: "",
    credentials: "",
    unknown: "",
  },
};

const Form = () => {
  const [formState, formAction] = useFormState(login, loginInitialState);
  const pathname = usePathname();

  return (
    <form action={formAction} className="space-y-4 w-full max-w-sm">
      <Input
        required
        name="pathname"
        placeholder="pathname"
        defaultValue={pathname}
        className="hidden"
      />
      <Input required name="username" placeholder="username" />
      <Input required name="password" type="password" placeholder="password" />
      <Button variant="secondary" className="w-full" type="submit">
        submit
      </Button>
      {formState.message && <p className="text-red-500">Invalid Credentials</p>}
    </form>
  );
};

export default Form;
