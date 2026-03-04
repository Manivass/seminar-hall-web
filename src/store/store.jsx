import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import hallSlice from "./hallSlice";
import bookingSlice from "./bookingSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    hall: hallSlice,
    booking: bookingSlice,
  },
});

export default store;
