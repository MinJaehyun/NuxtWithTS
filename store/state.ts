export const state = () => ({
  cartItems: [],
})

// 상단에 정의한 객체 구조의 state 를 RootState 타입 변수로 선언.
export type RootState = typeof state;
