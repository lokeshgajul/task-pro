import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../slices/ThemeSlice";

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
});

export default store;
