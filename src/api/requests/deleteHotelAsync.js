import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteHotelAsync = createAsyncThunk(
  'hotels/deleteHotelAsync',
  async (payload) => {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${payload.id}`, {
      method: 'DELETE',
    });

    if (resp.ok) {
      console.log('payload: ', payload);
      return { id: payload.id };
    }
  }
);