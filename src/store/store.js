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

const mobileChk = createSlice({ // mobile 체크
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