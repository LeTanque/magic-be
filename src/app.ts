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

if (process.env.NODE_ENV === "production") {
  app.listen(() => {
    return console.log(`Magic ${process.env.NODE_ENV}`);
  });
} else {
  app.listen(port, () => {
    return console.log(`Magic is listening at https://${host}:${port}`);
  });
}
