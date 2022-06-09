import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProductById(id: string) {
  return instance.get(`/products/${id}`)
}

// 설정하고 오면 string 지정될 듯
function fetchProductByyKeyword(keyword: string) {
  return instance.get(`/products?name_like=${keyword}`)
}

// 장바구니에 각 상품을 서버에 담는다
function createCartItem(cartItem: any) {
  return instance.post('/carts', cartItem)
}

function fetchCartItem() {
  return instance.get('/carts')
}

export { fetchProductById, fetchProductByyKeyword, createCartItem, fetchCartItem }
