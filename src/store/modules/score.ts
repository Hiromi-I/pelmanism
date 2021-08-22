import { ScoreState } from "@/types/store";

const state: ScoreState = {
  _trialCount: 0,
  _matchedPairCount: 0,
};

const get0paddingNumber = (num: number): string =>
  ("00" + String(num)).slice(-3);
const getters = {
  trialCount: (state: ScoreState): string =>
    get0paddingNumber(state._trialCount),
  matchedPairCount: (state: ScoreState): string =>
    get0paddingNumber(state._matchedPairCount),
};

const mutations = {
  addTrialCount: (state: ScoreState): void => {
    state._trialCount += 1;
  },
  addMatchedPairCount: (state: ScoreState): void => {
    state._matchedPairCount += 1;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
