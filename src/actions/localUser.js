import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser, setUserCategory } from "../store/userSlice";
import { userFakeAPI } from "../API/fakeAPI";

export const setUser = createAsyncThunk("user/setUser", async (user, { dispatch }) => {
   await userFakeAPI.setUser(user);
   dispatch(addUser(user));
});

export const getUser = createAsyncThunk("user/getUser", async (_, { dispatch }) => {
   const user = await userFakeAPI.getUser();
   debugger;
   dispatch(addUser(user));
});

export const setCategory = createAsyncThunk("user/setCategory", async (category, { dispatch, getState }) => {
   const { userData } = getState();
   await userFakeAPI.setUser({ ...userData, category });
   dispatch(setUserCategory(category));
});
