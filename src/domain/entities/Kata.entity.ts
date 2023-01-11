import mongoose, { Types } from "mongoose";

export const kataEntity = () => {

  let kataSchema = new mongoose.Schema(
    {
      name: String,
      description: String,
      level: Number,
      user: Types.ObjectId,
      date: Date,
      valoration: Number,
      chances: Number
    }
  )

  return mongoose.model('Katas', kataSchema);
}
