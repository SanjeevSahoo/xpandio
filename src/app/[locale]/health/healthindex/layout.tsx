import { getLocations } from "@/_common/db/oracledb/services/health";
import { unstable_cache } from "next/cache";
import FilterLayout from "./FilterLayout";

const getCachedLocations = unstable_cache(
  async () => getLocations(),
  ["health-locations"],
  {
    revalidate: 60 * 60 * 24 * 7,
    tags: ["health-locations"],
  }
);

export default async function HealthIndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const healthLocations = await getCachedLocations();
  const currDate = new Date();
  const currMonth = currDate.getMonth();
  let currFYear = currDate.getFullYear();
  if (currMonth <= 3) {
    currFYear -= 1;
  }

  const yearList: string[] = [];
  for (let i = 2015; i <= currFYear; i += 1) {
    yearList.push(i.toString());
  }

  return (
    <div className="grid grid-rows-[auto_1fr] gap-2 w-full h-full p-2 bg-background text-foreground relative overflow-hidden">
      <FilterLayout
        locations={healthLocations.data}
        currFYear={currFYear.toString()}
        yearList={yearList}
      />
      <div className="bg-card overflow-auto">{children}</div>
    </div>
  );
}
