import TApp from "../types/TApp";
import TDBType from "../types/TDBTypes";

const BASE_DB_TYPE: TDBType = process.env.BASE_DB_TYPE as TDBType;

const PUBLIC_CRYPTO_KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY || "";
const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const LDAP_HOSTS = process.env.LDAP_HOSTS || "";
const LDAP_HOSTS_TML = LDAP_HOSTS.split(",").map((item) => ({
  url: item,
  dn: "DC=tmindia,DC=tatamotors,DC=com",
  dom: "@tmindia.tatamotors.com",
}));

const ROOT = "/";
const PUBLIC_ROUTES = ["/"];
const DEFAULT_REDIRECT = "/master";

const THEME_LIST = ["light", "dark"];

const COPYRIGHT_ORG = process.env.NEXT_PUBLIC_COPYRIGHT_ORG || "";

const DEFAULT_APP: TApp = {
  id: 0,
  name: "Xpandio App",
  stage: "Released",
  hosting_status: "In App",
  hosting_url: "",
  disp_name: "Xpandio App",
  short_desc: "Base App for This platform",
  logo_url: "/images/logo/xpandio_icon.png",
  project_lead_id: 0,
  creation_type: "App",
  own_login_url: "",
  client_dept: "",
  client_spoc_id: 0,
  team_id: 0,
  project_admins: "[]",
  status: "Active",
  base_url: "/master",
};
export {
  BASE_DB_TYPE,
  ROOT,
  PUBLIC_ROUTES,
  DEFAULT_REDIRECT,
  THEME_LIST,
  PUBLIC_CRYPTO_KEY,
  PUBLIC_API_URL,
  LDAP_HOSTS,
  LDAP_HOSTS_TML,
  COPYRIGHT_ORG,
  DEFAULT_APP,
};
