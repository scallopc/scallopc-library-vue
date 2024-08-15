<template>
    <HeaderView />
    <MenuRoute />
    <Suspense>
        <RouterView />
    </Suspense>
    <FooterView />
</template>

<script setup>
import HeaderView from './layout/HeaderView.vue'
import FooterView from './layout/FooterView.vue'
import MenuRoute from './layout/MenuRoute.vue'
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

body {
    margin: 0;
    padding: 0;
}
</style>

<style lang="css">
@import 'primeflex/primeflex.css';
</style>
