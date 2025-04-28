<script setup>
import NavBar from '../components/NavBar.vue'
import FooterMenu from '../components/FooterMenu.vue'
import { articles } from '../data.js'
import { RouterLink } from 'vue-router'

import { ref } from 'vue'

const date = ref(new Date().toLocaleDateString())

</script>

<template>
    <div class="container">
        <NavBar />
        <main class="article">
            <h2>All articles</h2>
            <ul class="list-articles">
                <li v-for="article in articles" :key="article.id" class="item-article">
                    <a href="#">
                        <span class="note-article">
                            <span class="title-article">{{ article.title }}</span>
                            <span>
                                <time datetime="date()">{{ article.date_publish }}</time>
                            </span>
                        </span>
                    </a>
                </li>
            </ul>
        </main>
        <FooterMenu />
    </div>
</template>

<style scoped>
.article {
    width: 760px;
    /* min-height: 100%; */
    margin: 0 auto;
    padding: 0 20px;
    /* border: 1px solid #fff; */
}

.article h2 {
    margin: 60px 0 0;
    font-size: 24px;
    font-weight: bold;
    padding: 0 20px;
    color: var(--text-color-muted);
}

.title-article {
    display: flex;
    flex-wrap: wrap;
}

.list-articles {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    margin: 20px 0px 0px;
}

.item-article {
    border-bottom: 1px solid var(--text-color-muted);
}

.item-article a {
    display: block;
    padding: 20px 20px;
    line-height: 32px;
    text-decoration: none;
    color: var(--text-color);
}

.item-article:hover {
    /* border: none; */
}

.item-article a:hover {
    border-radius: 4px;
    opacity: 0.8;
    background-color: var(--text-color-muted);
}

.note-article {
    display: flex;
    justify-content: space-between;
}

@media (max-width: 480px) {
    .article {
        width: 100%;
    }

    .article h2 {
        text-align: center;
    }

    .note-article {
        flex-direction: column;
    }

    .note-article span:first-child {
        font-weight: bold;
        font-size: 18px;
    }

}

@media (max-width: 768px) {

    .article {
        width: 100%;
    }

    .article h2 {
        text-align: center;
    }

    .note-article {
        flex-direction: column;
    }

    .note-article span:first-child {
        font-weight: bold;
        font-size: 18px;
    }
}

@media (max-width: 992px) {

    .article {
        width: 100%;

    }

    .article h2 {
        text-align: center;
    }

    .note-article {
        flex: 1;
    }
}

@media (max-width: 1200px) {

    .article {
        width: 100%;
    }

    .article h2 {
        text-align: left;
        margin: 0;
        padding: 0 20px;
    }

    .note-article {
        flex: 1;
    }

}
</style>