import {
  VuexModule,
  Module,
  Mutation,
  getModule
} from "vuex-module-decorators";
import store from "@/store/";

@Module({ dynamic: true, store, namespaced: true, name: "GameInfoModule" })
export class GameInfoModule extends VuexModule {
  private _trialCount = 0;
  private _matchedPairCount = 0;

  get trialCount(): string {
    return ("00" + String(this._trialCount)).slice(-3);
  }

  get matchedPairCount(): string {
    return ("00" + String(this._matchedPairCount)).slice(-3);
  }

  @Mutation
  addTrialCount(): void {
    this._trialCount += 1;
  }

  @Mutation
  addMatchedPairCount(): void {
    this._matchedPairCount += 1;
  }
}

export default getModule(GameInfoModule);
