// app/router.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import(/* webpackChunkName: "mainKo" */ '../pages/ko/index.vue'),},
  ]
})

export default router
