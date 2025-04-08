import { colors } from 'assets/style/variables';
import { atom } from 'recoil';

//  📍recoil - UI 관련 값 사용

// 메인 컬러 - 사용자 변경하기 위해
export const stateUserColor = atom({
  key:'mainColor', // 고유 키
  default:`${colors.mSlateBlue}`, // 기본값
})

// header 높이
export const stateHeaderHeight = atom({
  key: 'headerHeight',  
  default: 55,     
});

// 필터 상태 예시
export const filterState = atom({
  key: 'filterState',
  default: '',
});
