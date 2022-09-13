import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlantaGEN } from "../../interfaces";
import { setPlanta } from "../../redux/slices/auth/auth_slice";
import { setOpenModal } from "../../redux/slices/modal/modal_slice";
import { AppDispatch, StoreApp } from "../../redux/store";
import { FormAuth } from "../Forms/FormAuth";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Session: FC<Props> = ({ children }) => {
  const { auth } = useSelector((state: StoreApp) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      if (typeof window !== "undefined") {
        const value = localStorage.getItem("planta");
        if (!!value) {
          const planta = JSON.parse(value) as PlantaGEN;
          dispatch(setPlanta(planta));
        } else {
          dispatch(
            setOpenModal({
              openModal: true,
              childrenModal: <FormAuth />,
              backdropClick: true,
              sizeModal: "xs",
            })
          );
        }
      }
    } else {
      router.push("/");
    }
  }, [auth]);

  return <>{children}</>;
};
