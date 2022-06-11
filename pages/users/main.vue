<template>
  <div>
    <h6>user component 불러온다</h6>
    <Users />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Users from "~/components/users/Users.vue";

export default Vue.extend({
  name: "main_",
  components: {
    Users
  }
})
</script>

<style scoped>

</style>
