import { configureStore } from "@reduxjs/toolkit";
import { hotelSlice } from "redux/hotel/hotelSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelSlice.reducer,
  }
});