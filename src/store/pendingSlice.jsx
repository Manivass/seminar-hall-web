import { createSlice } from "@reduxjs/toolkit";

const pendingSlice = createSlice({
  name: "pending",
  initialState: null,
  reducers: {
    addPendingList: (state, action) => {
      return action.payload;
    },
    removePendingList: () => {
      return null;
    },
  },
});

export const { addPendingList, removePendingList } = pendingSlice.actions;
export default pendingSlice.reducer;
