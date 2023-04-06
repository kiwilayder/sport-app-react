import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {
      user: {
         userName: null,
         mail: null,
         password: null,
         dateBirth: null,
         gender: null,
         sliderHeight: null,
         sliderWeight: null,
         category: null,
      },
   },
   reducers: {
      updateHeight(state, action) {
         state.user.sliderHeight = action.payload.valueHeight;
      },
      updateWeight(state, action) {
         state.user.sliderWeight = action.payload.valueWeight;
      },
      addUser(state, action) {
         state.user = action.payload.user;
      },
      addCategory(state, action) {
         state.user.category = action.payload.category;
      },
   },
});

export const { addUser, addCategory, updateHeight, updateWeight } = userSlice.actions;
export default userSlice.reducer;
