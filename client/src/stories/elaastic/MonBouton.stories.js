import Button from "../Button.vue";

export default {
    title: "Elaastic/MonBouton",
    component: Button,
    argType: {
        size: {
            control: { type: "select"},
            options: ["small", "medium", "large"],
        },
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => ({
    components: { Button },
    setup() {
        return { args };
    },
    template: '<Button v-bind="args" />'
})

export const Primary = Template.bind({});
export const Small = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Mon Bouton',
}

Small.args = {
    primary: true,
    label: 'Mon Bouton',
    size: 'small'
}