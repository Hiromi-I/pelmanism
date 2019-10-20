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

<style lang="scss" scoped>
@mixin size() {
    width: 100px;
    height: 175px;
}
.card {
    @include size();
    position: relative;
}
.content {
    @include size();
    margin: 0;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.1s, opacity 0.1s;
}
.back {
    background: repeating-linear-gradient(90deg, #F33, #F33 10px, #A33 0, #A33 15px);
}
.v-enter, .v-leave-to {
    transform: rotateY(0deg);
    opacity: 0;
}
.v-enter-to, .v-leave {
    transform: rotateY(90deg);
    opacity: 1;
}
</style>

<script>
export default {
    name: 'Card',
    props: {
        card: Object
    },
    computed: {
        imagePath: function() {
            return require(`@/assets/cat-${this.card.number}.png`);
        }
    }
}
</script>