import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { FC, Fragment } from "react";
import { ItemPopower } from "../../interfaces";
import { ChevronDownIcon } from "@heroicons/react/outline";

interface Props {
  items: ItemPopower[];
  label: string;
}

export const Popower: FC<Props> = ({ items, label }) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group font-bold bg-white rounded-md inline-flex items-center  p-1 text-base justify-between w-40  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004181]"
            )}
          >
            <span className="flex-none ">{label}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <Link href={item.href} passHref key={item.name}>
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
