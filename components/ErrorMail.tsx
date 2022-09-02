import React, { FC } from "react";
import { EmailError } from "../interfaces";

interface Props {
  mail: EmailError;
}
export const ErrorMail: FC<Props> = ({ mail }) => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center">
        <h2 className="font-extrabold text-xl">{mail.subject}</h2>
      </div>

      <textarea
        value={mail.text}
        className="my-5 w-full  text-lg font-bold p-3 rounded-lg  border-2 border-red-900 h-96"
      />
    </div>
  );
};
