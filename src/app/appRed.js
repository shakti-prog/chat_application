import { createSlice } from "@reduxjs/toolkit";


export const appReducer = createSlice(
 {
  name:'app',
  initialState:{
      roomId:null
  },
  reducers:{
      enterRoom:(state,action)=>{
          state.roomId = action.payload.roomId;
      }
  }

 }
)

export const {enterRoom} = appReducer.actions;

export const selectRoomId = state => state.app.roomId;

export default appReducer.reducer;