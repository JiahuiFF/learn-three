import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/hello-world',
      name: 'helloWorld',
      component: () => import('@/views/HelloWorldView.vue'),
    },
    {
      path: '/basic-geometry',
      name: 'basicGeometry',
      component: () => import('@/views/BasicGeometryView.vue'),
    },
  ],
})

export default router
