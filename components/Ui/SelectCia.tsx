import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailsApi } from "../../api";
import { IResponse, PlantaGEN, PlGEN } from "../../interfaces";
import { AppDispatch, StoreApp } from "../../redux";
import { setPl } from "../../redux/slices/auth/auth_slice";

export const SelectCia = () => {
  const { planta, server } = useSelector((state: StoreApp) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const [plantasServer, setPlantasServer] = useState<PlGEN[]>([]);

  useEffect(() => {
    getPlantas();
  }, [planta]);

  const getPlantas = async () => {
    if (!!server) {
      const response = await mailsApi.get<IResponse<PlGEN[]>>(
        `/api/auth/plantasEnabled?server=${server}`
      );
      setPlantasServer(response.data.data);
      setPl(response.data.data[0]?.pla);
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPl(e.target.value));
  };

  return (
    <div className="md:absolute top-3 -right-7 md:px-0 px-6">
      <select
        value={planta}
        onChange={handleSelect}
        className={`appearance-none   block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4`}
      >
        {plantasServer.map((planta) => (
          <option value={planta.pla} key={`${planta.id}`}>
            {planta.pla}-{planta.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};
