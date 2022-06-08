<template>
  <div>
    Logo 컴포넌트를 가져왔습니다.
    <p>Logo 컴포넌트에서 asyncData 를 사용하는 방법을 학습 {{ loadData[0] }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: '',
  props: {
    loadData: Array
  },
})
</script>

<style scoped></style>
<!-- component 에서 asyncData 사용하는 방법?

-->
