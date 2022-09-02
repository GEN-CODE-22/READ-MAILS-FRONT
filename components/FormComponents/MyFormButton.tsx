import React, { FC } from "react";

interface Props {
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  label: string;
  labelLoading: string;
  onClick?: () => void;
  className?: string;
}

export const MyFormButton: FC<Props> = ({
  disabled,
  type = "submit",
  label,
  labelLoading,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${
        disabled
          ? "bg-gray-400"
          : "bg-blue-600   focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none"
      } mt-9 w-full font-semibold text-base leading-none text-white py-4 px-20 `}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
