<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SVGN from '../assets/icons/SVGN.vue'
</script>

<template>
    <header class="header-menu">
        <nav class="nav-menu">
            <ul class="list-menu">
                <div class="iconN">
                    <li class="">
                        <RouterLink to="/">
                            <SVGN width="20" height="20" fill="#a0a0a0" />
                        </RouterLink>
                    </li>
                </div>

                <div class="items">
                    <li class="item-menu">
                        <RouterLink to="/about">About</RouterLink>
                    </li>

                    <li class="item-menu">
                        <RouterLink to="/articles">Articles</RouterLink>
                    </li>

                    <li class="item-menu">
                        <RouterLink to="/projects">Projects</RouterLink>
                    </li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.iconN li a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
}

.iconN:hover {
    border-radius: 50%;
    background-color: #0b1530;
}

.list-menu {
    display: flex;
    padding: .8rem;
    justify-content: space-between;
    align-items: center;
}

.items {
    display: flex;
}

.item-menu a {
    height: 100%;
    padding: .6rem;
    text-decoration: none;
    color: #d0d3d4;
}

.item-menu a:hover {
    border-radius: 4px;
    background-color: #0b1530;
    color: #f5f5f5;
}
</style>