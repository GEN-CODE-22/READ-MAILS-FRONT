import { FC } from "react";

interface Props {
  text: string;
  showCancel?: boolean;
  onCancel?: () => void;
  onConfirm: () => void;
  classNameConfirm?: string;
  classNameCancel?: string;
  titleConfirm?: string;
  titleCancel?: string;
  loading?: boolean;
}
export const ConfirmDialog: FC<Props> = ({
  text,
  showCancel = false,
  onCancel,
  onConfirm,
  classNameCancel,
  classNameConfirm,
  titleCancel = "Cancelar",
  titleConfirm = "Confirmar",
  children,
  loading = false,
}) => {
  return (
    <div className="relative p-2 m-5   rounded-lg dark:bg-slate-900 ">
      <div className="text-center">
        <svg
          className="mx-auto mb-4 w-14 h-14 text-black dark:text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-white">
          {text}
        </h3>
        {children}
        <div className="flex justify-around mt-5">
          <button
            type="button"
            className={`${classNameConfirm} `}
            onClick={onConfirm}
            disabled={loading}
          >
            {titleConfirm}
          </button>

          {showCancel && (
            <button
              type="button"
              className={`${classNameCancel}`}
              onClick={onCancel}
            >
              {titleCancel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
