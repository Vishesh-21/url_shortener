import express from "express";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get("/", (req, res) => {
  res.send("Hello world!")
})

export default app
