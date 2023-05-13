import { createSlice } from "@reduxjs/toolkit";

const userTreningSlice = createSlice({
   name: "userTrening",
   initialState: {
      userId: null,
      pushUps: {
         maxValue: null,
         dayProgress: null,
         statProgress: [
            {
               date: "10.05.2023",
               sumRepeat: 10,
            },
            {
               date: "11.05.2023",
               sumRepeat: 15,
            },
         ],
      },
   },
   reducers: {
      setTrening(state, { payload: treningData }) {
         state[treningData.type].maxValue = treningData.maxValue;
         state[treningData.type].dayProgress = treningData.dayProgress;
         state[treningData.type].statProgress = treningData.statProgress;
      },
      updateMaxValue(state, action) {
         state[action.payload.type].maxValue = action.payload.maxValue;
         state[action.payload.type].dayProgress = 0;
      },
      updateDayProgress(state, { payload }) {
         state[payload.type].dayProgress += 1;
         state[payload.type].statProgress.push({
            date: payload.todayDate,
            sumRepeat: payload.sumRepeat,
         });
      },
   },
});

export const { updateMaxValue, updateDayProgress, setTrening } = userTreningSlice.actions;
export default userTreningSlice.reducer;
