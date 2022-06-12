<template>
  <div>
    <h2>WebHook Base Checkout Page OF PAYMENT SERVICE</h2>
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
const router = useRouter();
const paymentId = router.currentRoute.value.query['payment-id'];
const payChannel = `payment-${paymentId}`

// With tradition webhook, the user cancel, pay request will create a request to the payment service server
// or directly to customer server
const cancel = () => {
  const url = `/web-hook-response?pay-channel=${payChannel}&result=cancelled`
  console.log('fetch', url)
  fetch(url).then(() => window.close())
}

const pay = () => {
  const url = '/web-hook-response?pay-channel=${payChannel}&result=purchased'
  fetch(url).then(() => window.close())
}
</script>
