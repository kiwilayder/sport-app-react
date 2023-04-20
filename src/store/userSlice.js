import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {
      userName: "kiwilay",
      mail: null,
      password: null,
      dateBirth: null,
      gender: null,
      userHeight: 200,
      userWeight: 90,
      category: null,
   },
   reducers: {
      updateHeight(state, action) {
         state.userHeight = action.payload.valueHeight;
      },
      updateWeight(state, action) {
         state.userWeight = action.payload.valueWeight;
      },
      addUser(state, action) {
         state.userName = action.payload.userName;
         state.mail = action.payload.mail;
         state.password = action.payload.password;
         state.dateBirth = action.payload.dateBirth;
         state.gender = action.payload.gender;
         state.userHeight = action.payload.userHeight;
         state.userWeight = action.payload.userWeight;
      },
      addCategory(state, action) {
         state.category = action.payload.category;
      },
   },
});

export const { addUser, addCategory, updateHeight, updateWeight } = userSlice.actions;
export default userSlice.reducer;
