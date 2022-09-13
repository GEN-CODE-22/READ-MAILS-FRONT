import { Dispatch } from "@reduxjs/toolkit";
import { mailsApi } from "../../../api";
import { IResponse, PlantaGEN } from "../../../interfaces";
import { setCloseModal } from "../modal/modal_slice";
import { setPlanta } from "./auth_slice";

export const createAuthThunk = (values: {
  server: string;
  nombre: string;
  password: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await mailsApi.post<IResponse<PlantaGEN>>(
        "/api/auth/createAccount",
        values
      );

      dispatch(setPlanta(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const authLogin = (values: { nombre: string; password: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await mailsApi.post<IResponse<PlantaGEN>>(
        "/api/auth/authLogin",
        values
      );

      dispatch(setPlanta(data.data));
      dispatch(setCloseModal());
      localStorage.setItem("planta", JSON.stringify(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};
