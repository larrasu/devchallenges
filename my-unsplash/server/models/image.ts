import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    label: String,
    photo: String,
  },
  { timestamps: true, strict: true, strictQuery: true }
);

export default mongoose.model("Image", schema, "image");
