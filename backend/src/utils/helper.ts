import { nanoid } from "nanoid";
import { AppError } from "./error.js";

export const generateId = (length = 7) => {
  const id = nanoid(length);
  if (!id) throw new AppError("NanoId error!", 500);
  return id;
};
