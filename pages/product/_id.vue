<template>
  <div>
    <h1>{{ $route.params.id }}: 상세 페이지</h1>
    <p class="test-css">{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <img :src="product.imageUrl" alt="">
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue'
import { fetchProductById } from "~/api";

export default Vue.extend({
  name: '',
  // life cycle - true, false 처리 시 화면 이해 하는지
  validate(ctx: Context): Promise<boolean> | boolean {
    console.log('ctxss:', ctx)
    return true;
  },
  asyncData(context) {
    console.log(context); // $axios, $config, 등등 사용하기
    const id = context.params.id
    // const response = fetchProductById(id);
    // console.log('response: ', response);
    // console.log(response.data);
    // const product = response.data
    // return { product }
    return fetchProductById(id).then((response) => {
      const {data} = response || {};
      return {product: data};
    })
  }
})
</script>

<style scoped></style>
<!--
asyncData 는 this 사용할 수 없다.
- this 대신 인자로 { params } 를 넣는다.
-->
