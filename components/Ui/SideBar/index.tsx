import { FC } from "react";
import { useToggle } from "../../Layout/provider/context";
import css from "./index.module.css";
import { SidenavHeader } from "./SidenavHeader";
import { SidenavItems } from "./SidenavItems";

interface Props {
  mobilePosition?: "left" | "right";
}

const style = {
  mobilePosition: {
    left: "left-0",
    right: "right-0",
  },
  close: `hidden`,
  container: `pb-32 lg:pb-6`,
  open: `absolute w-8/12 z-40 sm:w-5/12`,
  default: `bg-white shadow-md h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto`,
};

export const SideBar: FC<Props> = ({ mobilePosition = "right" }) => {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
       ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className="pb-32 lg:pb-6 bg-white  h-screen ">
        <SidenavHeader />
        <SidenavItems />
      </div>
    </aside>
  );
};
