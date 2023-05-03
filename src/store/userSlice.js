import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {
      userName: "",
      dateBirth: null,
      gender: null,
      userHeight: null,
      userWeight: null,
      category: null,
   },
   reducers: {
      updateHeight(state, action) {
         state.userHeight = action.payload.valueHeight;
      },
      updateWeight(state, action) {
         state.userWeight = action.payload.valueWeight;
      },
      addUser(state, { payload }) {
         state.userName = payload.userName;
         state.dateBirth = payload.dateBirth;
         state.gender = payload.gender;
         state.userHeight = payload.userHeight;
         state.userWeight = payload.userWeight;
      },
      setUserCategory(state, action) {
         state.category = action.payload;
      },
   },
});

export const { addUser, updateHeight, updateWeight, setUserCategory } = userSlice.actions;
export default userSlice.reducer;
