import { Suspense } from "react";
import RoleSearchWrapper from "./RoleSearchWrapper";

export default function RolesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[auto_1fr] ">
      <Suspense fallback={<div>Loading Search Bar...</div>}>
        <RoleSearchWrapper />
      </Suspense>
      <div className="bg-card overflow-auto">{children}</div>
    </div>
  );
}
