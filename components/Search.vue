<template>
  <div>
    <input type="text" style="margin: 10px 12px" placeholder="search" @change="onClickInputSearch">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: '',
  props: {
    inputSearch: String
  },
  methods: {
    onClickInputSearch(e: { target: { value: any; }; }){
      this.$emit('onClickInputSearch', e.target.value)
    },
  }
})
</script>

<style scoped></style>
