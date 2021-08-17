<template>
  <section class="scoreArea">
    <div class="centeringContainer">
      <p>TRY: {{ trialCount }}</p>
      <p>SCORE: {{ matchedPairCount }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import GameInfoModule from "@/store/modules/game-info";

export default defineComponent({
  name: "GameInfo",
  setup() {
    const trialCount = computed(() => GameInfoModule.trialCount);
    const matchedPairCount = computed(() => GameInfoModule.matchedPairCount);

    return {
      trialCount,
      matchedPairCount,
    };
  },
});
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
</style>
