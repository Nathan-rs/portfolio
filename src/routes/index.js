import { createWebHistory, createRouter } from "vue-router"

import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ArticleView from "../views/ArticleView.vue"
import ProjectView from "../views/ProjectView.vue"

const routes = [
    { path: '/portfolio', component: HomeView },
    { path: '/portfolio/about', component: AboutView },
    { path: '/portfolio/articles', component: ArticleView },
    { path: '/portfolio/projects', component: ProjectView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router