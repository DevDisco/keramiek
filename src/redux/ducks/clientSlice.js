import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {},
  reducers: {
    getClient() {},
    SetClient(state, action) {
      const clientData = action.payload;
      return { ...state, ...clientData };
    },
  },
});

export const { getClient, SetClient } = clientSlice.actions;

export default clientSlice.reducer;
