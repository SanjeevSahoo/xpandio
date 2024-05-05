import * as ProjectServiceMySql from "@/_common/db/mysqldb/services/project";
import * as ProjectServiceOracle from "@/_common/db/oracledb/services/project";
import { BASE_DB_TYPE } from "@/_common/constants";

const ProjectService =
  BASE_DB_TYPE === "mysqldb" ? ProjectServiceMySql : ProjectServiceOracle;

export default ProjectService;
