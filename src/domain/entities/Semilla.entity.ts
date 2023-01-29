import mongoose, { Schema } from "mongoose";

export const semillaEntity = () => {
  const semillaEntity = new Schema(
    {
      gender: String,
      name: Object,
      location: Object,
      email: String,
      login: Object,
      registered: Object,
      phone: String,
      cell: String,
      id: Object,
      nat: String
    });
  return mongoose.models.Semillas || mongoose.model('Semillas', semillaEntity);
}
