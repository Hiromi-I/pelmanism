<template>
  <div class="centeringContainer">
    <section class="cardTable">
      <CardItem
        v-for="(card, index) in cardList"
        :card="card"
        :key="index"
        @turn="onCardTurned(index)"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardItem from "@/components/CardItem.vue";
import CardListModule from "@/store/modules/card-list";

export default defineComponent({
  name: "CardList",
  components: {
    CardItem,
  },
  setup() {
    const cardList = CardListModule.cardList;
    const onCardTurned = (index: number) => {
      CardListModule.selectCard(index);
    };

    return {
      cardList,
      onCardTurned,
    };
  },
});
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
