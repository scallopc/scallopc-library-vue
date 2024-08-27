<template>
    <main>
        <Tabs>
            <!-- Definindo o conteúdo de cada aba com slots nomeados -->
            <template #tab1>
                <Tab title="Aba 1" name="tab1"> Conteúdo da Aba 1 </Tab>
            </template>

            <template #tab2>
                <Tab title="Aba 2" name="tab2"> Conteúdo da Aba 2 </Tab>
            </template>

            <template #tab3>
                <Tab title="Aba 3" name="tab3"> Conteúdo da Aba 3 </Tab>
            </template>
        </Tabs>
    </main>
</template>

<script setup>
import Tabs from '../../components/tab/Tabs.vue'
import Tab from '../../components/tab/Tab.vue'
</script>
