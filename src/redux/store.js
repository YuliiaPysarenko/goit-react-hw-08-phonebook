import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from "./items/slice";
import { filterSlice } from "./filter/slice";

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
