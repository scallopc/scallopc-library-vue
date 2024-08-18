import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router
