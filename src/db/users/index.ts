import { connectDb, disconnectDb, getDB } from "../mongo";

const findUserList = async () => {
  let retVal = { error: false, errorMessage: "", data: {} };
  try {
    await connectDb();
    const db = getDB();
    const users = await db.collection("users").find({}).toArray();
    retVal.data = { ...users };
  } catch (err) {
    console.log(err);
    retVal = { error: true, errorMessage: "Unknown DB Error", data: {} };
  } finally {
    disconnectDb();
  }
  return retVal;
};

export { findUserList };
