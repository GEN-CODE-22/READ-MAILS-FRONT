import { StoreApp } from "../../store";
import { Dispatch } from "redux";
import { mailsApi } from "../../../api";
import { EmailFacturaError, IResponse } from "../../../interfaces";
import { setCorreosByDay, setLoading } from "./correo_slice";

export const getCorreosByDay = () => {
  return async (dispatch: Dispatch, state: () => StoreApp) => {
    const {
      auth: { planta },
      correos: { date },
    } = state();

    if (!!planta) {
      dispatch(setLoading(true));
      try {
        dispatch(setCorreosByDay([]));
        const response = await mailsApi.post<IResponse<EmailFacturaError[]>>(
          `/api/email/byDay`,
          {
            planta,
            date,
          }
        );

        dispatch(setLoading(false));
        if (response.data.data.length > 0) {
          dispatch(setCorreosByDay(response.data.data));
        }
      } catch (error) {
        dispatch(setLoading(false));
      }
    }
  };
};
