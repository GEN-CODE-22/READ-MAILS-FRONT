import React, { FC } from "react";

interface Props {
  title?: string;
}

export const MyContent: FC<Props> = ({ children, title }) => {
  return (
    <div className="w-full my-1">
      <div className="bg-white   rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl leading-none font-bold text-gray-900  mb-10">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};
