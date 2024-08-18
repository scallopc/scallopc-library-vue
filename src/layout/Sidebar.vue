<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo-container">
            <img :src="logoURL" alt="Vue" />
            <span class="text t-logo">Scallop</span>
        </div>

        <div class="menu-toggle-wrap">
            <span class="menu-toggle" @click="ToggleMenu">
                <i class="bi bi-chevron-double-right"></i>
            </span>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
                <i class="bi bi-house"></i>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/button" class="button">
                <i class="bi bi-type-bold"></i>
                <span class="text">Button</span>
            </router-link>
            <router-link to="/chart" class="button">
                <i class="bi bi-graph-up-arrow"></i>
                <span class="text">Chart</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/settings" class="button">
                <i class="bi bi-gear"></i>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem('is_expanded', is_expanded.value)
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

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

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

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
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
        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            i {
                margin-right: 1rem;
            }
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
