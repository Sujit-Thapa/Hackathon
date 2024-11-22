import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { method } = req;
  const db = await connectToDatabase();
  const cropsCollection = db.collection("crops");

  switch (method) {
    case "GET":
      const crop = await cropsCollection.findOne({ _id: new ObjectId(id as string) });
      res.status(200).json(crop);
      break;
    case "PUT": 
      const updatedCrop = req.body;
      await cropsCollection.updateOne({ _id: new ObjectId(id as string) }, { $set: updatedCrop });
      res.status(200).json({ message: "Crop updated successfully!" });
      break;
    case "DELETE":
      await cropsCollection.deleteOne({ _id: new ObjectId(id as string) });
      res.status(200).json({ message: "Crop deleted successfully!" });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
