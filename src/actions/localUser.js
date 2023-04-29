import { createAsyncThunk } from "@reduxjs/toolkit";
import { asyncLocalStorage } from "../helpers/asyncLocalStorage";
import { addUser } from "../store/userSlice";

export const setLocalUser = createAsyncThunk("user/setLocalUser", async (user, { dispatch }) => {
   await asyncLocalStorage.setItem("user", user);
   dispatch(addUser(user));
});
