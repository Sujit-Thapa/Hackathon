import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();
  const cropsCollection = db.collection("crops");

  switch (method) {
    case "GET":
      const crops = await cropsCollection.find().toArray();
      res.status(200).json(crops);
      break;
    case "POST":
      const newCrop = req.body;
      await cropsCollection.insertOne(newCrop);
      res.status(201).json({ message: "Crop added successfully!" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
