import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: null,
  reducers: {
    addBookingHall: (state, action) => {
      return action.payload;
    },
    removeBookingHall: () => {
      return null;
    },
  },
});

export const { addBookingHall, removeBookingHall } = bookingSlice.actions;
export default bookingSlice.reducer;
