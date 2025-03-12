import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "./sliceActions";

export const store = configureStore({
  reducer: { 
    storeTest: testSlice.reducer, // 테스트 확인용
  },
  devTools:true,
})

export const { actionTest } = testSlice.actions;