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
      setTrening(state, action) {
         state[action.payload.type].maxValue = action.payload.maxValue;
         state[action.payload.type].dayProgress = action.payload.dayProgress;
      },
      updateMaxValue(state, action) {
         state[action.payload.type].maxValue = action.payload.maxValue;
         state[action.payload.type].dayProgress = 0;
      },
      updateDayProgress(state, action) {
         state[action.payload].dayProgress += 1;
      },
   },
});

export const { updateMaxValue, updateDayProgress, setTrening } = userTreningSlice.actions;
export default userTreningSlice.reducer;
