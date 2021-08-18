import { createStore } from "vuex";
import cards, { CardsState } from "./modules/cards";
import score, { ScoreState } from "./modules/score";

export type RootState = {
  cards: CardsState;
  score: ScoreState;
}

export default createStore({
  modules: {
    cards,
    score,
  },
});
