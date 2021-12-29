import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {},
  reducers: {
    getShop() {},
    setShop(state, action) {
      const shopData = action.payload;
      console.log("slice state", state);
      console.log("slice shopData", shopData);
      console.log("slice spread", {
        ...state,
        ...shopData,
      });
      return { ...shopData };
    },
  },
});

export const { getShop, setShop } = shopSlice.actions;

export default shopSlice.reducer;
