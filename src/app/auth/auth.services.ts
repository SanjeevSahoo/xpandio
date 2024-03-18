import { escape } from "validator";

import { simpleQuery as simpleQueryMysql } from "@/_common/db/mysqldb/connection";
import { simpleQuery as simpleQueryOracle } from "@/_common/db/oracledb/connection";
import { BASE_DB_TYPE } from "@/_common/constants";
import TAuthUser from "./types/TAuthUser";
import oracledb from "oracledb";

type TAuthQueryData = {
  error: boolean;
  errorMessage: string;
  data: TAuthUser;
};

const authenticateUser = async (
  username: string,
  password: string
): Promise<TAuthQueryData> => {
  let retVal: TAuthQueryData = {
    error: false,
    errorMessage: "",
    data: { _id: "", email: "", emp_id: "", name: "" },
  };

  let escapedUsername = escape(username);

  if (BASE_DB_TYPE === "mysqldb") {
    try {
      let resultUsers: any = await simpleQueryMysql(
        `SELECT  
          id "_id",          
          email "email",
          emp_id "emp_id",          
          name "name"
        FROM
            t_frm_users t1
        WHERE
              t1.sap_status = 'Active'
            AND t1.username = ?
            AND t1.password = ?
        ORDER BY t1.name ASC`,
        [escapedUsername, password]
      ).catch((err) => {
        console.log(err);
        return {
          errorMessage: "DB Error",
          errorTransKey: "api_res_db_error",
        };
      });

      if (!resultUsers || resultUsers.errorMessage) {
        retVal.error = true;
        retVal.errorMessage = resultUsers.errorMessage;
      } else {
        const currUsers: TAuthUser[] = resultUsers[0];

        if (currUsers.length > 0) {
          retVal.data = { ...currUsers[0] };
        } else {
          retVal.error = true;
          retVal.errorMessage = "User Details not found";
        }
      }
    } catch (err) {
      console.log(err);
      retVal.error = true;
      retVal.errorMessage = "Unknown DB Error";
    }
  }

  if (BASE_DB_TYPE === "oracledb") {
    try {
      let resultUsers: any = await simpleQueryOracle(
        `SELECT  
          id "_id",          
          email "email",
          emp_id "emp_id",          
          name "name"
        FROM
            t_frm_users t1
        WHERE
              t1.sap_status = 'Active'
            AND t1.username = :curr_username
            AND t1.password = :curr_password
        ORDER BY t1.name ASC`,
        {
          curr_username: {
            dir: oracledb.BIND_IN,
            val: escapedUsername,
            type: oracledb.STRING,
          },
          curr_password: {
            dir: oracledb.BIND_IN,
            val: password,
            type: oracledb.STRING,
          },
        }
      ).catch((err) => {
        console.log(err);
        return {
          errorMessage: "DB Error",
          errorTransKey: "api_res_db_error",
        };
      });

      console.log(resultUsers);
      if (!resultUsers || resultUsers.errorMessage) {
        retVal.error = true;
        retVal.errorMessage = resultUsers.errorMessage;
      } else {
        const currUsers: TAuthUser[] = resultUsers.rows;

        if (currUsers.length > 0) {
          retVal.data = { ...currUsers[0] };
        } else {
          retVal.error = true;
          retVal.errorMessage = "User Details not found";
        }
      }
    } catch (err) {
      console.log(err);
      retVal.error = true;
      retVal.errorMessage = "Unknown DB Error";
    }
  }

  return retVal;
};

export { authenticateUser };
