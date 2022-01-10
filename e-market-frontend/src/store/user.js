import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    curruser: null,
    isError: false,
    isFetching: false,
  },
  reducers: {
    start: (state) => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.curruser = action.payload;
    },
    failure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { start, success, failure } = userSlice.actions;
export default userSlice.reducer;
