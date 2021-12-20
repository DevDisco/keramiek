import { createSlice } from "@reduxjs/toolkit";

const agendaSlice = createSlice({
  name: "agenda",
  initialState: {},
  reducers: {
    getAgenda() {},
    setAgenda(state, action) {
      const agendaData = action.payload;
      return { ...state, ...agendaData };
    },
  },
});

export const { getAgenda, setAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;
