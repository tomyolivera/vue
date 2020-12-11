import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/micalendario',
    name: 'MiCalendario',
    component: () => import('../views/MiCalendario.vue')
  },
  {
    path: '/dolarhoy',
    name: 'DolarHoy',
    component: () => import('../views/DolarHoy.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
