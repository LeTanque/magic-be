import * as express from "express";
import { cardSearch } from "./cardSearch";
import { getRandomCard } from "./getRandomCard";

const rootRoute = express.Router();

rootRoute.get("/", (req, res) => {
  res.send("Magical");
});

export { cardSearch, rootRoute, getRandomCard };
