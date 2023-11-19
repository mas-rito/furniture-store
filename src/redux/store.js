import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slice/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export default store;
