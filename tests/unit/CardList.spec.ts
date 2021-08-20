import { shallowMount } from "@vue/test-utils";
import CardList from "@/components/CardList.vue";
import CardItem from "@/components/CardItem.vue";
import { store, key } from "@/store";


describe("CardList.vue", () => {
  it("Cardコンポーネントが20枚表示される", () => {
    const wrapper = shallowMount(CardList, {
      global: {
        plugins: [[store, key]],
      },
    });
    
    const cardList = wrapper.findAllComponents(CardItem);
    expect(cardList.length).toBe(20);
  })
})