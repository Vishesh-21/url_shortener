import mongoose, { Schema } from "mongoose";

// short url schema
const urlSchema = new Schema(
  {
    long_url: {
      type: String,
      required: true,
    },
    short_url: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const URL = mongoose.model("URL", urlSchema);

export default URL;
