import { Request, Response } from "express";
import { createShortUrlWithoutUser } from "../services/url.services.js";
import { ENV } from "../config/env.js";
import { getURLData } from "../dao/short.url.js";

//types
type params = {
  short_url: string;
};

//create short url
export async function shortURLController(req: Request, res: Response) {
  try {
    const { url } = req.body;

    const shortUrl = await createShortUrlWithoutUser(url);
    
    res.json({ url: `${ENV.APP_URL}${shortUrl}` });
  } catch (error) {
    res.status(500).json({ error });
  }
}

//redirect to long url
export const redirectURLController = async (
  req: Request<params>,
  res: Response,
) => {
  try {
    const { short_url } = req.params;

    const urlData = await getURLData(short_url);

    if (!urlData) {
      return res.status(404).json({ error: "URL not found" });
    }
    res.redirect(urlData.long_url);
  } catch (error) {
    res.status(500).json({ error });
  }
};
