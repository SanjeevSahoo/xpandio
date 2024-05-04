import { auth } from "../auth";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Settings from "../layout/Settings";
import { DEFAULT_APP } from "@/_common/constants";
import AccessService from "@/_common/db/services/access";

const APP_ID = 0;
export default async function MasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session || !session.user) {
    return <div>Not Session Data found. Please refresh</div>;
  }
  const menuResult = await AccessService.getAppWiseMenus(
    +session.user._id,
    APP_ID
  );
  const { data: menuData } = menuResult;
  if (!menuResult || menuResult.error) {
    return <div>Error Occured retreiving Menu Data</div>;
  }

  return (
    <div className="grid grid-rows-[1fr] h-screen w-screen bg-background text-foreground relative overflow-hidden">
      <div className="grid grid-cols-[auto_1fr] w-full h-full overflow-auto ">
        <Sidebar app={DEFAULT_APP} menuList={menuData} />
        <div className="grid grid-rows-[auto_1fr] overflow-auto">
          <Header />
          <div className="h-full w-full overflow-auto">{children}</div>
        </div>
      </div>
      <Settings />
    </div>
  );
}
