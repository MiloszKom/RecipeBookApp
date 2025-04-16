import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosenFilter: "All",
  chosenTerm: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.chosenFilter = action.payload;
    },
    setTerm: (state, action) => {
      state.chosenTerm = action.payload;
    },
  },
});

export const { setFilter, setTerm } = uiSlice.actions;

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
