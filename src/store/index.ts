import { RootState } from "@/types/store";
import cards from "./modules/cards";
import score from "./modules/score";

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
