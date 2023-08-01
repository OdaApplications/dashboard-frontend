// Slice for auth
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authAPI";

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.data.user;
        state.isLogin = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.currentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.data.user;
        state.isLogin = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.currentUser.matchRejected,
      (state, action) => {
        state.user = null;
        state.token = null;
        state.isLogin = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.token = null;
        state.user = null;
        state.isLogin = false;
      }
    );
  },
});

//selectors
export const selectToken = (state) => state?.auth?.token;
export const selectUser = (state) => state?.auth?.user;
export const selectIsLogin = (state) => state?.auth?.isLogin;
