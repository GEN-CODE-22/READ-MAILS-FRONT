import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmailFacturaError } from "../../../interfaces";

export interface CorreosState {
  correosByDay: EmailFacturaError[];
  correosByCurrentMont: EmailFacturaError[];
  loading: boolean;
  date: Date;
}

const initialState: CorreosState = {
  correosByDay: [],
  correosByCurrentMont: [],
  loading: false,
  date: new Date(Date.now()),
};

export const CorreosSlice = createSlice({
  name: "Correos",
  initialState,
  reducers: {
    setCorreosByDay: (state, action: PayloadAction<EmailFacturaError[]>) => {
      state.correosByDay = action.payload;
    },
    setCorreosByCurrentMont: (
      state,
      action: PayloadAction<EmailFacturaError[]>
    ) => {
      state.correosByCurrentMont = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    },
  },
});

export const { setCorreosByCurrentMont, setCorreosByDay, setLoading, setDate } =
  CorreosSlice.actions;
