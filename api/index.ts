import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProductById(id: string) {
  return instance.get(`/products/${id}`)
}

function fetchProductByyKeyword(keyword: string) {  // 설정하고 오면 string 지정될 듯
  return instance.get(`/products?name_like=${keyword}`)
}

export { fetchProductById, fetchProductByyKeyword }

// axios.create 검색?
// .create() 메서드를 사용해 사용자 정의 구성을 사용하는 axios 인스턴스를 생성할 수 있습니다.
