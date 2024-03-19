import ThemeToggler from "@/_common/components/ThemeToggler";
import { Button } from "@/_common/components/ui/button";
import { logout } from "@/app/auth/actions";
import { auth } from "@/app/auth";
import CurrBase from "../../auth/CurrBase";
import { Input } from "@/_common/components/ui/input";
import LogoutButton from "../../auth/LogoutButton";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-screen p-1">
      <div className="grid grid-cols-[1fr_auto_auto] justify-between items-center p-1">
        <div className="flex justify-between items-center">
          <p className="text-blue-800">{session?.user?.name}</p>
          <p className="text-blue-800">{session?.user?.email}</p>
        </div>
        <div className="flex justify-end items-center p-2">
          <ThemeToggler />
          <CurrBase />
        </div>
        <div className="flex justify-end items-center p-2">
          <LogoutButton />
        </div>
      </div>
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
}