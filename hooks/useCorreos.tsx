import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreApp } from "../redux";
import { getCorreosByDay } from "../redux/slices/correos/tunks";
import { GridEnrichedColDef } from "@mui/x-data-grid";
import { EmailFacturaError } from "../interfaces/interfaces";
import moment from "moment";
import { setOpenModal } from "../redux/slices/modal/modal_slice";
import { ErrorMail } from "../components";

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
        field: "factura",
        headerName: "Folio Factura",
        width: 200,
        sortable: false,
        editable: false,
        valueGetter: (params) => {
          const text =
            params.row.parseEmail?.subject?.split("Envio de factura")[1];

          return text;
        },
        renderCell: (params) => {
          const text =
            params.row.parseEmail?.subject?.split("Envio de factura")[1];

          return text;
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

  const onClick = (mail: EmailFacturaError) => {
    console.log(mail.parseEmail);
    dispatch(
      setOpenModal({
        openModal: true,
        childrenModal: <ErrorMail mail={mail.parseEmail} />,
        backdropClick: false,
      })
    );
  };

  return {
    correosByDay,
    loading,
    columns,
    onClick,
  };
};
