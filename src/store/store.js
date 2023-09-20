import { configureStore, createSlice } from '@reduxjs/toolkit'

const windowW = createSlice({
  name : 'mobile check',
  initialState : "zz?",
  reducers: {
    changeLocation(state, propsName){
      return state = propsName.payload;
    }
  }
})
const mobileChk = createSlice({
  name : 'mobile check',
  initialState : "TEST",
  reducers: {
    changeLocation(state, propsName){
      console.log(state)
      return state = propsName.payload;
    }
  }
})
export default configureStore({
  reducer: { 
    mobileChk : mobileChk.reducer,
    windowW : windowW.reducer
  }
}) 

export const { changeLocation } = mobileChk.actions