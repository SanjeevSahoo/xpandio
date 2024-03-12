import { simpleQuery } from "@/_common/db/oracledb/connection";
import oracledb from "oracledb";

const findUserList = async () => {
  let retVal = { error: false, errorMessage: "", data: {} };
  try {
    let resultUsers: any = await simpleQuery(
      `SELECT  
        id "_id",
        base_loc "base_loc",
        crt_by "createdBy",
        crt_ts "createdAt",
        designation "designation",
        email "email",
        emp_id "emp_id",
        emp_type "emp_type",
        gender "gender",
        grade "grade",
        mobile "mobile",
        name "name",
        '' "password",
        '' "rfid",
        sap_status "sap_status",
        separation_date "separation_date",
        unique_no "unique_no",
        upd_by "updatedBy",
        upd_ts "updatedAt",
        username "username",
        allowed_domain_login "allowed_domain_login"
      FROM
          t_frm_users t1
      WHERE
              t1.sap_status = 'Active'
          AND
              t1.id = :logged_user_id
      ORDER BY t1.name ASC`,
      {
        logged_user_id: {
          dir: oracledb.BIND_IN,
          val: 2,
          type: oracledb.NUMBER,
        },
      }
    ).catch((err) => {
      console.log(err);
      return {
        errorMessage: "Oracle DB Error",
        errorTransKey: "api_res_oracle_db_error",
      };
    });

    if (!resultUsers || resultUsers.errorMessage || !resultUsers.rows) {
      retVal = {
        error: true,
        errorMessage: "Error Fetching User Details",
        data: {},
      };
    } else {
      retVal = { error: false, errorMessage: "", data: [...resultUsers.rows] };
    }
  } catch (err) {
    console.log(err);
    retVal = { error: true, errorMessage: "Unknown DB Error", data: {} };
  }
  return retVal;
};

export { findUserList };
