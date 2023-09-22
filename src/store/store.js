import { configureStore, createSlice } from '@reduxjs/toolkit'

const windowW = createSlice({
  name : 'window width',
  initialState : "test",
  reducers: {
    changeLocation(state, propsName){
      return state = propsName.payload;
    }
  }
})
const mobileChk = createSlice({
  name : 'mobile check',
  initialState : false,
  reducers: {
    sSetMobileChk(state, propsName){
      console.log(propsName.payload)
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

export const { sSetMobileChk } = mobileChk.actions