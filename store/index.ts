import {fetchCartItem} from "~/api";
import {state} from './state'

const store = {
  state: state
}

export const mutations = {
  // vuex TS 적용 방법 미진행이므로, any 처리하고 nuxt 완료 후 ts 진행하기
  async setCartItems(state: any, data: any) {
    // console.log('state:', state, data)
    const newItem: any = {
      ...data,
      imageUrl: `${data.imageUrl}?random=${Math.random()}`
    }
    // FIXME: 에러
    state.cartItems.push(newItem);
  },
  setAllCart(state: any, data: any) {
    state.cartItems = data;
  }
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
  }
}
