"use client";

import React from "react";
import { logout } from "./actions";
import { Button } from "@/_common/components/ui/button";

function LogoutButton() {
  return (
    <form action={logout}>
      <Button type="submit" className="w-40" variant="secondary">
        logout
      </Button>
    </form>
  );
}

export default LogoutButton;
