import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../slices/ThemeSlice";
import AuthSlice from "../slices/AuthSlice";

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    auth: AuthSlice,
  },
});

export default store;
