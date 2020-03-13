import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("カードが表の場合は画像を表示", () => {
    const cardObject = {number: 1, turned: true, matched: false}
    const wrapper = shallowMount(Card, {
      propsData: {card: cardObject}
    })
    
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('.back').exists()).toBeFalsy();
  })

  it("カードが裏の場合は画像は表示されない", () => {
    const cardObject = {number: 1, turned: false, matched: false}
    const wrapper = shallowMount(Card, {
      propsData: {card: cardObject}
    })

    expect(wrapper.find('img').exists()).toBeFalsy();
    expect(wrapper.find('.back').exists()).toBeTruthy();
  })
})