import { createRouter, createWebHistory } from 'vue-router'
import { session } from './store/session'

const routes = [
  {
    path: '/records/create',
    name: 'NewRecord',
    component: () => import('./views/RecordView.vue')
  },
  {
    path: '/unlock',
    name: 'Unlock',
    component: () => import('./views/Unlock.vue')
  },
  {
    path: '/',
    name: 'Records',
    component: () => import('./views/Records.vue')
  },
  {
    path: '/records/:id',
    name: 'Record',
    component: () => import('./views/RecordView.vue')
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import('./views/Tags.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('./views/Tools.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('./views/Help.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && session.isLocked) {
    next('/unlock')
  } else {
    next()
  }
})

export default router
