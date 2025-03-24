<script setup>
import NavBar from "../components/NavBar.vue";
import FooterMenu from "../components/FooterMenu.vue";
</script>

<template>
    <div class="container">
        <NavBar />
        <main class="content-projects">
            <h2>Featured Projects</h2>
            <ul class="projects">
                <li class="item-project">

                </li>
            </ul>
        </main>
        <FooterMenu />
    </div>
</template>

<style scoped>

.content-projects {
    display: block;
    width: 760px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0px 20px;
    border: 1px solid #fff;
}

.content-projects h2 {
    margin: 60px 0 0;
    font-size: 24px;
    font-weight: bold;
    color: var(--text-color-muted);
}

</style>