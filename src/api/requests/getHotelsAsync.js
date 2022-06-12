import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHotelsAsync = createAsyncThunk(
  'hotels/getHotelsAsync',
  async () => {
    const resp = await fetch(process.env.REACT_APP_URL);

    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);