<template>
  <div>
    <h1>user list 출력하기</h1>
    <p>{{ userData }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios';

export default Vue.extend({
  name: "beforeUsers",
  data(){
    return {
      userData: [],
    }
  },
  created() {
    this.loadUserData()
  },
  methods: {
    loadUserData(){
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        // console.log(res.data);
        this.userData = res.data;
      })
    } ,
  },
})
</script>

<style scoped>

</style>
