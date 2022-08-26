import { FieldArray, useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
  className?: string;
}

export const MyFieldArray = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className={`w-full text-center  ${props.className}`}>
      <label
        htmlFor={props.id || props.name}
        className="text-gray-600 py-2 font-bold uppercase text-lg"
      >
        {label}
      </label>
      <FieldArray {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-700 text-sm font-bold "
      />
    </div>
  );
};
