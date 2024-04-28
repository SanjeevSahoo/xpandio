import {
  getHealthIndexReport,
  getLocations,
} from "@/_common/db/oracledb/services/health";
import { unstable_cache } from "next/cache";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { data: locations } = await getLocations();
  const currDate = new Date();
  const currMonth = currDate.getMonth();
  let currFYear = currDate.getFullYear();
  if (currMonth <= 3) {
    currFYear -= 1;
  }

  const slugList: { yearNo: string; locnId: string }[] = [];

  for (let i = 2015; i <= currFYear; i += 1) {
    for (let j = 0; j < locations.length; j += 1) {
      if (i !== 2023) {
        slugList.push({
          yearNo: i.toString(),
          locnId: locations[j].id.toString(),
        });
      }
    }
  }

  return slugList.map((slug) => ({
    slug: [slug.yearNo, slug.locnId],
  }));
}

async function page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug;
  if (!slug || slug.length <= 1) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        Select a Year and Plant and Click Search button to filter Data
      </div>
    );
  }
  const getCachedHealthIndexReport = unstable_cache(
    async () => getHealthIndexReport(+slug[0], +slug[1]),
    ["healthindex-report", slug[0], slug[1]],
    {
      revalidate: 60 * 60 * 24,
      tags: [`healthindex-report-${slug[0]}-${slug[1]}`],
    }
  );
  const reportResult = await getCachedHealthIndexReport();
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
