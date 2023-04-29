import { createAsyncThunk } from "@reduxjs/toolkit";
import { asyncLocalStorage } from "../helpers/asyncLocalStorage";
import { updateDayProgress, updateMaxValue } from "../store/userTreningSlice";

export const setLocalMaxValue = createAsyncThunk("user/setLocalUser", async (treningData, { dispatch }) => {
   const userTreningData = { ...treningData, dayProgress: 0 };
   await asyncLocalStorage.setItem(`${userTreningData.type}`, userTreningData);
   dispatch(updateMaxValue({ ...userTreningData }));
});

export const setLocalDayProgress = createAsyncThunk(
   "user/setLocalDayProgress",
   async (userTreningData, { dispatch }) => {
      const dataTrening = await asyncLocalStorage.getItem(`${userTreningData.type}`);

      await asyncLocalStorage.setItem(`${userTreningData.type}`, {
         ...dataTrening,
         dayProgress: ++dataTrening.dayProgress,
      });
      dispatch(updateDayProgress({ ...userTreningData }));
   }
);

export const getDataTrening = createAsyncThunk("user/getDataTrening", async (typeTrening, { dispatch }) => {
   const userTreningData = await asyncLocalStorage.getItem(typeTrening);
   dispatch(updateMaxValue({ ...userTreningData }));
});
