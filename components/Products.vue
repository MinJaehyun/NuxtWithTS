<template>
  <div>
    <ul v-for="(item, index) in loadData" :key="index">
      <li class="test-css">{{ item.name }}</li>
      <img @click="moveToDetailPage(index)" class="product-image" :src="item.imageUrl" alt="item.name">
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Products',
  props: {
    loadData: Array
  },
  methods: {
    moveToDetailPage(index: number){
      // console.log(index);
      this.$router.push(`${index}`)
    },
  },
})
</script>

<style scoped>
.product-image {
  width: 200px;
  height: 100px;
  cursor: pointer;
}
</style>
<!-- component 에서 asyncData 사용하는 방법?
-->
