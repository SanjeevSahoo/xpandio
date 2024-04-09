import { simpleQuery } from "@/_common/db/oracledb/connection";
import oracledb from "oracledb";
import ldap from "ldapjs";

import { LDAP_HOSTS, LDAP_HOSTS_TML } from "@/_common/constants";
import TAuthUser from "@/app/[locale]/auth/types/TAuthUser";

type TAuthQueryData = {
  error: boolean;
  errorMessage: string;
  data: TAuthUser;
};

const authenticate = (
  ldapUrl: string,
  ldapDom: string,
  domainId: string,
  domainPassword: string
) => {
  let client = ldap.createClient({
    url: ldapUrl,
  });

  return new Promise((resolve, reject) => {
    client.on("error", () => {
      reject(false);
    });

    client.bind(domainId + ldapDom, domainPassword, (err: any) => {
      if (err) {
        reject(false);
      }
      client.unbind();
      resolve(true);
    });
  });
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

  // LDAP authentication

  let isAuthenticated = false;
  if (LDAP_HOSTS.length > 0) {
    for (let i = 0; i < LDAP_HOSTS_TML.length; i++) {
      if (!isAuthenticated) {
        let isCurrAuthenticated = await authenticate(
          "ldap://" + LDAP_HOSTS_TML[i].url,
          LDAP_HOSTS_TML[i].dom,
          username,
          password
        )
          .then(() => {
            return true;
          })
          .catch((err) => {
            return false;
          });
        if (isCurrAuthenticated) {
          isAuthenticated = true;
        }
      }
    }
  }

  try {
    let resultUsers: any = await simpleQuery(
      `SELECT  
          id "_id",          
          email "email",
          emp_id "emp_id",          
          name "name",
          password "password"
        FROM
            t_frm_users t1
        WHERE
              t1.sap_status = 'Active'
            AND t1.username = :curr_username            
        ORDER BY t1.name ASC`,
      {
        curr_username: {
          dir: oracledb.BIND_IN,
          val: username,
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

    if (!resultUsers || resultUsers.errorMessage) {
      retVal.error = true;
      retVal.errorMessage = resultUsers.errorMessage;
    } else {
      const currUsers: TAuthUser[] = resultUsers.rows;

      if (currUsers.length > 0) {
        // check if is not authenticated the compare with Bycrypt password

        if (!isAuthenticated) {
          isAuthenticated = resultUsers.rows[0].password === password;
          if (isAuthenticated) {
            retVal.error = false;
            retVal.data = {
              _id: currUsers[0]._id,
              name: currUsers[0].name,
              email: currUsers[0].email,
              emp_id: currUsers[0].emp_id,
            };
          } else {
            retVal.error = true;
            retVal.errorMessage = "Invalid Credentials";
          }
        } else {
          retVal.error = false;
          retVal.data = {
            _id: currUsers[0]._id,
            name: currUsers[0].name,
            email: currUsers[0].email,
            emp_id: currUsers[0].emp_id,
          };
        }
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

  return retVal;
};

export { authenticateUser };
