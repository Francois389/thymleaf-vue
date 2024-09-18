<template>
    <div id="conteneur">
        <input :value="value" type="number"/>
        <button @click="incrementValue">Add {{ increment }}</button>
    </div>
</template>

<script>

export default {
    name: "WeekChart",
    props: {
        increment: {type: Number, default: 1},
    },
    data() {
        return {
            value: 0
        }
    },
    methods: {
        incrementValue() {
            this.value += this.increment
        }
    }
};
</script>

<style scoped>
#conteneur {
    input {
        width: fit-content;
    }
}
</style>