import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Joe",
      email: "joe@gmail.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.user = action.payload;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { update, updateStart, updateSuccess, updateError } =
  userSlice.actions;

export default userSlice.reducer;
