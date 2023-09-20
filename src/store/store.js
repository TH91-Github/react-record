import { configureStore, createSlice } from '@reduxjs/toolkit'

// Router location 진행 예정.
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
  }
}) 

export const { changeLocation } = mobileChk.actions