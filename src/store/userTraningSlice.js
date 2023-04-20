import { createSlice } from "@reduxjs/toolkit";

const userTraningSlice = createSlice({
   name: "userTraning",
   initialState: {
      userId: null,
      pushUps: {
         maxValue: null,
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
      clearDayProgress(state, action) {
         state[action.payload.type].dayProgress = 0;
      },
   },
});

export const { updateMaxValue, updateDayProgress, clearDayProgress } = userTraningSlice.actions;
export default userTraningSlice.reducer;
