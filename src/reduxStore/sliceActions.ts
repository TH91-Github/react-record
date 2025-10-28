import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataType, UserStoreType } from "types/auth/auth";

// 📍테스트용 
const testState = {
  title: 'UX',
  state: false
};
export const testSlice = createSlice({
  name: "Test Store",
  initialState: testState,
  reducers: {
    actionTest(state, propsAction){
      return { ...state, ...propsAction.payload };
    },
  },
})

// 📍 Login user 정보 
const userStoreState: UserStoreType = {
  isLoading:false,
  isLogin: false,
  user: null,
  loginTime: 0,
};

export const userLoginSlice = createSlice({
  name: "user login",
  initialState: userStoreState,
  reducers: {
    // 구글 신규 가입 시 바로 로그아웃 되는 문제 보안 
    actionUserCreate(state, action: PayloadAction<{ isLoading: boolean }>) {
      return {
        ...state,
        isLoading: action.payload.isLoading
      };
    },
    actionUserLogin(state, action: PayloadAction<{ user: UserDataType }>) {
      return {
        ...state,
        isLogin: true,
        user: action.payload.user,
        loginTime: Date.now(),
      };
    },
    actionUserLogout() {
      return {isLoading:false, isLogin:false, user:null, loginTime:0 };
    },
  },
});