import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('../views/ButtonView'),
    },
    {
      path: '/charts',
      name: 'Charts',
      component: () => import('../views/ChartsView'),
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router
