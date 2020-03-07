<template>
  <section class="scoreArea">
    <div class="centeringContainer">
      <p>TRY: {{ trialCount }}</p>
      <p>SCORE: {{ matchedPairCount }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameInfoModule from "@/store/modules/game-info";

@Component({ name: "GameInfo" })
export default class GameInfo extends Vue {
  get trialCount(): string {
    return GameInfoModule.trialCount;
  }

  get matchedPairCount(): string {
    return GameInfoModule.matchedPairCount;
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
</style>
