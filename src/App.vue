<template>
    <!-- <HeaderView /> -->
    <SidebarTree :menuTree="menuTree" />
    <!-- <Sidebar /> -->
    <RouterView />
</template>

<script setup>
import SidebarTree from './layout/sidebarTree/SidebarTree.vue'

const menuTree = [
    {
        label: 'Home',
        icon: 'house',
        route: '/',
    },
    {
        label: 'Components',
        icon: 'shop-window',
        children: [
            {
                label: 'Button',
                route: '/button',
            },
            {
                label: 'Chart',
                route: '/chart',
            },
        ],
    },
    {
        label: 'App',
        icon: 'gear',
        route: '/application',
    },
]
</script>

<style lang="scss">
@import 'primeflex/primeflex.css';

:root {
    --primary: #4ade80;
    --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
}

#app {
    color: #2c3e50;
    display: flex;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: var(--light);
}

main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
        padding-left: 6rem;
    }
}
</style>
