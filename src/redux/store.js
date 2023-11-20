import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slice/navbarSlice";
import cartSideBarSlice from "./slice/cartSideBarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    cart: cartSideBarSlice,
  },
});

export default store;
