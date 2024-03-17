"use client";

import { login } from "@/app/auth/actions";
import { useFormState } from "react-dom";
import { Input } from "@/_common/components/ui/input";
import { Button } from "@/_common/components/ui/button";

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

  return (
    <form action={formAction} className="space-y-4 w-full max-w-sm">
      <Input required name="username" placeholder="username" />
      <Input required name="password" type="password" placeholder="password" />
      <Button variant="secondary" className="w-full" type="submit">
        submit
      </Button>
    </form>
  );
};

export default Form;
