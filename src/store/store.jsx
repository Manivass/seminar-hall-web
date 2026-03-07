import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import hallSlice from "./hallSlice";
import bookingSlice from "./bookingSlice";
import pendingSlice from "./pendingSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    hall: hallSlice,
    booking: bookingSlice,
    pending: pendingSlice,
  },
});

export default store;
