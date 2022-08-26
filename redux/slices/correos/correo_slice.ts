import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CorreosState {
  correosByDay: any[];
  correosByCurrentMont: any[];
}

const initialState: CorreosState = {
  correosByDay: [],
  correosByCurrentMont: [],
};

export const CorreosSlice = createSlice({
  name: "Correos",
  initialState,
  reducers: {
    setCorreosByDay: (state, action: PayloadAction<any[]>) => {
      state.correosByDay = action.payload;
    },
    setCorreosByCurrentMont: (state, action: PayloadAction<any[]>) => {
      state.correosByCurrentMont = action.payload;
    },
  },
});

export const { setCorreosByCurrentMont, setCorreosByDay } =
  CorreosSlice.actions;
