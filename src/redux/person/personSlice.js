import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: "public",
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson: (state, action) => {
      state.person = action.payload;
    },
  },
});

export const { setPerson } = personSlice.actions;

export const selectPerson = (state) => state?.person?.person;
