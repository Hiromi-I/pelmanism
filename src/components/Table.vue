<template>
  <main class="wrapper">
    <section class="scoreArea">
      <div class="centeringContainer">
        <p>TRY: {{ trialCount }}</p>
        <p>SCORE: {{ matchedPairCount }}</p>
      </div>
    </section>

    <div class="centeringContainer">
      <section class="cardTable">
        <Card
          v-for="(card, index) in cardList"
          :card="card"
          :key="index"
          @turn="onCardTurned(index)"
        />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import CardObject from "@/models/Card";
import CardList from "@/store/modules/card-list";
import GameInfo from "@/store/modules/game-info";

@Component({
  name: "Table",
  components: {
    Card
  }
})
export default class Table extends Vue {
  get cardList(): CardObject[] {
    return CardList.cardList;
  }

  get trialCount(): string {
    return GameInfo.trialCount;
  }

  get matchedPairCount(): string {
    return GameInfo.matchedPairCount;
  }

  onCardTurned(index: number): void {
    CardList.selectCard(index);
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
