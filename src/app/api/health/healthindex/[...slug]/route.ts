import AuthService from "@/_common/db/services/auth";

export const revalidate = 20;

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug;
  const appResult = await AuthService.getUserAllApps(2);
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
