import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrolledHeight: 0,
  chosenFilter: "All",
  chosenTerm: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setHeight: (state, action) => {
      state.scrolledHeight = action.payload;
    },
    setFilter: (state, action) => {
      state.chosenFilter = action.payload;
    },
    setTerm: (state, action) => {
      state.chosenTerm = action.payload;
    },
  },
});

export const { setHeight, setFilter, setTerm } = uiSlice.actions;

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
