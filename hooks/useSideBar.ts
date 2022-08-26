import { useEffect, useState } from "react";

interface useSideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  trigger: React.RefObject<HTMLButtonElement>;
  sidebar: React.RefObject<HTMLDivElement>;
}

export const useSideBar = ({
  sidebar,
  trigger,
  setSidebarOpen,
  sidebarOpen,
}: useSideBarProps) => {
  let storedSidebarExpanded: string | undefined;

  if (typeof window !== "undefined") {
    storedSidebarExpanded =
      window.localStorage.getItem("sidebar-expanded") ?? "";
  }

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("sidebar-expanded", `${sidebarExpanded}`);
    }
    if (sidebarExpanded) {
      document.querySelector("body")!.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")!.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return {
    sidebarExpanded,
    setSidebarExpanded,
  };
};
