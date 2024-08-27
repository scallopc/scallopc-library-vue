import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeApp from '@/views/application/HomeApp.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('../views/ButtonView.vue'),
    },
    {
      path: '/chart',
      name: 'Charts',
      component: () => import('../views/ChartsView.vue'),
    },
    {
      path: '/application',
      name: 'App',
      component: HomeApp
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router
