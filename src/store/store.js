import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userTreningSlice from "./userTreningSlice";

export const store = configureStore({
   reducer: {
      userData: userSlice,
      userTreningData: userTreningSlice,
   },
});
