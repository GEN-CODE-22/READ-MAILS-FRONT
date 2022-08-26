import React, { FC, useState } from "react";
import { PlantaGEN } from "../../../interfaces";
import { plantasGEN } from "../../../utils";
import { MySelect } from "../../FormComponents";

interface Props {
  name: string;
  label: string;
  [key: string]: any;
}
export const Plantas: FC<Props> = ({ name, label, ...res }) => {
  const [plantas, setPlantas] = useState<PlantaGEN[]>(plantasGEN);

  return (
    <MySelect label={label} name={name} className="col-span-full" {...res}>
      <option value={""}>Selecciona</option>
      {plantas.map((e) => (
        <option key={e.nombre} value={JSON.stringify(e)}>
          {`${e.cia}-${e.planta} - ${e.nombre}`}
        </option>
      ))}
    </MySelect>
  );
};
