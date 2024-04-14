"use client";

import React from "react";
import { logout } from "./actions";
import { Button } from "@/_common/components/ui/button";
import { useFormState } from "react-dom";

const logutInitialState = {
  message: "",
  errors: {
    unknown: "",
  },
};

function LogoutButton() {
  const [formState, formAction] = useFormState(logout, logutInitialState);

  const handleFormAction = () => {
    sessionStorage.removeItem("xpandioapp");
    formAction();
  };
  return (
    <form action={handleFormAction}>
      <Button type="submit" className="w-40" variant="secondary">
        logout
      </Button>
    </form>
  );
}

export default LogoutButton;
