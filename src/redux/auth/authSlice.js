// Slice for auth
import { createSlice } from "@reduxjs/toolkit";
import { api } from "redux/API/API";

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
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.data.user;
      state.isLogin = true;
    });
    builder.addMatcher(
      api.endpoints.currentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.data.user;
        state.isLogin = true;
      }
    );
    builder.addMatcher(
      api.endpoints.currentUser.matchRejected,
      (state, action) => {
        state.user = null;
        state.token = null;
        state.isLogin = false;
      }
    );
    builder.addMatcher(api.endpoints.logout.matchFulfilled, (state, action) => {
      state.token = null;
      state.user = null;
      state.isLogin = false;
    });
  },
});

//selectors
export const selectToken = (state) => state?.auth?.token;
export const selectUser = (state) => state?.auth?.user;
export const selectIsLogin = (state) => state?.auth?.isLogin;
