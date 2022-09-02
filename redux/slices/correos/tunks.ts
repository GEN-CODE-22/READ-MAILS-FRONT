import { StoreApp } from "../../store";
import { Dispatch } from "redux";
import { mailsApi } from "../../../api";
import { EmailFacturaError, IResponse } from "../../../interfaces";
import { setCorreosByDay, setLoading } from "./correo_slice";

export const getCorreosByDay = () => {
  return async (dispatch: Dispatch, state: () => StoreApp) => {
    const {
      auth: { planta },
    } = state();

    if (!!planta) {
      dispatch(setLoading(true));
      try {
        dispatch(setCorreosByDay([]));
        const response = await mailsApi.get<IResponse<EmailFacturaError[]>>(
          `/api/email/byDay?planta=${planta}`
        );
        dispatch(setLoading(false));
        dispatch(setCorreosByDay(response.data.mails));
      } catch (error) {
        dispatch(setLoading(false));
      }
    }
  };
};
