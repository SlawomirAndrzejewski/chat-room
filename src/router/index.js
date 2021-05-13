import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "../firebase/config"

const requiredAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: "Welcome" })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    next({ name: "Chatroom" })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import('../views/Chatroom.vue'),
    beforeEnter: requiredAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
