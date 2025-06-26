// 🔹 사용자 정보 관련

import { colors } from "assets/style/variables";
import { atom } from "recoil";

// 메인 컬러 - 사용자 변경하기 위해
export const stateUserColor = atom({
  key:'mainColor', // 고유 키
  default:`${colors.mSlateBlue}`, // 기본값
})

// 중복 검사 완료된 이메일 목록 (중복된 이메일 저장)
export const stateDuplicateEmail = atom<string[]>({
  key: 'stateDuplicateEmail',
  default: [],
});

// 중복 검사 완료된 간편아이디 목록 (중복된 간편 ID 저장)
export const stateDuplicateSimpleID = atom<string[]>({
  key: 'stateDuplicateSimpleID',
  default: [],
});