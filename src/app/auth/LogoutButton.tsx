"use client";

import { Input } from "@/_common/components/ui/input";
import React from "react";
import { logout } from "./actions";
import { Button } from "@/_common/components/ui/button";
import { appStore } from "@/_common/store/appStore";

function LogoutButton() {
  const appBase = appStore((state) => state.appBase);

  return (
    <form action={logout}>
      <Input
        required
        name="pathname"
        placeholder="pathname"
        defaultValue={appBase}
        className="hidden"
      />
      <Button type="submit" className="w-40" variant="secondary">
        logout
      </Button>
    </form>
  );
}

export default LogoutButton;
