<template>
    <div class="tabs">
        <!-- Abas Títulos -->
        <div class="tab-titles">
            <button
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ active: index === activeTab }"
                @click="selectTab(index)"
            >
                {{ tab.title }}
            </button>
        </div>
        <!-- Conteúdo da Aba -->
        <div class="tab-content">
            <!-- Renderiza o conteúdo da aba ativa -->
            <slot :name="tabs[activeTab]?.name"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const tabs = ref([]) // Armazena as abas registradas
const activeTab = ref(0) // Aba ativa (padrão: a primeira aba)

const selectTab = (index) => {
    activeTab.value = index // Define a aba ativa com base no índice
}

// Função para registrar uma nova aba
provide('registerTab', (tab) => {
    tabs.value.push(tab)
})
</script>

<style scoped>
.tabs {
    border: 1px solid #ccc;
}

.tab-titles {
    display: flex;
}

.tab-titles button {
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: #f5f5f5;
    margin-right: 4px; /* Espaçamento entre os botões */
}

.tab-titles .active {
    background-color: #ddd;
    font-weight: bold;
}

.tab-content {
    padding: 20px;
    border-top: 1px solid #ccc;
}
</style>
