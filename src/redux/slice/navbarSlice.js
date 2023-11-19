import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    showNavbar: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.showNavbar = !state.showNavbar;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
