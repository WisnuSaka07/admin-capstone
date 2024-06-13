import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Traffic from '../components/Traffic.vue'
import Feedback from '../components/Feedback.vue'
import Manage from '../components/Manage.vue'
import EditNode from '../components/EditNode.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/traffic',
    name: 'Traffic',
    component: Traffic,
    meta: { title: 'Traffic' }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
    meta: { title: 'Feedback' }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    meta: { title: 'Manage' }
  },
  {
    path: '/edit/:nodeId',
    name: 'EditNode',
    component: EditNode,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
