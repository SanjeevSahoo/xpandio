import { AxiosResponse } from "axios";

import http from "@/_common/utils/http-common";
import TAppQueryData from "@/_common/types/TAppQueryData";
import TMenusQueryData from "@/_common/types/TMenusQueryData";

const getUrlWiseApp = (baseUrl: string) => {
  return http.post<
    {
      act: string;
      baseUrl: string;
    },
    AxiosResponse<TAppQueryData>
  >("/access", {
    act: "getUrlWiseApp",
    baseUrl,
  });
};

const getAppWiseMenus = (appId: number) => {
  return http.post<
    {
      act: string;
      appId: number;
    },
    AxiosResponse<TMenusQueryData>
  >("/access", {
    act: "getAppWiseMenus",
    appId,
  });
};

export { getUrlWiseApp, getAppWiseMenus };
