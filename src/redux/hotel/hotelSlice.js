import { createSlice } from "@reduxjs/toolkit";

import { getHotelsAsync } from "api/requests/getHotelsAsync";
import { deleteHotelAsync } from "api/requests/deleteHotelAsync";
import { updatePointAsync } from "api/requests/updatePointAsync";

export const hotelSlice = createSlice({
  name: "hotel",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getHotelsAsync.fulfilled]: (state, action) => {
      return (action.payload.data);
    },
    [deleteHotelAsync.fulfilled]: (state, action) => {
      return state.filter((hotel) => hotel.id !== action.payload.id);
    },
    [updatePointAsync.fulfilled]: (state, action) => {
      return state.map((hotel) => {
        console.log('hotell', hotel.point);
        if (hotel.id === action.payload.point.id) {
          return { ...hotel, point: action.payload.point.point };
        }
        return hotel;
      });
    },
  }
});

export const { getHotels } = hotelSlice.actions;

export default hotelSlice.reducer;