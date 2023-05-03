import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTrening, updateDayProgress, updateMaxValue } from "../store/userTreningSlice";
import { treningFakeAPI } from "../API/fakeAPI";

export const setLocalMaxValue = createAsyncThunk("user/setLocalUser", async (treningData, { dispatch }) => {
   await treningFakeAPI.setTrening(treningData.type, { ...treningData, dayProgress: 0 });
   dispatch(updateMaxValue({ ...treningData }));
});

export const setLocalDayProgress = createAsyncThunk(
   "user/setLocalDayProgress",
   async (typeTrening, { dispatch, getState }) => {
      dispatch(updateDayProgress(typeTrening));
      const { userTreningData } = getState();
      await treningFakeAPI.setTrening(typeTrening, userTreningData[typeTrening]);
   }
);

export const getDataTrening = createAsyncThunk("user/getDataTrening", async (type, { dispatch }) => {
   const treningData = await treningFakeAPI.getTrening(type);

   dispatch(setTrening({ ...treningData, type }));
});
