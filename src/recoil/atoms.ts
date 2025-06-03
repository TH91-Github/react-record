import { colors } from 'assets/style/variables';
import { atom } from 'recoil';
import { AlertState } from 'types/recoil';

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

// 메인 컬러 - 사용자 변경하기 위해
export const stateUserColor = atom({
  key:'mainColor', // 고유 키
  default:`${colors.mSlateBlue}`, // 기본값
})

// alert 팝업 전역용
export const stateAlert = atom<AlertState>({
  key: 'alertModal',
  default: {
    isActive: false,
    title:'타이틀 입력',
    desc:'메시지를 입력하세요.',
    autoCloseSecond: 0,
    onClose: undefined,
  },
});

// toast 
export const stateToastID = atom({
  key: 'toastId',
  default: 0,
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
