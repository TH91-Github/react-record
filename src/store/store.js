import { configureStore, createSlice } from '@reduxjs/toolkit'

// Router location 진행 예정.
const locationTest = createSlice({
  name : 'location',
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
    locationTest : locationTest.reducer,
  }
}) 

export const { changeLocation } = locationTest.actions