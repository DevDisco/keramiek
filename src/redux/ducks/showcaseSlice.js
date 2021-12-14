import { createSlice } from "@reduxjs/toolkit";

const showcaseSlice = createSlice({
  name: "showcase",
  initialState: {},
  reducers: {
    getShowcase() {},
    setShowcase(state, action) {
      const showcaseData = action.payload;
      return { ...state, ...showcaseData };
    },
  },
});

export const { getShowcase, setShowcase } = showcaseSlice.actions;

export default showcaseSlice.reducer;
