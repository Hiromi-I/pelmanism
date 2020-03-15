import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import CardList from "@/components/CardList.vue";
import Card from "@/components/Card.vue";


describe("CardList.vue", () => {
  it("Cardコンポーネントが20枚表示される", () => {
    const wrapper = shallowMount(CardList);
    const cardList = wrapper.findAll(Card);
    expect(cardList.length).toBe(20);
  })
})