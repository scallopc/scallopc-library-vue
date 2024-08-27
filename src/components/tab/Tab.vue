<template>
    <div v-if="isActive">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, onMounted, ref, watchEffect } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
})

const isActive = ref(false) // Controla se esta aba está ativa
const registerTab = inject('registerTab') // Função para registrar a aba

// Registra a aba quando o componente é montado
onMounted(() => {
    registerTab({ title: props.title, name: props.name })
})

// Define o conteúdo da aba ativa
watchEffect(() => {
    const tabs = inject('tabs', [])
    isActive.value = tabs.findIndex((tab) => tab.name === props.name) === -1 ? false : true
})
</script>
