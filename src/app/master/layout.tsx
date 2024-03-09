import { Button } from "@/_common/components/ui/button";
import { logout } from "@/_common/utils/actions";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-screen p-1">
      <div className="grid grid-cols-[1fr_auto] justify-between items-center p-1">
        <div className="flex justify-between items-center">
          <p className="text-blue-800">{session?.user?.name}</p>
          <p className="text-blue-800">{session?.user?.email}</p>
        </div>
        <div className="w-[100px] flex justify-end items-center p-2">
          <Button
            type="button"
            onClick={logout}
            className="w-40"
            variant="secondary"
          >
            logout
          </Button>
        </div>
      </div>
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
}
