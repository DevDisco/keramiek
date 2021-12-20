import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {},
  reducers: {
    getCategory() {},
    setCategory(state, action) {
      const categoryData = action.payload;
      console.log("slice state", state);
      console.log("slice caData", categoryData);
      console.log("slice spread", {
        ...state,
        ...categoryData,
      });
      return { ...categoryData };
    },
  },
});

export const { getCategory, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
