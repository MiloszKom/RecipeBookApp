import { createStore } from "redux";

const initialState = {
  scrolledHeight: 0,
  chosenFilter: "All",
  chosenTerm: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "height/set":
      return {
        ...state,
        scrolledHeight: action.payload,
      };
    case "filter/set":
      return {
        ...state,
        chosenFilter: action.payload,
      };
    case "term/set":
      return {
        ...state,
        chosenTerm: action.payload,
      };
    default:
      return state;
  }
}

export const setHeight = (height) => ({
  type: "height/set",
  payload: height,
});

export const setFilter = (option) => ({
  type: "filter/set",
  payload: option,
});

export const setTerm = (term) => ({
  type: "term/set",
  payload: term,
});

const store = createStore(reducer);

export default store;
