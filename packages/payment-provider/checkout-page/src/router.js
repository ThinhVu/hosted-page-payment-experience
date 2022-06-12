import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './pages/HomePage'
import MessageBaseCheckoutPage from './pages/MessageBaseCheckoutPage'
import MessageBaseBroadCastEventReceiver from '@/pages/MessageBaseBroadCastEventReceiver';
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
      name: 'message-base-broadcast-event-receiver',
      path: '/message-base-broadcast-event-receiver',
      component: MessageBaseBroadCastEventReceiver
    },
    {
      name: 'webhook-base',
      path: '/webhook-base',
      component: WebhookBaseCheckoutPage
    }
  ],
}, { default: '/' })

export default router
