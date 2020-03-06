import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store/";
import GameInfoModule from "@/store/modules/game-info";
import Card from "@/models/Card";

const CARD_PAIR_SET = 10;

@Module({ dynamic: true, namespaced: true, store, name: "CardListModule" })
export class CardListModule extends VuexModule {
  private _cardList: Card[] = this.generateCardList();
  private _selectedCardIndexes: number[] = [];

  get cardList(): Card[] {
    return this._cardList;
  }

  private generateCardList(): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < CARD_PAIR_SET; i++) {
      const card: Card = {
        number: i,
        turned: false,
        matched: false
      };
      // 対になる様、各数字2つずつ用意
      cards.push(card, Object.assign({}, card));
    }
    cards.sort(() => Math.random() - Math.random());
    return cards;
  }

  @Mutation
  turnCard(index: number): void {
    this._cardList[index].turned = true;
    this._selectedCardIndexes.push(index);
  }

  @Mutation
  fixCards(): void {
    this._selectedCardIndexes.map(
      index => (this._cardList[index].matched = true)
    );
    this._selectedCardIndexes = [];
    GameInfoModule.addMatchedPairCount();
  }

  @Mutation
  closeCards(): void {
    this._selectedCardIndexes.map(
      index => (this._cardList[index].turned = false)
    );
    this._selectedCardIndexes = [];
  }

  @Action
  selectCard(index: number): void {
    if (this._selectedCardIndexes.length > 1) return;
    this.turnCard(index);

    if (this._selectedCardIndexes.length === 2) {
      window.setTimeout(() => this.context.dispatch("checkPair"), 1000);
    }
  }

  @Action({ rawError: true })
  checkPair(): void {
    const firstCard = this._cardList[this._selectedCardIndexes[0]];
    const secondCard = this._cardList[this._selectedCardIndexes[1]];
    GameInfoModule.addTrialCount();

    if (firstCard.number === secondCard.number) {
      this.fixCards();
    } else {
      this.closeCards();
    }
  }
}

export default getModule(CardListModule);
