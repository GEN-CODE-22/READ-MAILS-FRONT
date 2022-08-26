import { useField, ErrorMessage, Field } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  [x: string]: any;
}

export const MyRadioButton = ({
  label,
  className,
  children,
  ...props
}: Props) => {
  const [field, meta] = useField(props);

  return (
    <div className={`flex flex-row ${className}`}>
      <Field type={"radio"} {...field} {...props} className="mt-1.5 mr-2" />
      <label
        htmlFor={props.id || props.name}
        className={`font-semibold text-gray-600 -py-2 ${
          meta.touched && meta.error && "text-red-700"
        }`}
      >
        {label}
      </label>

      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-700 text-sm font-bold "
      />
    </div>
  );
};
