import { useRouter } from "next/router";
import React, { FC, useRef, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Accordion: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const inlineStyle = open
    ? { height: ref.current?.scrollHeight }
    : { height: 0 };

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const accordionItem = (children as any)[0];
  const accordionPanel = (children as any)[1];

  // Reset accordion state when route starts changing
  useEffect(() => {
    if (open && window.innerWidth < 1024) {
      router.events.on("routeChangeStart", () => setOpen(false));
    }

    return () => {
      if (open && window.innerWidth < 1024) {
        router.events.off("routeChangeStart", () => setOpen(false));
      }
    };
  }, [open, router]);

  return (
    <>
      <div
        role="button"
        onClick={toggle}
        className="flex justify-start my-2 py-6 px-4 text-black text-sm"
      >
        {accordionItem}
        <span className="ml-auto">
          <span hidden={open}>
            <AngleDownIcon />
          </span>
          <span hidden={!open}>
            <AngleRightIcon />
          </span>
        </span>
      </div>
      <div
        ref={ref}
        style={inlineStyle}
        className="-mt-5 overflow-hidden text-gray-600 transition-height ease duration-300"
      >
        {accordionPanel}
      </div>
    </>
  );
};

const AngleRightIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
