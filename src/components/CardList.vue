<template>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import CardModel from "@/models/Card";
import CardListModule from "@/store/modules/card-list";

@Component({
  name: "CardList",
  components: {
    Card
  }
})
export default class CardList extends Vue {
  get cardList(): CardModel[] {
    return CardListModule.cardList;
  }

  onCardTurned(index: number): void {
    CardListModule.selectCard(index);
  }
}
</script>

<style lang="scss" scoped>
.cardTable {
  display: grid;
  grid-template-columns: repeat(10, 100px);
  grid-template-rows: repeat(2, 175px);
  column-gap: 15px;
  row-gap: 15px;
}
</style>
