// 🔹 사용자 정보 관련

import { colors } from "assets/style/variables";
import { atom } from "recoil";

// 메인 컬러 - 사용자 변경하기 위해
export const stateUserColor = atom({
  key:'mainColor', // 고유 키
  default:`${colors.mSlateBlue}`, // 기본값
})
