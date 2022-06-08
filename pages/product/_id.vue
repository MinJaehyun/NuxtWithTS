<template>
  <div>
    <h1>{{ $route.params.id }}: 상세 페이지</h1>
    <p class="test-css">{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <img :src="product.imageUrl" alt="">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { fetchProductById } from "~/api";

export default Vue.extend({
  name: '',
  async asyncData({ params }) {
    // console.log(params.id);
    const id = params.id
    const response = await fetchProductById(id);
    // console.log('response: ', response);
    // console.log(response.data);
    const product = response.data
    return { product }
  }
})
</script>

<style scoped></style>
<!--
1. asyncData 는 this 사용할 수 없다.
2. this 대신 인자로 { params } 를 넣는다.

-->
