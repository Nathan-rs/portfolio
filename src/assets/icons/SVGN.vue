<script setup>

defineProps({
    width: {
        type: String,
        default: "80px"
    },
    height: {
        type: String,
        default: "80px"
    },
    fill: {
        type: String,
        default: "#000000"
    }
})

</script>

<template>
    <svg :fill="fill" :width="width" :height="height" viewBox="0 0 32 32" version="1.1"
        xmlns="http://www.w3.org/2000/svg">

        <title>n</title>
        <path
            d="M25.375 3.993h-0.928c-0.442 0-0.8 0.358-0.801 0.8v18.66l-15.439-19.162c-0.148-0.182-0.372-0.298-0.623-0.298h-0.928c-0.442 0-0.8 0.358-0.8 0.8v22.4c0 0.442 0.358 0.8 0.8 0.801h0.928c0.442-0.001 0.8-0.359 0.8-0.801v0-18.66l15.44 19.162c0.148 0.182 0.372 0.298 0.623 0.299h0.928c0.442-0.001 0.8-0.359 0.801-0.801v-22.4c-0.001-0.442-0.359-0.8-0.801-0.8v0z">
        </path>
    </svg>
</template>