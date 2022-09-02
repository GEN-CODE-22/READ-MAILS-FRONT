import { useField, ErrorMessage } from "formik";

interface Props {
  label?: string;
  name: string;
  className?: string;
  [x: string]: any;
  children?: React.ReactElement;
}

export const MyCheckbox = ({ label, className, children, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className={`flex flex-col mb-0 m-2  ${className}`}>
      <div className="flex justify-around ">
        <label className="text-xs w-full relative">
          <input
            className="mt-4 mr-3 h-6 w-6 cursor-pointer"
            type={"checkbox"}
            {...field}
            {...props}
          />
          {!!label && <span className="md:top-5 top-2 absolute">{label}</span>}
          {children}
        </label>
      </div>

      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-700 text-sm font-bold "
      />
    </div>
  );
};
