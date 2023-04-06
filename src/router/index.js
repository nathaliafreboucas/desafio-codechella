import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AExperiencia',
    name: 'aExperiencia',
    // route level code-splitting
    // this generates a separate chunk (AExperiencia.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AExperiencia" */ '../views/AExperiencia.vue')
  },
  {
    path: '/MapaDeSetores',
    name: 'mapaDeSetores',
    // route level code-splitting
    // this generates a separate chunk (MapaDeSetores.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MapaDeSetores" */ '../views/MapaDeSetores.vue')
  },
  {
    path: '/GarantaSeuIngresso',
    name: 'garantaSeuIngresso',
    component: () => import('../views/GarantaSeuIngresso.vue')
  },
  {
    path: '/SeuIngresso',
    name: 'seuIngresso',
    // route level code-splitting
    // this generates a separate chunk (SeuIngresso.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SeuIngresso" */ '../views/SeuIngresso.vue')
  },
  {
    path: '/InformacoesGerais',
    name: 'informacoesGerais',
    // route level code-splitting
    // this generates a separate chunk (InformacoesGerais.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "InformacoesGerais" */ '../views/InformacoesGerais.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
