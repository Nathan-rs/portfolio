<script setup>
import { computed } from 'vue'


const props = defineProps({
    position: String,
    company: String,
    location: String,
    startDate: String,
    endDate: String,
})

const startDateShort = computed(() => {
    const { startDate } = props

    if(!startDate || startDate.trim() === '') return 'Data inválida'

    const start = new Date(startDate.split('/').reverse().join('-'))

    if(isNaN(start.getTime())) return 'Data inválida'

    return start.toLocaleDateString('pt-BR', {
        month: 'short', year: 'numeric'
    })
})

const endDateShort = computed(() => {
    const { startDate, endDate } = props

    if(!endDate || endDate.trim() === '') return 'Atualmente'

    if(endDate < startDate) return 'Data inválida'

    const end = new Date(endDate.split('/').reverse().join('-'))

    if(isNaN(end.getTime())) return 'Data inválida'

    return end.toLocaleDateString('pt-BR', {
        month: 'short', year: 'numeric'
    })
})

const dateFormated = computed(() => {
    const startDate = startDateShort.value
    const endDate = endDateShort.value

    return `${startDate} - ${endDate}` 
})

// const duration = computed(() => {
//     const {startDate, endDate } = props
// })


</script>

<template>
    <div class="career">
        <h3>{{ position }}</h3>
        <p class="">
            <a class="company" href="#" target="_blank">{{ company }}</a>
            <span> - {{ location }}</span>
        </p>
        <p>
            <span> {{ dateFormated}} </span>
            <!-- <span> . : {{ duration }}</span> -->
        </p>
    </div>
</template>

<style scoped>
a {
    font-size: 1em;
    color: var(--text-color);
    text-decoration: none;
}

.company {
    border-bottom: .5px solid var(--text-color-muted);
}

span {
    font-size: 16px;
    /* font-weight: 400; */
    /* line-height: 32px; */
    color: var(--text-color-muted);
}
</style>