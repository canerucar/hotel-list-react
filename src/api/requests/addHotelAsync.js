import { createAsyncThunk } from "@reduxjs/toolkit";

export const addHotelAsync = createAsyncThunk(
  'hotels/addHotelAsync',
  async (payload) => {
    const resp = await fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: payload.id, name: payload.name, point: payload.point }),
    });

    if (resp.ok) {
      const hotel = await resp.json();
      return { hotel };
    }
  }
);