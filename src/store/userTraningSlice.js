import { createSlice } from "@reduxjs/toolkit";

const userTraningSlice = createSlice({
   name: "userTraning",
   initialState: {
      userId: null,
      initialPushUps: null,
   },
   reducers: {
      addInitial(state, action) {
         state.initialPushUps = action.payload.value;
      },
   },
});

export const { addInitial } = userTraningSlice.actions;
export default userTraningSlice.reducer;
