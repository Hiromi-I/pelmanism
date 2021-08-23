<template>
  <section class="scoreArea">
    <div class="centeringContainer">
      <p class="scoreText">
        TRY:
        <transition mode="out-in">
          <span :key="trialCount" class="scoreNumber">
            {{ trialCount }}
          </span>
        </transition>
      </p>
      <p class="scoreText">
        SCORE:
        <transition mode="out-in">
          <span :key="matchedPairCount" class="scoreNumber">
            {{ matchedPairCount }}
          </span>
        </transition>
      </p>
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
    const matchedPairCount = computed(
      () => store.getters["score/matchedPairCount"]
    );

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
.v-enter-from {
  font-size: 20px;
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  font-size: 16px;
  opacity: 1;
}
</style>
