## 기존 vue 를 vuex 구조로 변경하기 위한 흐름

### 06월 11일
    1. components/users/Users.vue 의 userData 인 data 를 state 로 만든다
    2. 기존 userData 는 삭제한다
    3. components/users/Users.vue 의  loadUserData 로직은 비동기 함수를 포함하므로
      actions 를 통해 mutations 로 변경한다.
    4. action -> 상수 -> 비동기 함수 -> commit 처리
