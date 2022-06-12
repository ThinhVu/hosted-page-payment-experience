<template>
  <div>
    <h2>Message Base Checkout Page OF PAYMENT SERVICE</h2>
    <the-order/>
    <div style="display: flex; align-items: center; justify-content: center">
      <button @click="cancel">Cancel</button>
      <button @click="pay">Pay Now</button>
    </div>
  </div>
</template>
<script setup>
import {useRouter} from 'vue-router';
import TheOrder from '@/components/TheOrder';
const showInIframe = window.parent !== window;
const router = useRouter();
const paymentId = router.currentRoute.value.query['payment-id'];
const payChannel = `payment-${paymentId}`

const cancel = () => {
  if (showInIframe) {
    console.log(`window.postMessage to ${payChannel}:cancelled`)
    window.parent.postMessage(`${payChannel}:cancelled`, '*')
  } else {
    console.log(`Broadcast to ${payChannel}`, 'cancelled')
    const bc = new BroadcastChannel(payChannel);
    bc.postMessage('cancelled');
    setTimeout(() => {
      bc.close();
      window.close();
    }, 500);
  }
}

const pay = () => {
  if (showInIframe) {
    console.log(`window.postMessage to ${payChannel}:purchased`)
    window.parent.postMessage(`${payChannel}:purchased`, '*');
  } else {
    console.log(`Broadcast to ${payChannel}`, 'purchased')
    const bc = new BroadcastChannel(payChannel);
    bc.postMessage('purchased');
    setTimeout(() => {
      bc.close();
      window.close();
    }, 500);
  }
}
</script>
