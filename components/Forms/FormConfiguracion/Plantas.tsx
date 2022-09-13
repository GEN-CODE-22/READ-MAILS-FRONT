import React, { FC, useEffect, useState } from "react";
import { mailsApi } from "../../../api";
import { IResponse, PlantaGEN } from "../../../interfaces";
import { plantasGEN } from "../../../utils";
import { MySelect } from "../../FormComponents";

interface Props {
  name: string;
  label: string;
  [key: string]: any;
}
export const Plantas: FC<Props> = ({ name, label, ...res }) => {
  const [plantas, setPlantas] = useState<PlantaGEN[]>(plantasGEN);

  const getPlantas = async () => {
    const response = await mailsApi.get<IResponse<PlantaGEN[]>>(
      "/api/auth/plantas"
    );
    setPlantas(response.data.data);
  };

  useEffect(() => {
    getPlantas();
  }, []);

  return (
    <MySelect label={label} name={name} className="col-span-full" {...res}>
      <option value={""}>Selecciona Server</option>
      {plantas.map((e) => (
        <option key={e.nombre} value={e.server}>
          {`${e.server}`}
        </option>
      ))}
    </MySelect>
  );
};
