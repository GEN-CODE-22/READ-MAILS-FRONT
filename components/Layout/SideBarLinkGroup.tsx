import React from "react";
import { useState } from "react";

export interface SideBarGroupProps {
  children: any;
  activecondition: boolean;
}

export const SideBarLinkGroup = ({
  children,
  activecondition,
}: SideBarGroupProps) => {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-gray-900"
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
};
