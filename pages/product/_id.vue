<template>
  <div>
    <h1>{{ $route.params.id }}: 상세 페이지</h1>
    <p class="test-css">{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <p><button @click="setCartItems">장바구니 담기</button></p>
    <img :src="product.imageUrl" alt="">
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue'
import {createCartItem, fetchProductById} from "~/api";
import { MetaInfo } from 'vue-meta';

export default Vue.extend({
  name: '',
  data() {
    return {
      product: '',
    }
  },
  // life cycle - true, false 처리 시 화면 이해 하는지
  validate(ctx: Context): Promise<boolean> | boolean {
    // console.log('ctx :', ctx)
    return true;
  },
  asyncData(context) {
    // console.log(context); // $axios, $config, 등등 사용하기
    const id = context.params.id
    // const response = fetchProductById(id);
    // console.log('response: ', response);
    // console.log(response.data);
    // const product = response.data
    // return { product }
    return fetchProductById(id).then((response) => {
      const {data} = response || {};
      // console.log(data);  // 한개의 객체
      return {product: data};
    })
  },
  created() {
    console.log(this.product);

  },
  // head: {
  //   title: this.product ,
  //   meta: [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: '페이지 상세 설명'
  //     },
  //   ],
  // },
  head(): MetaInfo {
    // console.log(this.product);
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.name,
        },
      ],
    }
  },
  methods: {
    setCartItems() {
      // console.log(this.product);  // object
      // 현재 상품을 서버에 담는다.
      createCartItem(this.product).then(() => {
        this.$store.dispatch('PUSH_ITEM', this.product)
        this.$router.push({name: 'product-carts'});
      })
      // console.log(response.data);
      // response.data 한개를 카트에 담는다.
      // const response = await fetchCartItem();
      // console.log(response.data);
    },
  },
})
</script>

<style scoped></style>
<!-- TS
head 에서 인식하지 못하는 this 를
import { MetaInfo } from 'vue-meta';
head(): MetaInfo {} 설정하여 해결
-->
