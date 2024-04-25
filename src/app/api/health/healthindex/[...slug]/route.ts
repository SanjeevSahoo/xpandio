import AuthService from "@/_common/db/services/auth";
import { unstable_cache } from "next/cache";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = ["1", "3"];

  return slugs.map((item) => ({
    slug: [item],
  }));
}

const getCachedUser = unstable_cache(
  async (id: number) => AuthService.getUserAllApps(id),
  ["my-app-user"],
  {
    revalidate: 60,
  }
);
export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug;
  const appResult = await getCachedUser(+slug[0]);
  const { data: appList } = appResult;
  if (!appResult || appResult.error) {
    return Response.json(
      { error: "Error Occured retreiving App List" },
      { status: 500 }
    );
  }
  if (appList.length < 0) {
    return Response.json(
      { error: "You donot have access to any App." },
      { status: 500 }
    );
  }
  return Response.json([...appList.map((item) => item.disp_name)]);
}
