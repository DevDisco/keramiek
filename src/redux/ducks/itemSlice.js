import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {},
  reducers: {
    getItem() {},
    setItem(state, action) {
      const itemData = action.payload;
      return { ...state, ...itemData };
    },
  },
});

export const { getItem, setItem } = itemSlice.actions;

export default itemSlice.reducer;
