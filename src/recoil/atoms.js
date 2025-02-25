import { atom } from 'recoil';

// recoil - UI 관련 값 사용

// header 높이
export const stateHeaderH = atom({
  key: 'headerHeight',  // 고유 키
  default: 55,     // 기본값
});

// 필터 상태 예시
export const filterState = atom({
  key: 'filterState',
  default: '',
});
