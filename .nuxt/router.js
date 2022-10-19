import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49f1230e = () => interopDefault(import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */))
const _483a81c6 = () => interopDefault(import('../pages/project/_slug.vue' /* webpackChunkName: "pages/project/_slug" */))
const _00941884 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/project",
    component: _49f1230e,
    name: "project"
  }, {
    path: "/project/:slug",
    component: _483a81c6,
    name: "project-slug"
  }, {
    path: "/",
    component: _00941884,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
