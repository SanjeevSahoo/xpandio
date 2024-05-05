import TAuthUser from "@/app/[locale]/auth/types/TAuthUser";

type TAuthQueryData = {
  error: boolean;
  errorMessage: string;
  data: TAuthUser;
};

export default TAuthQueryData;
