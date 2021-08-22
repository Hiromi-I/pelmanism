import { ActionContext } from "vuex";
import { CardType } from "@/types/card";
import { RootState, CardsState } from "@/types/store";

const CARD_PAIR_SET = 10;

const _generateInitialCardList = (): Array<CardType> => {
  const cards: Array<CardType> = [];
  for (let i = 0; i < CARD_PAIR_SET; i++) {
    const card: CardType = {
      number: i,
      turned: false,
      matched: false,
    };
    // 対になる様、各数字2つずつ用意
    cards.push(card, Object.assign({}, card));
  }
  cards.sort(() => Math.random() - Math.random());
  return cards;
};
const state: CardsState = {
  _cardList: _generateInitialCardList(),
  _selectedCardIndexes: [],
};

const getters = {
  cardList: (state: CardsState): Array<CardType> => state._cardList,
};

const mutations = {
  turnCard: (state: CardsState, index: number): void => {
    state._cardList[index].turned = true;
    state._selectedCardIndexes.push(index);
  },
  fixCards: (state: CardsState): void => {
    state._selectedCardIndexes.map(
      (index) => (state._cardList[index].matched = true)
    );
    state._selectedCardIndexes = [];
  },
  closeCards: (state: CardsState): void => {
    state._selectedCardIndexes.map(
      (index) => (state._cardList[index].turned = false)
    );
    state._selectedCardIndexes = [];
  },
};

const actions = {
  selectCard: (
    { state, commit, dispatch }: ActionContext<CardsState, RootState>,
    index: number
  ): void => {
    if (state._selectedCardIndexes.length > 1) return;
    commit("turnCard", index);

    if (state._selectedCardIndexes.length === 2) {
      window.setTimeout(() => dispatch("checkPair"), 1000);
    }
  },
  checkPair: ({
    state,
    commit,
    dispatch,
  }: ActionContext<CardsState, RootState>): void => {
    const firstCard = state._cardList[state._selectedCardIndexes[0]];
    const secondCard = state._cardList[state._selectedCardIndexes[1]];
    commit("score/addTrialCount", null, { root: true });

    if (firstCard.number === secondCard.number) {
      dispatch("fixCards");
    } else {
      commit("closeCards");
    }
  },
  fixCards: ({ commit }: ActionContext<CardsState, RootState>): void => {
    commit("fixCards");
    commit("score/addMatchedPairCount", null, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
