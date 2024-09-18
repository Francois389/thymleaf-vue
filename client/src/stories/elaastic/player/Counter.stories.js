import WeekChart from '/src/components/Counter.vue';

export default {
    title: 'Elaastic/Counter',
    components: {WeekChart},
    argTypes: {
        increment: "number",
    }
};

const Template = (args) => ({
    components: { WeekChart },
    setup() { return { args }; },
    template: '<WeekChart v-bind="args"/>'
})

export const Default = Template.bind({})

Default.args = {
    increment: 1,
}

