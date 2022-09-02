import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmailFacturaError } from "../../../interfaces";

export interface CorreosState {
  correosByDay: EmailFacturaError[];
  correosByCurrentMont: EmailFacturaError[];
  loading: boolean;
}

const initialState: CorreosState = {
  correosByDay: [],
  correosByCurrentMont: [],
  loading: false,
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
  },
});

export const { setCorreosByCurrentMont, setCorreosByDay, setLoading } =
  CorreosSlice.actions;
