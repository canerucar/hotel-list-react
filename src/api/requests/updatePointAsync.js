import { createAsyncThunk } from "@reduxjs/toolkit";

export const updatePointAsync = createAsyncThunk(
  'hotels/updatePointAsync',
  async (payload) => {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: payload.id, name: payload.name, point: payload.point }),
    });

    if (resp.ok) {
      const point = await resp.json();
      return { point };
    }
  }
);