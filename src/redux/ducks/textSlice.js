import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {},
  reducers: {
    getText() {},
    setText(state, action) {
      const textData = action.payload;
      return { ...state, ...textData };
    },
  },
});

export const { getText, setText } = textSlice.actions;

export default textSlice.reducer;
