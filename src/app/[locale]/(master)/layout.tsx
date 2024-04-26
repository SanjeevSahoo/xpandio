import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Settings from "./layout/Settings";

export default async function MasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Master Layout");
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
