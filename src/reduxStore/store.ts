import { configureStore } from "@reduxjs/toolkit";
import { testSlice, userLoginSlice } from "./sliceActions";

// 🔹 외부 stroe - api data redux
export const store = configureStore({
  reducer: { 
    storeTest: testSlice.reducer, // 테스트 확인용
    storeUserLogin: userLoginSlice.reducer, // 유저정보
  },
  devTools:true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const { actionTest } = testSlice.actions;
export const { actionUserCreate, actionUserLogin, actionUserLogout } = userLoginSlice.actions;