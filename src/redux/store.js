import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice";
import filtersReducer from "./filters/slice";

// const rootReducer = (state, action) => {
//   return state;
// };

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});
