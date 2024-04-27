import THealthIndexReport from "./THealthIndexReport";

type THealthIndexQueryData = {
  error: boolean;
  errorMessage: string;
  data: THealthIndexReport[];
};

export default THealthIndexQueryData;
