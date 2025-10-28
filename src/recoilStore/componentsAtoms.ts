// 🔹 컴포넌트 관련 recoil
import { atom } from "recoil";
import { AlertStateType, ToastStateType } from "types/recoil/recoil";

// alert 팝업 전역용
export const stateAlert = atom<AlertStateType>({
  key: 'alertModal',
  default: {
    isActive: false,
    title:'타이틀 입력',
    desc:'메시지를 입력하세요.',
    autoCloseSecond: 0,
    onClose: undefined,
  },
});

export const toastState = atom<ToastStateType>({
  key: 'toastState',
  default: {
    toasts: [],
    nextId: 1,
  },
});