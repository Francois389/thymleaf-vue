import {shallowMount} from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

const INCREMENT = 2

describe("Counter", () => {
    it ("rendres without error", () => {
        const wrapper = shallowMount(Counter, {
            props: {
                increment: INCREMENT
            },
        });

        const button = wrapper.find('button')

        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('input').exists()).toBe(true)
        expect(wrapper.vm.increment).toBe(INCREMENT)
    });
});