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
import { useStore } from "@/store";

export default defineComponent({
  name: "GameInfo",
  setup() {
    const store = useStore();
    const trialCount = computed(() => store.getters["score/trialCount"]);
    const matchedPairCount = computed(() => store.getters["score/matchedPairCount"]);

    return {
      trialCount,
      matchedPairCount,
    };
  },
});
</script>

<style lang="css" scoped>
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
