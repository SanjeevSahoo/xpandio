import TDBType from "../types/TDBTypes";

const BASE_DB_TYPE: TDBType = process.env.BASE_DB_TYPE as TDBType;

const PUBLIC_CRYPTO_KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY || "";

const LDAP_HOSTS = process.env.LDAP_HOSTS || "";
const LDAP_HOSTS_TML = LDAP_HOSTS.split(",").map((item) => ({
  url: item,
  dn: "DC=tmindia,DC=tatamotors,DC=com",
  dom: "@tmindia.tatamotors.com",
}));

const ROOT = "/";
const PUBLIC_ROUTES = ["/", "/health/signin"];
const DEFAULT_REDIRECT = "/dashboard";

const THEME_LIST = ["light", "dark", "light-green"];

const PUBLIC_COPYRIGHT_ORG = process.env.PUBLIC_COPYRIGHT_ORG || "";

export {
  BASE_DB_TYPE,
  ROOT,
  PUBLIC_ROUTES,
  DEFAULT_REDIRECT,
  THEME_LIST,
  PUBLIC_CRYPTO_KEY,
  LDAP_HOSTS,
  LDAP_HOSTS_TML,
  PUBLIC_COPYRIGHT_ORG,
};
