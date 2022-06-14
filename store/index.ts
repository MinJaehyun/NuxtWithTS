import {fetchCartItem} from "~/api";
import axios from "axios";
import {generateState} from "~/store/generateState";

export const state = generateState();

export const getters = {
  getUsername(state: any) {
    // console.log('state: ', Object.keys(state))
    // console.log('getters:', state.usersData)
    return state.usersData
  },
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
    // console.log('state : ', JSON.stringify(state));
    state.usersData = data;
  },
}

export const actions = {
  FETCH_CART_ITEMS(context: any){
    // 서버에 목록을 가져와서, mutations 에서 변경할 것이다.
    fetchCartItem().then((res) => {
      // console.log('res:', res.data);
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
