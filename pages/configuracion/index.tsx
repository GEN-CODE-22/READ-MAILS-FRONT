import React, { FC } from "react";
import { Layout } from "../../components";
import { FormConfiguracion } from "../../components/Forms";

interface Props {}

const Configuracion: FC<Props> = ({}) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto h-screen bg-white rounded-xl shadow-xl ">
        <div className="w-full">
          <div className="text-center py-4">
            <h1 className="font-extrabold text-2xl">Configuración Planta </h1>
          </div>
          <FormConfiguracion />
        </div>
      </div>
    </Layout>
  );
};

export default Configuracion;
