import { shallowMount } from "@vue/test-utils";
import CardItem from "@/components/CardItem.vue";

describe("CardItem.vue", () => {
  it("カードが表の場合は画像を表示", () => {
    const cardObject = {number: 1, turned: true, matched: false}
    const wrapper = shallowMount(CardItem, {
      props: {card: cardObject}
    })
    
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('.back').exists()).toBeFalsy();
  })

  it("カードが裏の場合は画像は表示されない", () => {
    const cardObject = {number: 1, turned: false, matched: false}
    const wrapper = shallowMount(CardItem, {
      props: {card: cardObject}
    })

    expect(wrapper.find('img').exists()).toBeFalsy();
    expect(wrapper.find('.back').exists()).toBeTruthy();
  })

  it("カードが裏の時にクリックすると、emitされる", () => {
    const cardObject = {number: 1, turned: false, matched: false}
    const wrapper = shallowMount(CardItem, {
      props: {card: cardObject}
    })

    wrapper.find('.back').trigger('click');

    expect(wrapper.emitted().turn?.length).toBe(1);
  })
})