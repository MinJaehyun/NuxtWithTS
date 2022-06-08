<template>
  <div>
    <Search :inputSearch="inputSearch" @onClickInputSearch="onClickInputSearch"/>
    <Products :loadData="loadData"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Products from '@/components/Products.vue'
import Search from '@/components/Search.vue'
import axios from 'axios'
import {fetchProductByyKeyword} from "~/api";
interface respondeData {
  id: number,
  imageUrl: string,
  name: string,
  price: string
}
export default Vue.extend({
  name: 'Main',
  data() {
    return {
      inputSearch: '',
      loadData: '',
    }
  },
  // 방법1 적용 시, 아래 사용 한다. 방법2 적용 시, server 에서 data 를 처리하고 보내주므로, data 설정할 필요 없다!
  // data(){
  //   return {
  //     loadData: [],
  //   }
  // },
  components: {
    Products,
    Search
  },
  // 방법1. created axios 요청
  // async created() {
  //   const response = await axios.get('http://localhost:3000/carts')  // server url
  //   // console.log('res: ', response);
  //   this.loadData = response.data;
  // }

  // 방법2. asyncData axios 요청
  async asyncData(){
    // console.log(context);
    const response = await axios.get('http://localhost:3000/products')  // server url, https 아니다.
    // console.log(typeof response.data); // object
    // 반복되는 이미지를 랜덤하게 호출하기
    const loadData = response.data.map((item: respondeData) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    return { loadData: loadData }  // 객체 축약 가능
  },
  methods: {
    async onClickInputSearch(data: string){
      this.inputSearch = data
      // console.log(this.inputSearch);
      const response = await fetchProductByyKeyword(this.inputSearch);
      console.log(response.data); // 3개
      this.loadData = response.data.map((item: respondeData) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }))
    },
  },
})
</script>

<style scoped></style>
<!-- 목표:
1. [] main.vue 생성 후, 즉시 데이터를 가져오기
- axios 와 created 함수 사용하여 처리하면 될 듯
2. async await 처리 전 후 차이점 이해 하는지?
- 처리 전: promise <pending> 상태로 나타내고
- 처리 후: 객체로 나타낸다.
3. created() 와 asyncData() 차이점 아는지?
- created() 사용 시, 깜빡임 현상 발생한다.
- FIXME: asyncData() 사용하면 깜빡임 없는지??
4. asyncData 는 page 폴더 아래에서 사용 지향한다.
- component 에서 사용 가능하며 지양할 뿐이다.
- component 에서 사용하기 위해서 데이터를 내려준다.
5. map 반환
=> ({}) 이면 return 사용 안해도 된다.
=> {} 사용하면 return {} 처리해야 한다.
-->
