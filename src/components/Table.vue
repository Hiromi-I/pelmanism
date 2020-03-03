<template>
  <main class="wrapper">
    <section class="scoreArea">
      <div class="centeringContainer">
        <p>TRY: {{ trialCount | zeroPadding }}</p>
        <p>SCORE: {{ matchedPairCount | zeroPadding }}</p>
      </div>
    </section>

    <div class="centeringContainer">
      <section class="cardTable">
        <Card
          v-for="(card, index) in cards"
          :card="card"
          :key="index"
          @turn="selectCard(index)"
        />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import CardInfo from "@/types/CardInfo";

const CARD_PAIR_SET = 10;

@Component({
  name: "Table",
  filters: {
    zeroPadding(value: number) {
      return ("00" + String(value)).slice(-3);
    }
  },
  components: {
    Card
  }
})
export default class Table extends Vue {
  cards: CardInfo[] = [];
  selectedCardIndexes: number[] = [];
  trialCount = 0;
  matchedPairCount = 0;

  prepareCards() {
    for (let i = 0; i < CARD_PAIR_SET; i++) {
      const card = {
        number: i,
        turned: false,
        matched: false
      };
      // 対になる様、各数字2つずつ用意
      this.cards.push(card, Object.assign({}, card));
    }
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - Math.random());
  }

  selectCard(index: number): void {
    if (this.selectedCardIndexes.length > 1) return;

    this.selectedCardIndexes.push(index);
    this.cards[index].turned = true;

    if (this.selectedCardIndexes.length === 2) {
      window.setTimeout(this.checkPair, 1000);
    }
  }

  checkPair(): void {
    const firstCard = this.cards[this.selectedCardIndexes[0]];
    const secondCard = this.cards[this.selectedCardIndexes[1]];
    this.trialCount++;

    if (firstCard.number === secondCard.number) {
      this.fixPair();
    } else {
      this.closePair();
    }
  }

  fixPair(): void {
    this.selectedCardIndexes.map(index => (this.cards[index].matched = true));
    this.selectedCardIndexes = [];
    this.matchedPairCount++;
  }

  closePair(): void {
    this.selectedCardIndexes.map(index => (this.cards[index].turned = false));
    this.selectedCardIndexes = [];
  }

  created(): void {
    this.prepareCards();
    this.shuffleCards();
  }
}
</script>

<style lang="scss" scoped>
.scoreArea {
  background-color: #444;
  color: white;
  font-family: "Press Start 2P", cursive;
  line-height: 1.8;
  text-align: right;
  padding: 15px 0;
  margin-bottom: 60px;
}
.cardTable {
  display: grid;
  grid-template-columns: repeat(10, 100px);
  grid-template-rows: repeat(2, 175px);
  column-gap: 15px;
  row-gap: 15px;
}
</style>
