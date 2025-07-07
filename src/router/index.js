import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';


const routes = [
  {
    path: '/',
    name: 'LandingRedirect',
    beforeEnter() {
      window.location.href = '/t.html';
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
