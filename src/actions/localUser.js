import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser, setUserCategory, updateHeight, updateWeight } from "../store/userSlice";
import { userFakeAPI } from "../API/fakeAPI";

export const setUser = createAsyncThunk("user/setUser", async (user, { dispatch }) => {
   await userFakeAPI.setUser(user);
   dispatch(addUser(user));
});

export const getUser = createAsyncThunk("user/getUser", async (_, { dispatch }) => {
   const user = await userFakeAPI.getUser();

   dispatch(addUser(user));
});

export const setCategory = createAsyncThunk("user/setCategory", async (category, { dispatch, getState }) => {
   const { userData } = getState();
   await userFakeAPI.setUser({ ...userData, category });
   dispatch(setUserCategory(category));
});

export const updateUserHeight = createAsyncThunk(
   "userTrening/updateUserHeight",
   async (valueHeight, { dispatch }) => {
      const user = { ...(await userFakeAPI.getUser()), userHeight: valueHeight };
      await userFakeAPI.setUser(user);
      dispatch(updateHeight({ valueHeight }));
   }
);

export const updateUserWeight = createAsyncThunk(
   "userTrening/updateUserWeight",
   async (valueWeight, { dispatch }) => {
      const user = { ...(await userFakeAPI.getUser()), userWeight: valueWeight };
      await userFakeAPI.setUser(user);
      dispatch(updateWeight({ valueWeight }));
   }
);
