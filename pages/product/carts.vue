<template>
  <div>
    <h1>장바구니</h1>
    <ul>
      <!-- 아래 $store.state.cartItems 대신 연산 처리한 결과인 getters 를 가져온다. -->
      <li v-for="(item, index) in $store.state.cartItems" :key="index">
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <img :src="item.imageUrl" alt="item.name" style="width: 100px; height: 100px">
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Carts',
  // 방법1. asyncData
  asyncData({ store }: any) {
    store.dispatch('FETCH_CART_ITEMS')
  },
  // 방법2. fetch
  // async fetch() {
  //   await this.$store.dispatch('FETCH_CART_ITEMS')
  // }
})
</script>
<style scoped></style>
