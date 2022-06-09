// import axios from "axios";
//
// export const state = () => ({
//   user: {},
//   cartItems: [],
//   count: 0,
// })
//
// // 상단 state 를 첫 번째 인자로 사용하며, 요청받은 setUser 에 두 번째 인자를 받은 값으로 처리한다.
// export const mutations = {
//   setUser(state: any, user: any) {
//     state.user = user;
//   }
// }
//
// // axios 는 nuxt.config.js 에서 처리한게 아니었나?
// export const actions = {
//   async fetchUser(context: any) {
//     // console.log(context);
//     const response = await axios.get('users/1');  // :3000/product/id
//     context.commit('setUser', response.data)
//   }
// }
