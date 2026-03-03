import { createSlice } from "@reduxjs/toolkit";

const hallSlice = createSlice({
  name: "hallSlice",
  initialState: null,
  reducers: {
    addHall: (state, action) => {
      return action.payload;
    },
    removeHall: () => {
      return null;
    },
  },
});

export const { addHall, removeHall } = hallSlice.actions;
export default hallSlice.reducer;
