import {fetchCartItem} from "~/api";
import {state} from './state'
import axios from "axios";

export const store = {
  state
}

export const mutations = {
  setCartItems(context: any,data: any) {
    const newItem: any = {
      ...data,
      imageUrl: `${data.imageUrl}?random=${Math.random()}`
    }
    context.cartItems.push(newItem);
  },
  setAllCart(state: any, data: any) {
    state.cartItems = data;
  },
  setUserData(state: any, data: any){
    state.usersData = data;
  },
}

export const actions = {
  FETCH_CART_ITEMS(context: any){
    // 서버에 목록을 가져와서, mutations 에서 변경할 것이다.
    fetchCartItem().then((res) => {
      console.log('res:', res.data);
      context.commit('setAllCart', res.data);
    })
  },
  PUSH_ITEM(context: any, item: any) {
    context.commit('setCartItems', item);
  },
  LOAD_USER_DATA(context: any){
    // action -> 상수 -> 비동기 함수 -> commit 처리
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      context.commit('setUserData', res.data);
    })
  },
}
