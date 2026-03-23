import mongoose from "mongoose";
import URL from "../models/url.modal.js";
import { AppError } from "../utils/error.js";

//save short url to DB
export const saveShortURl = async (
  short_url: string,
  long_url: string,
  user_id?: string,
) => {
  const newUrl = new URL({
    long_url,
    short_url,
  });

  if (!newUrl) throw new AppError("Internal Server Error", 500);

  if (user_id) {
    newUrl.user = new mongoose.Types.ObjectId(user_id);
  }

  newUrl.save();
};

export const getURLData = async (short_url: string) => {
  const data = await URL.findOneAndUpdate(
    { short_url },
    { $inc: { clicks: 1 } },
  ).lean();

  if (!data) throw new AppError("URL not found", 404);
  return data;
};
