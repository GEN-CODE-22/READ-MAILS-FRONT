import { Form, Formik } from "formik";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { PlantaGEN } from "../../../interfaces";
import { AppDispatch } from "../../../redux";
import { setPlanta } from "../../../redux/slices/auth/auth_slice";
import { MyFormButton, MyInput } from "../../FormComponents";
import { MyButton } from "../../Ui/Button";
import { Plantas } from "./Plantas";

interface InitialValues {
  pl: string;
  planta: string;
  cia: string;
  nombre: string;
}

export const FormConfiguracion = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: InitialValues = {
    pl: "",
    planta: "",
    cia: "",
    nombre: "",
  };

  const onSubmit = (values: InitialValues) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("planta", values.pl);
      dispatch(setPlanta(JSON.parse(values.pl) as PlantaGEN));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, setFieldValue }) => {
        return (
          <Form className="max-w-4xl mx-auto  rounded-xl bg-slate-200/20 ">
            <div className="py-5 px-5 space-y-5 ">
              <Plantas
                label="Plantas"
                name="pl"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  const planta = JSON.parse(e.target.value) as PlantaGEN;
                  setFieldValue("cia", planta.cia);
                  setFieldValue("nombre", planta.nombre);
                  setFieldValue("planta", planta.planta);
                  setFieldValue("pl", e.target.value);
                }}
              />
              <div className="grid grid-cols-2 gap-3 ">
                <MyInput label={"cia"} name={"cia"} disabled />
                <MyInput label={"planta"} name={"planta"} disabled />
              </div>
              <MyInput label={"Nombre"} name={"nombre"} disabled />

              <div className="flex mx-auto max-w-md">
                <MyFormButton
                  label={"Guardar Configuración"}
                  labelLoading={""}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
