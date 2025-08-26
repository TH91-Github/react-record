import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataType, UserStoreType } from "types/auth";

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
  isLogin: false,
  user: null,
  loginTime: 0,
};

export const userLoginSlice = createSlice({
  name: "user login",
  initialState: userStoreState,
  reducers: {
    actionUserLogin(state, action: PayloadAction<{ user: UserDataType }>) {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        loginTime: Date.now(),
      };
    },
    actionUserLogout() {
      const test = userStoreState;
      return {isLogin:false,user:null,loginTime:0 };
    },
  },
});