import { MongoClient, Db } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  const db = client.db(process.env.MONGODB_DB as string);

  cachedClient = client;
  cachedDb = db;

  return db;
}
