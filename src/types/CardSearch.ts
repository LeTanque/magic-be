import * as Scry from "scryfall-sdk";

type CardType = "t:" | "-t:" | "type:" | "-type:";
type ManaCost =
  | "mana:"
  | "-mana:"
  | "m:"
  | "-m:"
  | "manavalue="
  | "-manavalue=";

interface CardQuery {
  query?: string | (CardType & string) | (ManaCost & string);
}

interface RandomCardQuery extends CardQuery {
  format?: "json" | string;
  face?: string;
  version?: "border_crop" | "small" | "png" | "art_crop" | "normal" | "large";
  pretty?: false;
}

interface CardSearchQuery extends CardQuery, Scry.SearchOptions {}

export { RandomCardQuery, CardQuery, CardSearchQuery, CardType, ManaCost };
