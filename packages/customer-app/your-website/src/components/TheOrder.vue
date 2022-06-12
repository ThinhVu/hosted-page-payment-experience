<template>
  <div>
    <div>
      <h3>Customer info</h3>
      <p>{{customer.name}}</p>
      <p>{{customer.address}}</p>
    </div>
    <div>
      <h3>Order info</h3>
      <div>
        <div v-for="item in order.items" :key="item.name">
          <div class="item">
            <span>{{ item.quantity }}x {{item.name}}</span>
            <span>{{ item.quantity * item.price }}</span>
          </div>
          <div class="line"></div>
          <div class="item">
            <span>Subtotal:</span>
            <span>{{subTotal}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const customer = {
  name: "Thinh Vu",
  address: "12, Lorem ispum, Lorem ispum, K7N 8XY, Earth"
}
const order = {
  createdDate: new Date(),
  items: [
    { name: 'Item A', price: 10, quantity: 10 },
    { name: 'Item B', price: 10, quantity: 10 },
    { name: 'Item C', price: 10, quantity: 10 },
    { name: 'Item D', price: 10, quantity: 10 },
  ],
}
const subTotal = order.items.map(item => item.quantity * item.price).reduce((out, itemPrice) => out += itemPrice, 0)
</script>
<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
