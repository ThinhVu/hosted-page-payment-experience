<template>
  <div></div>
</template>
<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();
const paymentId = router.currentRoute.value.query['payment-id'];
const payChannel = `payment-${paymentId}`

const bc = new BroadcastChannel(`payment-${paymentId}`);
bc.addEventListener('message', ev => {
  if (ev.currentTarget.name === payChannel) {
    const response = `${payChannel}:${ev.data}`;
    console.log('Broadcast receiver: ', response);
    window.parent.postMessage( response, '*');
  }
})
</script>
