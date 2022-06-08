<template>
  <div>
    <h1>{{ $route.name }} 페이지 입니다.</h1>
    <router-link to="/" style="border: 1px solid dodgerblue">move to Home page</router-link>
    <router-link to="/product/" style="border: 1px solid dodgerblue">move to product index page</router-link>
    <router-link to="/product/main" style="border: 1px solid dodgerblue">move to product main page</router-link>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: '',
  // created() {
  //   console.log(this.$route);
  // }
})
</script>

<style scoped></style>
<!-- <Nuxt> 태그를 하단에 위치 시키는게 특징 -->
