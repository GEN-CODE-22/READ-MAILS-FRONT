import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { EmailError } from "../interfaces";

interface Props {
  mail: EmailError;
}
export const ErrorMail: FC<Props> = ({ mail }) => {
  const email = mail.text?.split(/\r\n|\r|\n/, -1);
  const [traslateText, setTraslateText] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [origin, setOrigin] = useState<string>(
    `${(email as string[])[0]} \n ${(email as string[])[1] ?? ""} \n ${
      (email as string[])[2] ?? ""
    } \n ${(email as string[])[3] ?? ""} \n ${(email as string[])[4] ?? ""}
    \n ${(email as string[])[5] ?? ""} \n ${(email as string[])[6] ?? ""}
    
    `
  );

  const handleTraslate = async () => {
    const formData = new FormData();
    formData.append("q", origin);
    formData.append("source", "en");
    formData.append("target", "es");
    formData.append("format", "text");
    formData.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    try {
      setLoading(true);
      const response = await axios.post(
        `https://libretranslate.de/translate`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setLoading(false);
      setTraslateText(response.data.translatedText);
    } catch (error) {
      setLoading(false);
      setTraslateText("Error al traducir");
    }
  };

  useEffect(() => {
    handleTraslate();
  }, []);

  return (
    <div className="mx-auto p-4">
      <div className="flex justify-center">
        <h2 className="font-extrabold text-xl">{mail.subject}</h2>
      </div>

      <div className="space-y-3">
        <div className="">
          <h3 className="text-sm font-bold">Error Original</h3>
          <textarea
            value={origin}
            className="my-5 w-full  text-lg font-bold p-3 rounded-lg  border-2 border-red-900 h-96"
          />
        </div>
        <div className="">
          <h3 className="text-sm font-bold">Español</h3>

          <textarea
            value={loading ? "Traducciendo...." : traslateText}
            className="my-5 w-full  text-lg font-bold p-3 rounded-lg  border-2 border-red-900 h-96"
          />
        </div>
      </div>
    </div>
  );
};
