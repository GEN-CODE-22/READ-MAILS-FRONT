import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlantaGEN } from "../../../interfaces";

export interface AuthState {
  planta: string;
  cia: string;
  nombre: string;
  server: string;
  auth: boolean;
}

const initialState: AuthState = {
  planta: "",
  cia: "",
  nombre: "",
  auth: false,
  server: "",
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setPlanta: (state, action: PayloadAction<PlantaGEN>) => {
      state.planta = action.payload.planta;
      state.cia = action.payload.cia;
      state.nombre = action.payload.nombre;
      state.server = action.payload.server;
      state.auth = true;
    },
    clearPlanta: (state) => {
      state.planta = "";
      state.cia = "";
      state.nombre = "";
      state.auth = false;
    },
    setPl: (state, action: PayloadAction<string>) => {
      state.planta = action.payload;
    },
  },
});

export const { setPlanta, clearPlanta, setPl } = AuthSlice.actions;
