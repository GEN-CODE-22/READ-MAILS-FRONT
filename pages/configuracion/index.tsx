import React, { FC, useEffect } from "react";
import { Layout } from "../../components";
import { FormConfiguracion } from "../../components/Forms";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setOpenModal } from "../../redux/slices/modal/modal_slice";
import { FormAuth } from "../../components/Forms/FormAuth";

interface Props {}

const Configuracion: FC<Props> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      setOpenModal({
        openModal: true,
        childrenModal: <FormAuth />,
        backdropClick: true,
        sizeModal: "xs",
      })
    );
  }, []);

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
