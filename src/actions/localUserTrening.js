import { createAsyncThunk } from "@reduxjs/toolkit";
import { asyncLocalStorage } from "../helpers/asyncLocalStorage";
import { updateDayProgress, updateMaxValue } from "../store/userTreningSlice";

export const setLocalMaxValue = createAsyncThunk(
   "user/setLocalMaxValue",
   async (treningData, { dispatch }) => {
      const userDataTrening = { ...treningData, dayProgress: 0 };
      await asyncLocalStorage.setItem(`${userTreningData.type}`, userDataTrening);
      dispatch(updateMaxValue({ ...userDataTrening }));
   }
);

export const setLocalDayProgress = createAsyncThunk(
   "user/setLocalDayProgress",
   async (treningData, { dispatch }) => {
      const userDataTrening = await asyncLocalStorage.getItem(`${treningData.type}`);

      await asyncLocalStorage.setItem(`${userTreningData.type}`, {
         ...userDataTrening,
         dayProgress: ++treningData.dayProgress,
      });
      dispatch(updateDayProgress({ ...userTreningData }));
   }
);

export const getDataTrening = createAsyncThunk("user/getDataTrening", async (typeTrening, { dispatch }) => {
   const userDataTrening = await asyncLocalStorage.getItem(typeTrening);
   dispatch(updateMaxValue({ ...userDataTrening }));
});
