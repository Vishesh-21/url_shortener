import { saveShortURl } from "../dao/short.url.js";
import { AppError } from "../utils/error.js";
import { generateId } from "../utils/helper.js";

/**
 * create short url, save to DB and return short url
 */
export async function createShortUrlWithoutUser(url: string) {
  const shortUrl = generateId(7);
  await saveShortURl(shortUrl, url);
  return shortUrl;
}

/**
 * create short url for user, save to DB and return short url
 */
export async function createShortUrlWithUser(url: string, user_id: string) {
  const shortUrl = generateId(7);
  await saveShortURl(shortUrl, url, user_id);
  if (!shortUrl) throw new AppError("Save short url failed", 500);

  return shortUrl;
}
