import { Router } from "express";
import * as Scry from "scryfall-sdk";
import { CardSearchQuery } from "../types/CardSearch";

export const cardSearch = Router();

cardSearch.get("/", async (req: CardSearchQuery, res) => {
  const searchOptions = {
    unique: req.unique ? req.unique : "prints",
    order: req.order ? req.order : "name",
    dir: req.dir,
    include_extras: true,
    include_multilingual: true,
    include_variations: true,
    page: req.page ? req.page : 1,
  };
  const searchResults = Scry.Cards.search(req.query, searchOptions);
  if (searchResults) {
    res.send(searchResults);
  } else {
    res.statusCode = 404;
  }
});
