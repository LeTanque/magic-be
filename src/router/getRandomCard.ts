import { Router } from "express";
import * as Scry from "scryfall-sdk";
import { RandomCardQuery } from "../types/CardSearch";

export const getRandomCard = Router();

getRandomCard.get("/", async (req: RandomCardQuery, res) => {
  console.log(req.query);
  const queryFormat = `?${req.query && req.query + "&"}`;
  if (req.query[0]) {
    const randomCard = await Scry.Cards.random(queryFormat[1]);
    res.send(randomCard);
  } else {
    const randomCard = await Scry.Cards.random();
    if (randomCard) {
      res.send(randomCard);
    } else {
      res.statusCode = 404;
    }
  }
});
