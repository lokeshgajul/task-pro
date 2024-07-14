import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userUid: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userUid = action.payload.userUid;
    },
  },
});

export const { setLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
