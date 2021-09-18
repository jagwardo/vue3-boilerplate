import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/posts/index.vue')
  },
  {
    path: '/posts/:id',
    name: 'Post',
    props: true,
    component: () => import(/* webpackChunkName: "posts" */ '../views/posts/components/single-post.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
