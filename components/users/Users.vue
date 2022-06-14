<template>
  <div>
    <h1>user list 출력하기</h1>
<!--    <p>{{ $store.state.usersData }}</p>-->
<!--    <p>{{ $store.getters.getUsername }}</p>-->
    {{ childGetUsername }}
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
  mounted() {
    console.log('this.$store : ', this.$store);

    // console.log('mounted: ', this.$store.getters.getUsername)
  },
  computed: {
    childGetUsername() {
      // console.log(this.$store)
      // console.log('test: ', this.$store.getters.getUsername);
      return this.$store.getters.getUsername;
    },
  },
})
</script>

<style scoped>

</style>
