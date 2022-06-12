<template>
  <div style="background-color: yellow">
    <h2>Message Base Checkout Page OF YOUR SITE</h2>
    <the-order/>
    <div style="display: flex; align-items: center; gap: 10px;">
      <pay-button use-message/>
      <pay-button use-message use-iframe/>
    </div>
  </div>
</template>
<script setup>
import TheOrder from '@/components/TheOrder';
import PayButton from '@/components/PayButton';
</script>
