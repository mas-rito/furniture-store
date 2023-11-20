import { createSlice } from "@reduxjs/toolkit";

const cartSideBarSlice = createSlice({
  name: "cartSideBar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleCartSideBar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCartSideBar } = cartSideBarSlice.actions;
export default cartSideBarSlice.reducer;
