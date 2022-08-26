import Head from "next/head";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreApp } from "../../redux";
import { NavBar } from "../Ui/NavBar";
import { SideBar } from "../Ui/SideBar";

import DashboardProvider from "./provider/context";
import Overlay from "./provider/overlay";

interface Props {
  title?: string;
}
const style = {
  container: `bg-gray-100 h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen pl-0 w-full `,
  main: `h-screen overflow-auto  md:pb-8 md:px-8 bg-gray-100 pt-5 `,
};

interface Props {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  const { auth } = useSelector((state: StoreApp) => state.auth);
  return (
    <div>
      <Head>
        <title>{title || "Facturación Mail"}</title>
        <link rel="shortcut icon" href="/perfil.png" />
        <meta name="author" content=" Julio Gonzalez" />
        <meta name="descripcion" content="Facturacion GEN" />
        <meta name="keywords" content={`${title}`} />
        <meta property="og:title" content={`Información sobre ${title}`} />

        <meta
          property="og:description"
          content={`'La pagina de información sobre ${title}'`}
        />
        {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
      </Head>

      <DashboardProvider>
        <div className={style.container}>
          <Overlay />
          <div className="flex items-start">
            {!!auth && <SideBar />}

            <div className={style.mainContainer}>
              <NavBar />
              <main className={style.main}>{children}</main>
            </div>
          </div>
        </div>
      </DashboardProvider>
    </div>
  );
};
