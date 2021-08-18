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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import CardItem from "@/components/CardItem.vue";

export default defineComponent({
  name: "CardList",
  components: {
    CardItem,
  },
  setup() {
    const store = useStore();
    const cardList = computed(() => store.getters["cards/cardList"]);
    const onCardTurned = (index: number) => store.dispatch("cards/selectCard", index);

    return {
      cardList,
      onCardTurned,
    };
  },
});
</script>

<style lang="css" scoped>
.cardTable {
  display: grid;
  grid-template-columns: repeat(10, 100px);
  grid-template-rows: repeat(2, 175px);
  column-gap: 15px;
  row-gap: 15px;
}
</style>
