import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  disable?: boolean;
  [x: string]: any;
  className?: string;
}

export const MySelect = ({
  label,
  disable = false,
  className,
  ...props
}: Props) => {
  const [field, meta] = useField(props);

  return (
    <div className={`flex flex-col mb-0 ${className}`}>
      <label
        htmlFor={props.id || props.name}
        className={`font-semibold text-gray-600 py-2 ${
          meta.touched && meta.error && "text-red-700"
        }`}
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        className={`appearance-none ${
          meta.touched && meta.error && "border-red-500"
        }  block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4`}
        disabled={disable}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-700 text-sm font-bold "
      />
    </div>
  );
};
