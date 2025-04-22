import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    loading: false,
    user: {},
  },
  reducers: {
    SIGNUP_SUCCESS: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isLogin = true;
    },

  },
});

export const {
    SIGNUP_SUCCESS,
} = AuthSlice.actions;

export default AuthSlice.reducer;
