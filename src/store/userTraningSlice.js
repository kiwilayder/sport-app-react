import { createSlice } from "@reduxjs/toolkit";

const userTraningSlice = createSlice({
   name: "userTraning",
   initialState: {
      userId: null,
      pushUps: {
         maxValue: 100,
         dayProgress: 0,
      },
   },
   reducers: {
      updateMaxValue(state, action) {
         state[action.payload.type].maxValue = action.payload.value;
      },
      updateDayProgress(state, action) {
         state[action.payload.type].dayProgress += action.payload.day;
      },
   },
});

export const { updateMaxValue, updateDayProgress } = userTraningSlice.actions;
export default userTraningSlice.reducer;
