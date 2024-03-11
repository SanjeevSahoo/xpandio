import TDBType from "../types/TDBTypes";

const BASE_DB_TYPE: TDBType = process.env.BASE_DB_TYPE as TDBType;

const ROOT = "/";
const PUBLIC_ROUTES = ["/", "/health/signin"];
const DEFAULT_REDIRECT = "/dashboard";

export { BASE_DB_TYPE, ROOT, PUBLIC_ROUTES, DEFAULT_REDIRECT };
