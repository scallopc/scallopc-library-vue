<template>
    <aside :class="`${is_expanded_menu ? 'is-expanded-menu' : ''}`">
        <div class="logo-container">
            <img :src="logoURL" alt="Vue" />
            <span class="text t-logo">Scallopc</span>
        </div>

        <div class="menu-toggle-wrap">
            <span class="menu-toggle" @click="ToggleMenu">
                <i class="bi bi-chevron-double-right"></i>
            </span>
        </div>

        <h3>Menu</h3>
        <MenuItem v-for="item in props.menuTree" :key="item.label" :item="item" :isExpandedMenu="is_expanded_menu" />
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../../assets/logo.png'
import MenuItem from './MenuItem.vue'
const props = defineProps({
    menuTree: {
        type: Array,
        required: true,
    },
})

const is_expanded_menu = ref(localStorage.getItem('is_expanded_menu') === 'true')

const ToggleMenu = () => {
    is_expanded_menu.value = !is_expanded_menu.value
    localStorage.setItem('is_expanded_menu', is_expanded_menu.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .logo-container {
        margin-bottom: 2rem;
        img {
            width: 2rem;
            display: block;
            transition: display 0.3s ease-out;
        }

        .t-logo {
            font-family: 'Island Moments', cursive;
            font-weight: 400;
            font-style: normal;
            font-size: 2.5rem;
            color: var(--primary-alt);
            display: none;
            transition: display 0.3s ease-in-out;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            cursor: pointer;
            transition: 0.2s ease-in-out;
            i {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                i {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3 {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded-menu {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        .logo-container {
            img {
                display: none;
                transition: display 0.3s ease-in-out;
            }
            .t-logo {
                display: block;
                transition: display 0.3s ease-out;
            }
        }
        h3 {
            opacity: 1;
        }
        .footer {
            opacity: 0;
        }
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
}
</style>
