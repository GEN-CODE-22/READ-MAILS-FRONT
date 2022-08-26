import {
  BookOpenIcon,
  CashIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { FilterListRounded, People } from "@mui/icons-material";

export interface BasePath {
  path?: string;
  icon: React.ReactElement;
  section: string;
}

export interface PathContent extends BasePath {
  content: Content[];
}

export interface Content {
  link: string;
  title: string;
}

export declare type Paths = PathContent[];

export const routesPath: Paths = [
  {
    section: "Mails Error",
    icon: <BookOpenIcon width={20} height={20} />,
    path: "/",
    content: [],
  },
  // {
  //   section: "Clientes",
  //   icon: <People width={20} height={20} />,
  //   content: [],
  //   path: "/clientes",
  // },
  // {
  //   section: "Bancos",
  //   icon: <CashIcon width={20} height={20} />,
  //   content: [],
  //   path: "/bancos",
  // },
  // {
  //   section: "Unidad de Negocio",
  //   icon: <UserGroupIcon width={20} height={20} />,
  //   content: [],
  //   path: "/unidad-negocio",
  // },

  // {
  //   section: "Reportes",
  //   icon: <FilterListRounded />,
  //   content: [
  //     {
  //       title: "Reportes Factura",
  //       link: "/reportes/facturas",
  //     },
  //     {
  //       title: "Reportes Pago",
  //       link: "/reportes/pagos",
  //     },
  //   ],
  // },
];
