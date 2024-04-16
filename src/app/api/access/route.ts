import AccessService from "@/_common/db/services/access";

export async function POST(request: Request) {
  const req = await request.json();
  const reqAction = req["act"];
  if (reqAction) {
    if (reqAction === "getUrlWiseApp") {
      const baseUrl = req["baseUrl"];
      if (baseUrl) {
        const resData = await AccessService.getUrlWiseApp(baseUrl);
        if (!resData.error) {
          return Response.json({ ...resData.data });
        }
      }
    }
  }
  return Response.json({ error: true, errorMessage: "Invalid Request" });
}
