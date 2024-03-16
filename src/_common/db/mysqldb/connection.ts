import mysql2 from "oracledb";

const DB_CONFIG = {
  user: process.env.BASE_ORACLEDB_USER,
  password: process.env.BASE_ORACLEDB_PASSWORD,
  connectString: process.env.BASE_ORACLEDB_URL,
};

function simpleQuery(
  statement: string,
  binds: BindParameters = [],
  opts: ExecuteOptions = {}
) {
  return new Promise(async (resolve, reject) => {
    oracledb.initOracleClient();
    let conn;

    opts.outFormat = oracledb.OUT_FORMAT_OBJECT;
    opts.autoCommit = true;

    try {
      conn = await oracledb.getConnection(DB_CONFIG);
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
