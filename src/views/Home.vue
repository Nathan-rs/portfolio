<script setup>
import Menu from './Menu.vue'
import MessageHome from './MessageHome.vue';
import FooterMenu from './FooterMenu.vue';
</script>

<template>

    <div class="container-home">
        <Menu />
        <MessageHome name="Natã Ramos" funcao="Desenvolvedor FullStack"
            description=">_ Aplicações web para seu negocio" />
        <FooterMenu />
    </div>

</template>

<style scoped>
.container-home {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>