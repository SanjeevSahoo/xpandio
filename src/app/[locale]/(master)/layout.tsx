"use client";

import ThemeToggler from "@/_common/components/ThemeToggler";
import { appStore } from "@/_common/store/appStore";
import LogoutButton from "@/app/[locale]/auth/LogoutButton";
import LogoutTimer from "@/app/[locale]/auth/LogoutTimer";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  const router = useRouter();

  const pathname = usePathname();
  const handleTasks = () => {
    router.push("/tasks");
  };

  const appMode = appStore((state) => state.appMode);
  if (appMode === "NA") {
    return (
      <div className="flex gap-2 justify-center items-center  h-screen p-2">
        <div className="grid grid-rows-[auto_1fr] gap-2 justify-center items-center h-[100px]">
          <div className="flex justify-center items-center">
            <div className="relative inline-flex">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <div className="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
              <div className="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
          </div>
          <div className="font-semibold text-lg">
            Please Wait ...! Reading User Data from Storage
          </div>
        </div>
      </div>
    );
  }

  if (appMode === "Detached" || pathname.includes("/signin")) {
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
          <button onClick={handleTasks}>go to tasks</button>
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
