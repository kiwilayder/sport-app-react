import { createSlice } from "@reduxjs/toolkit";

const userTraningSlice = createSlice({
   name: "userTraning",
   initialState: {
      userId: null,
      maxPushUps: null,
   },
   reducers: {
      addMaxValue(state, action) {
         state.maxPushUps = action.payload.value;
      },
   },
});

export const { addMaxValue } = userTraningSlice.actions;
export default userTraningSlice.reducer;
