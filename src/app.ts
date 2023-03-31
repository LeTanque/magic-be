import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { rootRoute, cardSearch, getRandomCard } from "./router";
const app = express();
const port = process.env.BACK_PORT;
const host = process.env.BACK_HOST;

app.use("/", rootRoute);
app.use("/search", cardSearch);
app.use("/getCard", getRandomCard);

app.listen(port, () => {
  return console.log(`Magic is listening at http://${host}:${port}`);
});
