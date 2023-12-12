// DOM 레퍼런스
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');
// 액션 이름
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });
// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

/** < 리듀서 함수 정의 >
 *  - 리듀서는 변화를 일으키는 함수이다.
 *  - 리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜 주어야 한다.
 *  - state가 undefined일 때는 initialState를 기본값으로 사용
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해주어야 한다.
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = legacy_createStore(reducer);

// 스토어 내장 함수 사용
// (1) render
const render = () => {
  const state = store.getState();
  if (state.toggle) divToggle.classList.add('active');
  else divToggle.classList.remove('active');
  counter.innerText = state.counter;
};

/** < 구독하기 >
 *  - 스토어의 상태가 바뀔 때마다 render 함수가 호출되도록 하기
 *  - 내장함수 subscribe 사용
 */
render();
store.subscribe(render);

// 디스패치 (액션 발생시키기)
divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
  store.dispatch(decrease());
};
