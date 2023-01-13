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
    console.log({ origin });

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", origin);
    encodedParams.append("format", "text");
    encodedParams.append("target", "es");
    encodedParams.append("source", "en");

    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "15b8a54399mshfb6e7ec4a9c2022p196ac9jsn0ef0dbce8c1d",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    setLoading(true);

    const response = await axios.request<{
      data: {
        translations: [{ translatedText: string }];
      };
    }>(options);
    setLoading(false);
    setTraslateText(response.data.data.translations[0].translatedText);

    // const formData = new FormData();
    // formData.append("q", origin);
    // formData.append("source", "en");
    // formData.append("target", "es");
    // formData.append("format", "text");
    // formData.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    // try {
    //   setLoading(true);
    //   const response = await axios.post(
    //     `https://libretranslate.com/translate`,
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //       },
    //     }
    //   );
    //   setLoading(false);
    //   setTraslateText(response.data.translatedText);

    //   console.log(r);
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    //   setTraslateText("Error al traducir");
    // }
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
