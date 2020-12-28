import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'index',
  component: () => import( /* webpackChunkName: "about" */ '../views/index.vue')
}, {
  path: '/index',
  name: 'index',
  component: () => import( /* webpackChunkName: "about" */ '../views/index.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import( /* webpackChunkName: "about" */ '../views/login.vue')
}, {
  path: '/register',
  name: 'register',
  component: () => import( /* webpackChunkName: "about" */ '../views/register.vue')
}, {
  path: '/card',/* 购物车页面 */
  name: 'card',
  component: () => import( /* webpackChunkName: "about" */ '../views/card.vue')
}, {
  path: '/good/:id',/* 购物车页面 */
  name: 'good',
  component: () => import( /* webpackChunkName: "about" */ '../views/good.vue')
}, {
  path: '/card',/* 购物车页面 */
  name: 'card',
  component: () => import( /* webpackChunkName: "about" */ '../views/card.vue')
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router