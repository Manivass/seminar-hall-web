import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import hallSlice from "./hallSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    hall: hallSlice,
  },
});

export default store;
