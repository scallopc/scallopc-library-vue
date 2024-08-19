<template>
    <div :class="`${isExpandedMenu ? 'is-expanded' : ''}`">
        <div class="menu">
            <router-link v-if="props.item.route" :to="props.item.route" class="button" @click="toggle">
                <div class="flex align-items-center">
                    <i :class="`bi bi-${props.item.icon}`"></i>
                    <span class="text">{{ props.item.label }}</span>
                </div>

                <i
                    v-if="props.item.children && props.item.children.length"
                    :class="`bi bi-chevron-${isExpanded ? 'up' : 'down'}`"
                ></i>
            </router-link>
            <div v-else class="button" @click="toggle">
                <div class="flex align-items-center">
                    <i :class="`bi bi-${props.item.icon}`"></i>
                    <span class="text">{{ props.item.label }}</span>
                </div>
                <i
                    v-if="props.item.children && props.item.children.length"
                    :class="`bi bi-chevron-${isExpanded ? 'up' : 'down'}`"
                ></i>
            </div>
            <div v-if="isExpanded" class="submenu">
                <MenuItem v-for="child in props.item.children" :key="child.label" :item="child" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    isExpandedMenu: {
        type: Boolean,
        required: true,
    },
})

const isExpanded = ref(false)

const toggle = () => {
    if (props.item.children && props.item.children.length) {
        isExpanded.value = !isExpanded.value
    }
}
</script>

<style lang="scss" scoped>
.submenu {
    padding-left: 1rem;
}

.button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.menu {
    margin: 0 -1rem;

    .button {
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: space-between;
        transition: 0.2s ease-in-out;
        padding: 0.5rem 1rem;

        i {
            font-size: 2rem;
            color: var(--light);
            transition: 0.2s ease-in-out;
        }
        .text {
            color: var(--light);
            transition: 0.2s ease-in-out;
        }

        &:hover {
            background-color: var(--dark-alt);

            i,
            .text {
                color: var(--primary);
            }
        }

        &.router-link-exact-active {
            background-color: var(--dark-alt);
            border-right: 5px solid var(--primary);

            i,
            .text {
                color: var(--primary);
            }
        }
    }
}

.is-expanded {
    .button .text {
        opacity: 1;
    }

    .button {
        i {
            margin-right: 1rem;
        }
    }
}
</style>
