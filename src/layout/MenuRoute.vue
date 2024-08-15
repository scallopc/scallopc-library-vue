<template>
    <div>
        <button @click="togglePosition">{{ menuVisible ? 'Hide Menu' : 'Show Menu' }}</button>
        <div v-if="menuVisible" class="menu-container">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/charts">Charts</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuRoute',
    data() {
        return {
            menuVisible: true, // Controla a visibilidade do menu
        }
    },
    methods: {
        togglePosition() {
            this.menuVisible = !this.menuVisible
        },
    },
}
</script>

<style scoped>
.menu-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    background-color: #f0f0f0;
}

button {
    position: fixed;
    top: 10px;
    right: 10px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin: 10px 0;
}
</style>
