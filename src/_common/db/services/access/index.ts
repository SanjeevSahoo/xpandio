import * as AccessServiceMySql from "@/_common/db/mysqldb/services/access";
import * as AccessServiceOracle from "@/_common/db/oracledb/services/access";
import { BASE_DB_TYPE } from "@/_common/constants";

const AccessService =
  BASE_DB_TYPE === "mysqldb" ? AccessServiceMySql : AccessServiceOracle;

export default AccessService;
