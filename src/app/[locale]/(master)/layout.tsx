"use client";

import { appStore } from "@/_common/store/appStore";
import { usePathname } from "next/navigation";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Settings from "./layout/Settings";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

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
    <div className="grid grid-rows-[1fr] h-screen w-screen bg-background text-foreground relative overflow-hidden">
      <div className="grid grid-cols-[auto_1fr] w-full h-full overflow-auto ">
        <Sidebar />
        <div className="grid grid-rows-[auto_1fr] overflow-auto">
          <Header />
          <div className="h-full w-full overflow-auto">{children}</div>
        </div>
      </div>
      <Settings />
    </div>
  );
}
