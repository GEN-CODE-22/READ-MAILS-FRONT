import { Form, Formik } from "formik";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux";
import { createAuthThunk } from "../../../redux/slices/auth/thunk";
import { MyFormButton, MyInput } from "../../FormComponents";
import { Plantas } from "./Plantas";

interface InitialValues {
  server: string;
  nombre: string;
  password: string;
}

export const FormConfiguracion = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: InitialValues = {
    server: "",
    nombre: "",
    password: "",
  };

  const onSubmit = (values: InitialValues) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("planta", JSON.stringify(values));
      dispatch(createAuthThunk(values));
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
                label="Servidor"
                name="servers"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setFieldValue("server", e.target.value);
                }}
              />
              <div className="grid grid-cols-2 gap-3 ">
                <MyInput label={"Nombre"} name={"nombre"} type="text" />
                <MyInput
                  label={"Password"}
                  name={"password"}
                  type={"password"}
                />
              </div>

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
