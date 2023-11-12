import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "default",
  whereToWatch: [],
  filters: "default",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const {} = actions;
