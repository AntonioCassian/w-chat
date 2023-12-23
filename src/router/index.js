import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/store'

import Register from '@/views/Register.vue'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/Login.vue') },
  { path: '/register', name: 'register', component: () => import('@/views/Register.vue') },
  { path: '/perfil', name: 'perfil', component: () => import('@/views/Perfil.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/*
router.beforeEach(async (to, from, next) => {
  if (to.name !== 'login' && !store.getters['Authorization']) {
    try {
      await store.dispatch('ActionCheckToken')

      next({ name: to.name })
    } catch (err) {
      next({ name: 'login' })
    }
  } else {
    if (to.name === 'login' && store.getters['Authorization']) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
})
*/
export default router;

