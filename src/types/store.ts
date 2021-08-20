import { CardType } from "@/types/card";

export type CardsState = {
  _cardList: Array<CardType>;
  _selectedCardIndexes: Array<number>;
};

export type ScoreState = {
  _trialCount: number;
  _matchedPairCount: number;
};

export type RootState = {
  cards: CardsState;
  score: ScoreState;
}