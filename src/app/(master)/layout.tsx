"use client";

import ThemeToggler from "@/_common/components/ThemeToggler";
import { appStore } from "@/_common/store/appStore";
import LogoutButton from "@/app/auth/LogoutButton";
import LogoutTimer from "@/app/auth/LogoutTimer";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  const appMode = appStore((state) => state.appMode);
  if (appMode === "Detached") {
    return <div className="h-full w-full overflow-auto">{children}</div>;
  }

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-screen p-1">
      <div className="grid grid-cols-[1fr_auto_auto] justify-between items-center p-1">
        <div className="flex justify-between items-center">
          <p>Master App</p>
          <p className="text-blue-800">{session?.user?.name}</p>
          <p className="text-blue-800">{session?.user?.email}</p>
        </div>
        <div className="flex justify-end items-center p-2">
          <ThemeToggler />
          <LogoutTimer />
        </div>
        <div className="flex justify-end items-center p-2">
          <LogoutButton />
        </div>
      </div>
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
}
