import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlantaGEN } from "../../../interfaces";

export interface AuthState {
  planta: string;
  cia: string;
  nombre: string;
  auth: boolean;
}

const initialState: AuthState = {
  planta: "",
  cia: "",
  nombre: "",
  auth: false,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setPlanta: (state, action: PayloadAction<PlantaGEN>) => {
      state.planta = action.payload.planta;
      state.cia = action.payload.cia;
      state.nombre = action.payload.nombre;
      state.auth = true;
    },
    clearPlanta: (state) => {
      state.planta = "";
      state.cia = "";
      state.nombre = "";
      state.auth = false;
    },
  },
});

export const { setPlanta, clearPlanta } = AuthSlice.actions;
