<template>
  <div class="card">
    <transition>
      <div v-if="!card.turned" class="content" key="back">
        <div class="content back" @click="$emit('turn')"></div>
      </div>
      <div v-else class="content" key="front">
        <img class="content" :src="imagePath" alt="cat" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, computed } from "vue";
import { CardType } from "@/types/card";

export default defineComponent({
  name: "CardItem",
  props: {
    card: {
      type: Object as PropType<CardType>,
      required: true,
    },
  },
  emits: [
    "turn",
  ],
  setup(props) {
    const { card } = toRefs(props);
    const imagePath = computed(() => require(`@/assets/cat-${card.value.number}.png`));

    return {
      imagePath,
    };
  },
});
</script>

<style lang="css" scoped>
.card {
  width: 100px;
  height: 175px;
  position: relative;
}
.content {
  width: 100px;
  height: 175px;;
  margin: 0;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s, opacity 0.1s;
}
.back {
  background: repeating-linear-gradient(
    90deg,
    #f00,
    #f00 5px,
    #f66 0,
    #f66 6px
  );
}
.v-enter-from,
.v-leave-to {
  transform: rotateY(0deg);
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  transform: rotateY(90deg);
  opacity: 1;
}
</style>
