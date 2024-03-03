import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BASE_MONGODB_URL as string);
