<script setup>
import { defineProps } from 'vue';
import portfolio_1 from '@/assets/images/projects/portfolio-1.jpg';


const props = defineProps({
    image: String,
    title: String,
    description: String,
    tags: Array
})

</script>

<template>
    <div class="card-project">
        <div class="card-image">
            <img :src="image" alt="">
        </div>
        <div class="card-content">
            <div class="card-title">
                <h2>{{ title }}</h2>
            </div>

            <div class="card-description">
                <p>
                    {{ description }}
                </p>
            </div>

            <div class="access-project">
                <a href="#">acessar</a>
                <a href="#">repositorio</a>

            </div>

            <div class="tags">
                <span v-for="tag in tags">{{ tag }}</span>
            </div>
        </div>
    </div>
</template>

<style escoped>
.card-project {
    display: block;
    width: 350px;
    margin: 20px 0;
    border: 1px solid var(--text-color-muted);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-image img {
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    object-fit: cover;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding: 10px;
}

.card-title h2 {
    font-size: 18px;
    line-height: 1.5;
    color: var(--color-primary);
}

.card-description p {
    line-height: 1.5;
    color: var(--text-color-muted);
    text-align: justify;
}

.access-project {
    display: none;
    gap: 1rem;
    width: 100%;
    margin: 10px 0;
}

.access-project a {
    display: block;
    color: var(--bg-color-dark);
    text-decoration: none;
    padding: .2rem .5rem;
    border-radius: 4px;
    background-color: var(--text-color-muted);
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 10px 0;
    justify-content: flex-start;
    align-items: center;
}

.tags span {
    padding: .2rem .5rem;
    font-size: 12px;
    background-color: var(--text-color-muted);
    border-radius: 4px;
    color: var(--bg-color-dark);
    text-transform: uppercase;
}
</style>