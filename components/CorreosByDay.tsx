import React from "react";
import { useCorreos } from "../hooks/useCorreos";
import { DataTable } from "./Table";
import { EmailFacturaError } from "../interfaces/interfaces";

export const CorreosByDay = () => {
  const { correosByDay, loading, columns } = useCorreos();
  return (
    <div>
      <DataTable
        data={correosByDay}
        columns={columns}
        id={(row) => (row as EmailFacturaError).parseEmail.id ?? ""}
        loading={loading}
      />
    </div>
  );
};
