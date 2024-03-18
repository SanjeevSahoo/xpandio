import * as AuthServiceMySql from "@/_common/db/mysqldb/services/auth";
import * as AuthServiceOracle from "@/_common/db/oracledb/services/auth";
import { BASE_DB_TYPE } from "@/_common/constants";

const AuthService =
  BASE_DB_TYPE === "mysqldb" ? AuthServiceMySql : AuthServiceOracle;

export default AuthService;
