import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BASE_MONGODB_URL as string);

const connectDb = () => {
  return client.connect();
};

const disconnectDb = () => {
  return client.close();
};

const getDB = () => {
  return client.db("xpandiodb");
};

export { connectDb, disconnectDb, getDB };
