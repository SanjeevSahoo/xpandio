import oracledb, {
  BindParameters,
  ExecuteOptions,
  InitialiseOptions,
} from "oracledb";

const DB_CONFIG = {
  user: process.env.BASE_ORACLEDB_USER,
  password: process.env.BASE_ORACLEDB_PASSWORD,
  connectString: process.env.BASE_ORACLEDB_URL,
};

const DB_CONFIG_OHP = {
  user: process.env.BASE_ORACLEDB_OHP_USER,
  password: process.env.BASE_ORACLEDB_OHP_PASSWORD,
  connectString: process.env.BASE_ORACLEDB_OHP_URL,
};

function simpleQuery(
  statement: string,
  binds: BindParameters = [],
  opts: ExecuteOptions = {},
  db: string = "frm"
) {
  return new Promise(async (resolve, reject) => {
    let config = { ...DB_CONFIG };
    if (db === "health") {
      config = { ...DB_CONFIG_OHP };
      config.password += "#";
    }

    await oracledb.initOracleClient();
    let conn;

    opts.outFormat = oracledb.OUT_FORMAT_OBJECT;
    opts.autoCommit = true;

    try {
      conn = await oracledb.getConnection(config);
      const result = await conn.execute(statement, binds, opts);
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      if (conn) {
        // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

export { simpleQuery };
