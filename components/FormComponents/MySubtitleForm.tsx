import React, { FC } from "react";

interface Props {
  title: string;
}
export const MyLabelForm: FC<Props> = ({ title }) => {
  return (
    <div className="grid col-span-full text-center py-3 mt-5 bg-slate-300 w-full rounded-lg">
      <h3 className="font-extrabold text-2xl pl-3 text-gray-900 w-full">
        {title}
      </h3>
    </div>
  );
};
