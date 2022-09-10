import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux";
import { setCloseModal } from "../../../redux/slices/modal/modal_slice";
import { MyInput } from "../../FormComponents";

export const FormAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState("");

  useEffect(() => {
    if (error !== "") {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  const onClick = (values: any) => {
    if (values.password !== "root123" && values.usuario !== "superadmin") {
      setError("Usuario o contraseña incorrectos");
      return;
    }

    dispatch(setCloseModal());
  };

  return (
    <div className="bg-white space-y-4 p-2 ">
      {error !== "" && (
        <h2 className="text-red-500 my-4 font-extrabold text-sm">{error}</h2>
      )}
      <div className="flex justify-center">
        <h2 className="font-extrabold text-2xl">Acceso no autorizado</h2>
      </div>
      <div className="p-5 my-6 ">
        <Formik initialValues={{}} onSubmit={onClick}>
          {({ setFieldValue }) => (
            <Form noValidate>
              <MyInput label={"Usuario"} name={"usuario"} type="text" />

              <MyInput label={"Contraseña"} name={"password"} type="password" />

              <div className="mt-4">
                <button
                  type="submit"
                  className="focus:ring-2 focus:ring-offset-2 focus:bg-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-700 border rounded hover:bg-red-700 py-4 w-full"
                >
                  Continuar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
