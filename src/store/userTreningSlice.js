import { createSlice } from "@reduxjs/toolkit";

const userTreningSlice = createSlice({
   name: "userTrening",
   initialState: {
      userId: null,
      pushUps: {
         maxValue: null,
         dayProgress: null,
      },
   },
   reducers: {
      updateMaxValue(state, action) {
         state[action.payload.type].maxValue = action.payload.maxValue;
         state[action.payload.type].dayProgress = action.payload.dayProgress;
      },
      updateDayProgress(state, action) {
         state[action.payload.type].dayProgress += action.payload.day;
      },
   },
});

export const { updateMaxValue, updateDayProgress, clearDayProgress } = userTreningSlice.actions;
export default userTreningSlice.reducer;
