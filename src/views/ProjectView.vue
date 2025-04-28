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
    },
    {
        id: 3,
        image: new URL('@/assets/images/projects/portfolio-1.jpg', import.meta.url).href,
        title: 'Portfolio',
        description: 'This is a project that I developed to show my skills and projects that I have developed.',
        tags: ['HTML', 'CSS', 'JavaScript', 'php', 'mysql']
    },
    {
        id: 4,
        image: new URL('@/assets/images/projects/portfolio-4.jpg', import.meta.url).href,
        title: 'Portfolio',
        description: 'This is a project that I developed to show my skills and projects that I have developed.',
        tags: ['HTML', 'CSS', 'JavaScript', 'php', 'mysql']
    },
    {
        id: 5,
        image: new URL('@/assets/images/projects/portfolio-1.jpg', import.meta.url).href,
        title: 'Portfolio',
        description: 'This is a project that I developed to show my skills and projects that I have developed.',
        tags: ['HTML', 'CSS', 'JavaScript', 'php', 'mysql']
    },
    {
        id: 6,
        image: new URL('@/assets/images/projects/portfolio-4.jpg', import.meta.url).href,
        title: 'Portfolio',
        description: 'This is a project that I developed to show my skills and projects that I have developed.',
        tags: ['HTML', 'CSS', 'JavaScript', 'php', 'mysql']
    },
    {
        id: 7,
        image: new URL('@/assets/images/projects/portfolio-1.jpg', import.meta.url).href,
        title: 'Portfolio',
        description: 'This is a project that I developed to show my skills and projects that I have developed.',
        tags: ['HTML', 'CSS', 'JavaScript', 'php', 'mysql']
    },
    {
        id: 8,
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
                        <CardProject :image="el.image" :title="el.title" :description="el.description"
                            :tags="el.tags" />
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
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
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
    justify-content: center;
    align-items: center;
    /* width: 80%; */
    /* border: 1px solid red; */
}

.projects li {
    padding: 0 1rem 0 0;
}

@media (max-width: 480px) {
    .content-projects {
        min-width: 100%;
        padding: 0px;
    }

    .projects li {
        padding: 0;
    }
}

@media (max-width: 768px) {
    .content-projects {
        min-width: 100%;
        padding: 0px;
    }

    .projects {
        width: 100%;
        justify-content: center;
    }

    .projects li {
        padding-right: 0;
        padding-left: .8rem;
    }
}

@media (max-width: 992px) {
    .content-projects {
        max-width: 100%;
        padding: 0px;
    }

    .projects  li {
        padding-right: .8rem;
        padding-left: .8rem;
    }

}

@media (max-width: 1200px) {
    .content-projects {
        max-width: 100%;
        padding: 0px;
    }

    .projects li {
        padding-right: .8rem;
        padding-left: .8rem;
    }
}

</style>