<script setup>
import { computed } from 'vue'


const props = defineProps({
    position: String,
    company: String,
    location: String,
    startDate: String,
    endDate: String,
    duration: String,
})

const duracao = computed(() => {
    const start = new Date(props.startDate.split('/').reverse().join('-'))
    const end = new Date(props.endDate.split('/').reverse().join('-'))
    const diffTime = Math.abs(end - start)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return `${Math.floor(diffDays / 30)} meses`
})

</script>

<template>
    <div class="career">
        <h3>{{ position }}</h3>
        <p class="">
            <a class="company" href="#" target="_blank">{{ company }}</a>
            <span> - {{ location }}</span>
        </p>
        <p>
            <span>
                {{
                    (new Date(startDate.split('/').reverse().join('-'))).toLocaleDateString('pt-BR',
                        {
                            month: 'short', year: 'numeric'
                        })
                }}
            </span>
            <span> - </span>
            <span>
                {{
                    (new Date(endDate.split('/').reverse().join('-'))).toLocaleDateString('pt-BR', {
                        month: 'short', year: 'numeric'
                    })
                }}
            </span>
            <span> . : </span>
            <span>{{ duration ? duration : duracao }}</span>
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