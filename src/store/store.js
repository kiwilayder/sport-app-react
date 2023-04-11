import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userTraningSlice from "./userTraningSlice";

export const store = configureStore({
   reducer: {
      userData: userSlice,
      userTraningData: userTraningSlice,
   },
});
