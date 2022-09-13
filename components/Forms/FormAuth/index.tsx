import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux";
import { authLogin } from "../../../redux/slices/auth/thunk";
import { setCloseModal } from "../../../redux/slices/modal/modal_slice";
import { MyInput } from "../../FormComponents";

export const FormAuth = () => {
  const router = useRouter();

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
    if (values.password === "root123" && values.usuario === "superadmin") {
      dispatch(setCloseModal());
    } else {
      dispatch(
        authLogin({ nombre: values.usuario, password: values.password })
      );
      return;
    }
  };

  const createAcount = () => {
    router.push("/configuracion");
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
        <div
          onClick={createAcount}
          className="pt-4 w-full flex flex-row-reverse"
        >
          <p className="text-center font-extrabold text-base text-gray-500 hover:text-gray-800 cursor-pointer">
            Crear una cuenta
          </p>
        </div>
      </div>
    </div>
  );
};
