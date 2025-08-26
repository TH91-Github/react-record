import { atom } from 'recoil';

//  📍recoil - UI 관련 값 사용
// 작업 환경 및 관리자 모드
export const stateDevMode= atom({
  key: 'dev mode',  
  default: false,     
});

// header 높이
export const stateHeaderHeight = atom({
  key: 'headerHeight',  
  default: 55,     
});

// focus 회귀용
export const statePrevFocus = atom<HTMLElement | null>({
  key: 'prevFocus',
  default: null,
});

// TEST - 필터 상태 예시
export const filterState = atom({
  key: 'filterState',
  default: '',
});
