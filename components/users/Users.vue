<template>
  <div>
    <h1>user list 출력하기</h1>
    <p>{{ $store.state.usersData }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios';

export default Vue.extend({
  name: "Users",
  // FIXME?: asyncData
  created() {
    this.loadUserData()
  },
  methods: {
    loadUserData(){
      this.$store.dispatch('LOAD_USER_DATA')
    } ,
  },
})
</script>

<style scoped>

</style>
