<template>
  <div>
    <h2>WebHook Base Checkout Page</h2>
    <the-order/>
    <pay-button use-webhook/>
  </div>
</template>
<script setup>
import TheOrder from '@/components/TheOrder';
import PayButton from '@/components/PayButton';
</script>
