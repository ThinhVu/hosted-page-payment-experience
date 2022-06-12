import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './pages/HomePage'
import MessageBaseCheckoutPage from './pages/MessageBaseCheckoutPage'
import WebhookBaseCheckoutPage from './pages/WebhookBaseCheckoutPage'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomePage
    },
    {
      name: 'message-base',
      path: '/message-base',
      component: MessageBaseCheckoutPage
    },
    {
      name: 'webhook-base',
      path: '/webhook-base',
      component: WebhookBaseCheckoutPage
    }
  ],
}, { default: '/' })

export default router
