"use client";

import { login } from "@/app/[locale]/auth/actions";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/_common/components/ui/input";
import { Button } from "@/_common/components/ui/button";
import { usePathname } from "next/navigation";
import { encryptData } from "@/_common/utils/crypto";
import { Alert, AlertTitle } from "@/_common/components/ui/alert";
import { AlertCircle } from "lucide-react";

const loginInitialState = {
  message: "",
  errors: {
    username: "",
    password: "",
    credentials: "",
    unknown: "",
  },
};

const SubmitButton = () => {
  const formStatus = useFormStatus();
  return (
    <>
      <Button
        variant="primary"
        className="w-full"
        type="submit"
        disabled={formStatus.pending}
      >
        Sign In
      </Button>
      {formStatus.pending && (
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-[auto_1fr] gap-2 justify-center items-center  h-[50px] p-2">
            <div className="relative inline-flex">
              <div className="w-5 h-5 bg-primary rounded-full"></div>
              <div className="w-5 h-5 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
              <div className="w-5 h-5 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
            <div className="font-normal text-sm">
              Please Wait ...! Authentication in Progress
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const LoginForm = () => {
  const [formState, formAction] = useFormState(login, loginInitialState);
  const pathname = usePathname();

  const handleFormAction = (formData: FormData) => {
    formData.set("username", encryptData(formData.get("username")));
    formData.set("password", encryptData(formData.get("password")));
    sessionStorage.setItem("xpandioapp", new Date().toISOString());
    formAction(formData);
  };

  return (
    <form action={handleFormAction} className="space-y-4 w-full ">
      <Input
        required
        name="pathname"
        placeholder="pathname"
        defaultValue={pathname}
        className="hidden"
      />
      <Input required name="username" placeholder="Your Username" />
      <Input
        required
        name="password"
        type="password"
        placeholder="Your Password"
      />
      <div className="py-2">
        <SubmitButton />
      </div>
      {formState && formState.message && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Invalid Credentials. Try again</AlertTitle>
        </Alert>
      )}
    </form>
  );
};

export default LoginForm;
