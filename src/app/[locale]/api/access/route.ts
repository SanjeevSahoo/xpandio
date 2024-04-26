import AccessService from "@/_common/db/services/access";
import { auth } from "@/app/[locale]/auth";

export async function POST(request: Request) {
  const session = await auth();
  let userId = 0;

  if (session && session.user && session.user._id) {
    userId = +session.user._id;
  }
  const req = await request.json();
  const reqAction = req["act"];
  if (reqAction) {
    if (reqAction === "getUrlWiseApp") {
      const baseUrl = req["baseUrl"];
      if (baseUrl) {
        const resData = await AccessService.getUrlWiseApp(baseUrl);

        return Response.json({ ...resData });
      }
    }
    if (reqAction === "getAppWiseMenus") {
      const appId = req["appId"];
      if (appId || appId === 0) {
        const resData = await AccessService.getAppWiseMenus(userId, appId);

        return Response.json({ ...resData });
      }
    }
  }
  return Response.json({ error: true, errorMessage: "Invalid Request" });
}
