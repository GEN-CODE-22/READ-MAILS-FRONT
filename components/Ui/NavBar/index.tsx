import { UserIcon } from "@heroicons/react/outline";
import { Tooltip } from "@mui/material";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreApp } from "../../../redux";
import { clearPlanta } from "../../../redux/slices/auth/auth_slice";

import { useToggle } from "../../Layout/provider/context";

export const NavBar: FC = ({}) => {
  const { toggle } = useToggle();

  const dispatch = useDispatch<AppDispatch>();
  const { nombre, planta, cia, auth } = useSelector(
    (state: StoreApp) => state.auth
  );

  const onClick = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("planta");
    }
    dispatch(clearPlanta());
  };

  return (
    <header className="h-16 md:h-20 shadow-md dark:bg-slate-900 bg-slate-900 items-center relative z-10">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={toggle}
              className="text-4xl text-white focus:outline-none lg:hidden"
            >
              &#8801;
            </button>
          </div>
          <div className="flex items-center justify-end ml-5 mr-0 p-1 relative text-white w-full sm:mr-0 sm:right-auto">
            <a href="#" className="block relative ">
              <Tooltip title={"Cerrar Sesión"} onClick={onClick}>
                <div>
                  {!!auth ? (
                    <div className="flex">
                      <UserIcon width={25} height={25} />
                      <h1 className="text-white text-lg">{`${cia}-${planta} ${nombre}`}</h1>
                    </div>
                  ) : (
                    <h1>N/A</h1>
                  )}
                </div>
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
