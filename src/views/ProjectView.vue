<script setup>
import NavBar from "../components/NavBar.vue"
import FooterMenu from "../components/FooterMenu.vue"
import CardProject from "../components/CardProject.vue"


const projects = [
    {
        id: 1,
        image: new URL('@/assets/images/projects/portfolio-1.jpg', import.meta.url).href,
        title: 'Portfolio',
        description: 'This is a project that I developed to show my skills and projects that I have developed.',
        tags: ['HTML', 'CSS', 'JavaScript', 'php', 'mysql']
    },
    {
        id: 2,
        image: new URL('@/assets/images/projects/portfolio-4.jpg', import.meta.url).href,
        title: 'Portfolio',
        description: 'This is a project that I developed to show my skills and projects that I have developed.',
        tags: ['HTML', 'CSS', 'JavaScript', 'php', 'mysql']
    }
]

</script>

<template>
    <div class="container">
        <NavBar />
        <main class="content-projects">
            <h2>Featured Projects</h2>
            <ul class="projects">
                <li v-for="el in projects" :key="el.id" class="item-project">
                    <span>
                        <CardProject :image="el.image" :title="el.title"
                            :description="el.description" :tags="el.tags" />
                    </span>
                </li>
            </ul>
        </main>
        <FooterMenu />
    </div>
</template>

<style scoped>

.content-projects {
    display: flex;
    flex-direction: column;
    min-width: 760px;
    /* min-height: 100vh; */
    margin: 0 auto;
    padding: 0px 20px;
    /* border: 1px solid #fff; */
}

.content-projects h2 {
    margin: 60px 0 0;
    font-size: 24px;
    font-weight: bold;
    color: var(--text-color-muted);
}

.projects {
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid red; */
}

.projects li {
    padding: 1rem;
}
</style>