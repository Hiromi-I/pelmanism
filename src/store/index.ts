import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

import { RootState } from "@/types/store";
import cards from "./modules/cards";
import score from "./modules/score";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    cards,
    score,
  },
});

export const useStore = (): Store<RootState> => baseUseStore(key);
