import { useField, ErrorMessage } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  [x: string]: any;
}

export const MyTextArea = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className={`font-semibold text-gray-600 py-2 ${
          meta.touched && meta.error && "text-red-700"
        }`}
      >
        {label}
      </label>
      <textarea
        className={`appearance-none ${
          meta.touched && meta.error && "border-red-500"
        }  block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-20 px-4`}
        {...field}
        {...props}
      />

      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-700 text-sm font-bold "
      />
    </>
  );
};
