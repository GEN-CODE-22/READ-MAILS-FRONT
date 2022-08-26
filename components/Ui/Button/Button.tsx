import React, { FC } from "react";

interface Props {
  title: string;
  [key: string]: any;
  className?: string;
}

export const MyButton: FC<Props> = ({ title, className, ...props }) => {
  return (
    <button
      className={`font-bold py-2 px-4 border-b-4  rounded ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};
