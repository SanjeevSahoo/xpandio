import { getHealthIndexReport } from "@/_common/db/oracledb/services/health";
import AuthService from "@/_common/db/services/auth";
import { unstable_cache } from "next/cache";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const dynamicParams = true;

// export async function generateStaticParams() {
//   const slugs = ["1", "2", "3"];

//   return slugs.map((item) => ({
//     slug: [item],
//   }));
// }

const getCachedHealthIndexReport = unstable_cache(
  async (fyear: number, locnId: number) => getHealthIndexReport(fyear, locnId),
  ["healthindex-report"],
  {
    revalidate: 60 * 60 * 24,
  }
);

async function page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug;
  if (!slug || slug.length <= 1) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        Select a Year and Plant and Click Search button to filter Data
      </div>
    );
  }

  const reportResult = await getCachedHealthIndexReport(+slug[0], +slug[1]);
  const { data: healthIndexData } = reportResult;
  if (!reportResult || reportResult.error) {
    return Response.json(
      { error: "Error Occured retreiving Health Index Report" },
      { status: 500 }
    );
  }

  return <DataTable columns={columns} data={healthIndexData} />;
}

export default page;
