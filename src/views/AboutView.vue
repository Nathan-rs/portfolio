<script setup>
import NavBar from '../components/NavBar.vue'
import FooterMenu from '../components/FooterMenu.vue'
import CareerAbout from '../components/CareerAbout.vue'

const careers = [
    {
        id: 1,
        position: 'Desenvolvedor Web',
        startDate: '01/08/2023',
        endDate: '01/11/2023',
        company: 'Uso Prata',
        location: 'Caxias, Maranhão'
    },
    {
        id: 2,
        position: 'Estágio em Inteligência Artificial',
        startDate: '01/03/2024',
        endDate: '01/04/2024',
        company: 'Decole Contabilidade',
        location: 'Caxias, Maranhão'
    },
    {
        id: 3,
        position: 'Desenvolvedor FullStack',
        startDate: '01/04/2024',
        endDate: '01/05/2024',
        company: 'Allinsys',
        location: 'Rio Grande do Sul'
    },
    {
        id: 4,
        position: 'Desenvolvedor FullStack',
        startDate: '01/06/2024',
        endDate: '01/08/2024',
        company: 'Allinsys',
        location: 'Rio Grande do Sul'
    },
    {
        id: 5,
        position: 'Desenvolvedor FullStack',
        startDate: '01/05/2024',
        endDate: '',
        company: 'IG7 - SIPAE',
        location: 'Caxias, Maranhão',
    }
]

// Ordenar pela data
careers.sort((a, b) => b.id - a.id);

</script>

<template>
    <div class="container">
        <NavBar />
        <main class="container-about">
            <div class="title">
                <h1>Desenvolvedor FullStack</h1>
            </div>

            <div class="img-perfil">
                <img src="../assets/images/profile.jpg" alt="foto de perfil" />
            </div>

            <div class="bio">
                <h2>Bio</h2>
                <blockquote>
                    <p>
                        Olá, meu nome é <strong>Natã Ramos</strong>, sou desenvolvedor FullStack, com experiência em
                        desenvolvimento de aplicações web.
                        Atualmente sou graduado em Ciência da Computação e buscando novo desafios.
                        Estou focado em desenvolvimento de aplicações web com tecnologias como Vue.js,
                        PHP, MongoDB, MySQL e GoLang.
                        Estou sempre em busca de novos desafios e aprendizados, e
                        acredito que a tecnologia é uma ferramenta poderosa para transformar o mundo.
                    </p>
                </blockquote>

                <div class="download-cv">

                    <a class="link-download" href="./assets/docs/Curriculo_Natã_Ramos.pdf" target="_blank">
                        <div class="icon">
                            <i class="pi pi-download"></i>
                        </div>
                        Download Cv
                    </a>
                </div>
            </div>
            <h2 class="title-career">Career</h2>
            <div class="experiences">
                <!-- <CareerAbout :position="'Desenvolvedor Web'" :startDate="'01/08/2023'" :endDate="'01/11/2023'"
                    :company="'Uso Prata'" :location="'Caxias, Maranhão'"/> -->

                <ul class="list-career">
                    <li class="item-carrer" v-for="career in careers" :key="career.id">
                        <CareerAbout :position="career.position" :startDate="career.startDate" :endDate="career.endDate"
                            :company="career.company" :location="career.location" />
                    </li>
                </ul>
            </div>
        </main>
        <FooterMenu />
    </div>
</template>

<style scoped>
.list-career {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

a {
    font-size: 1em;
    color: var(--text-color);
    text-decoration: none;
}

h3 {
    font-size: 18px;
    margin: 20px 0px 0px;
}

span {
    font-size: 14px;
    color: var(--text-color-muted);
}

.experiences {
    line-height: 32px;
}

.title-career {
    display: block;
    font-size: 1.6rem;
    font-weight: bold;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.download-cv {
    display: flex;
    align-items: center;
}

.link-download {
    display: flex;
    gap: .5rem;
    color: var(--text-color-muted);
    padding: 8px 10px;
    cursor: pointer;
    border-radius: 4px;
    line-height: 24px;
}

.link-download:hover {
    background-color: var(--bg-color-dark-secondary);
}

blockquote {
    border-left: 4px solid var(--bg-color-dark-secondary);
    padding-left: 20px;
    margin: 0;
}

.bio blockquote p {
    display: block;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.container-about {
    max-width: 760px;
    padding: 0px 20px;
    margin: 0 auto;
    min-height: 100vh;
    /* border: 1px solid #fff; */
}

.title h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-color-muted);
    line-height: 1.5;
}

.img-perfil {
    display: flex;
    justify-content: flex-start;
    margin: 20px 0;
    /* border: 1px solid #fff; */
}

.img-perfil img {
    width: 336px;
    height: 336px;
}

.bio {
    text-align: justify;
}

.container {
    display: flex;
    height: 100%;
}
</style>