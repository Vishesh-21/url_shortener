import mongoose, { Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required!"],
    },
    refresh_token_hash: {
      type: String,
      required: [true, "Refresh token hash is required!"],
    },
    ip: {
      type: String,
      required: [true, "IP address is required!"],
    },
    user_agent: {
      type: String,
      required: [true, "User agent is required!"],
    },
    revoked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const sessionModel = mongoose.model("Session", sessionSchema);

export default sessionModel;
