import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {},
  reducers: {
    getText() {},
    setText(state, action) {
      //the returned json is a nested object, convert to array
      const textData = action.payload;
      return { ...state, ...textData };
    },
  },
});

export const { getText, setText } = textSlice.actions;

export default textSlice.reducer;
