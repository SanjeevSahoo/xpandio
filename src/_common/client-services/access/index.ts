import { AxiosResponse } from "axios";

import http from "@/_common/utils/http-common";
import TAppQueryData from "@/_common/types/TAppQueryData";

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

export { getUrlWiseApp };
