import { Suspense } from "react";
import Header from "../layout/Header";

import Settings from "../layout/Settings";
import HealthSidebarWrapper from "./HealthSidebarWrapper";

export default function HealthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[1fr] h-screen w-screen bg-background text-foreground relative overflow-hidden">
      <div className="grid grid-cols-[auto_1fr] w-full h-full overflow-auto ">
        <Suspense fallback={<div>Loading Sidebar ...</div>}>
          <HealthSidebarWrapper />
        </Suspense>
        <div className="grid grid-rows-[auto_1fr] overflow-auto">
          <Header />
          <div className="h-full w-full overflow-auto">{children}</div>
        </div>
      </div>
      <Settings />
    </div>
  );
}
