"use client";

import { SessionProvider } from "next-auth/react";

interface IProps {
  children: React.ReactNode;
}

export default function AuthSessionProvider(props: IProps) {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
}
