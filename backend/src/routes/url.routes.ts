import express from "express";
import { redirectURLController, shortURLController } from "../controller/url.controller.js";

const router = express.Router();

/**
 * @swagger
 * /tags :
 *   post:
 *     description: Take long url and return short url
 */
router.post("/", shortURLController);

/**
 * @swagger
 * /tags :
 *   get:
 *     description: Take short url and redirect to long url
 */
router.get('/:short_url', redirectURLController)

export default router;