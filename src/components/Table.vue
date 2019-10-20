<template>
    <main class="wrapper">
        <section class="scoreArea">
            <div class="centeringContainer">
                <p>TRY: {{ trial_count | zero_padding }}</p>
                <p>SCORE: {{ matched_pair_count | zero_padding }}</p>
            </div>
        </section>

        <div class="centeringContainer">
            <section class="cardTable">
                <Card v-for="(card, index) in cards"
                    :card="card" :key="index" @turn="select_card(index)" />
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.scoreArea {
    background-color: #444;
    color: white;
    font-family: 'Press Start 2P', cursive;
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

<script>
import Card from './Card.vue'

const CARD_PAIR_SET = 10

export default {
    name: 'Table',
    components: {
        Card
    },
    data: function() {
        return {
            cards: [],
            selected_card_indexes: [],
            trial_count: 0,
            matched_pair_count: 0
        }
    },
    methods: {
        prepare_cards: function() {
            for (let i=0; i<CARD_PAIR_SET; i++) {
                const card = {
                    number: i,
                    turned: false,
                    matched: false
                }
                // 対になる様、各数字2つずつ用意
                this.cards.push(card, Object.assign({}, card))
            }
        },
        shuffle_cards: function() {
            this.cards.sort(() => Math.random() - Math.random())
        },
        select_card: function(index) {
            if (this.selected_card_indexes.length > 1) return

            this.selected_card_indexes.push(index)
            this.cards[index].turned = true

            if (this.selected_card_indexes.length === 2) {
                window.setTimeout(this.check_pair, 1000)
            }
        },
        check_pair: function() {
            const first_card = this.cards[this.selected_card_indexes[0]]
            const second_card = this.cards[this.selected_card_indexes[1]]
            this.trial_count ++

            if (first_card.number === second_card.number) {
                this.fix_pair()
            } else {
                this.close_pair()
            }
        },
        fix_pair: function() {
            this.selected_card_indexes.map(index => this.cards[index].matched = true)
            this.selected_card_indexes = []
            this.matched_pair_count ++
        },
        close_pair: function() {
            this.selected_card_indexes.map(index => this.cards[index].turned = false)
            this.selected_card_indexes = []
        }
    },
    filters: {
        zero_padding: function(value) {
            return ('00' + value).slice(-3)
        }
    },
    created: function() {
        this.prepare_cards()
        this.shuffle_cards()
    }
}
</script>