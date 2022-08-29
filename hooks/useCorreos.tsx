import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreApp } from "../redux";
import { getCorreosByDay } from "../redux/slices/correos/tunks";
import { GridEnrichedColDef } from "@mui/x-data-grid";
import { EmailFacturaError } from "../interfaces/interfaces";
import moment from "moment";

export const useCorreos = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { correosByDay, loading } = useSelector(
    (state: StoreApp) => state.correos
  );

  useEffect(() => {
    dispatch(getCorreosByDay());
  }, []);

  const columns = useMemo<GridEnrichedColDef<EmailFacturaError>[]>(
    () => [
      {
        field: "fecha",
        headerName: "Fecha",
        width: 200,
        sortable: false,
        editable: false,
        type: "date",
        valueGetter: (params) => {
          return params.row.parseEmail.date;
        },
        renderCell: (params) => {
          return moment(params.row.parseEmail.date).format(
            "YYYY/MM/DD HH:mm:ss"
          );
        },
      },

      {
        field: "text",
        headerName: "Texto",
        flex: 1,
        sortable: false,
        editable: false,
        valueGetter: (params) => {
          return params.row.parseEmail.text;
        },
        renderCell: (params) => {
          return params.row.parseEmail.text;
        },
      },
    ],
    []
  );

  return {
    correosByDay,
    loading,
    columns,
  };
};
