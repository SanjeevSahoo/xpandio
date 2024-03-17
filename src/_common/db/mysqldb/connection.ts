import mysql2 from "mysql2/promise";

const DB_CONFIG = {
  host: process.env.BASE_MYSQLDB_HOST,
  user: process.env.BASE_MYSQLDB_USER,
  password: process.env.BASE_MYSQLDB_PASSWORD,
  database: process.env.BASE_MYSQLDB_DATABASE,
  namedPlaceholders: true,
};

function simpleQuery(statement: string, binds: any[] = []) {
  return new Promise(async (resolve, reject) => {
    let conn;

    try {
      conn = await mysql2.createConnection(DB_CONFIG);
      const result = await conn.execute(statement, binds);
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      if (conn) {
        try {
          await conn.end();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

export { simpleQuery };
