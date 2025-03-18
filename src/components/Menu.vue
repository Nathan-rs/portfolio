<script setup>
import SVGN from '../assets/icons/SVGN.vue'
</script>

<template>
    <header class="header-menu">
        <div class="iconN">
            <SVGN width="20" height="20" fill="#a0a0a0" />
        </div>

        <nav class="nav-menu">
            <ul class="list-menu">
                <li class="item-menu">
                    <a href="#">About</a>
                </li>

                <li class="item-menu">
                    <a href="#">Articles</a>
                </li>

                <li class="item-menu">
                    <a href="#">Projects</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.iconN {
    padding: .2rem;
}

.header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 1rem;
}

.list-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.item-menu {

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