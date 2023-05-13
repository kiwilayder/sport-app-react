import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTrening, updateDayProgress, updateMaxValue } from "../store/userTreningSlice";
import { treningFakeAPI } from "../API/fakeAPI";

export const setLocalMaxValue = createAsyncThunk(
   "userTrening/setLocalUser",
   async (treningData, { dispatch, getState }) => {
      const { userTreningData } = getState();
      await treningFakeAPI.setTrening(treningData.type, {
         ...userTreningData[treningData.type],
         ...treningData,
         dayProgress: 0,
      });
      dispatch(updateMaxValue({ ...treningData }));
   }
);

export const setLocalDayProgress = createAsyncThunk(
   "userTrening/setLocalDayProgress",
   async (dataTrening, { dispatch, getState }) => {
      dispatch(updateDayProgress({ ...dataTrening }));
      const { userTreningData } = getState();
      await treningFakeAPI.setTrening(dataTrening.type, userTreningData[dataTrening.type]);
   }
);

export const getDataTrening = createAsyncThunk("user/getDataTrening", async (type, { dispatch }) => {
   const treningData = await treningFakeAPI.getTrening(type);
   if (treningData) {
      dispatch(setTrening({ ...treningData, type }));
   }
});
