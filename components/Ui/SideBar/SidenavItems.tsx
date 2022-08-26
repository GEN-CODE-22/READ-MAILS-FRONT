import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Accordion } from "./Acordion";
import { routesPath } from "./routes_paths";

const style = {
  active: `font-normal mx-4 text-sm `,
  inactive: `font-light mx-4 text-sm text-gray-900`,
  link: `inline-flex items-center justify-start my-1 p-3 text-black`,
};

export const SidenavItems = () => {
  const { asPath } = useRouter();

  return (
    <ul className="mt-6 mx-1">
      <li>
        {routesPath.map((section, i) => (
          <div key={`${i}`}>
            {section.content.length > 0 ? (
              <Accordion key={section.section}>
                <div className="flex">
                  <span>{section.icon}</span>
                  <span className="pl-3">{section.section}</span>
                </div>
                {section.content.map((item) => (
                  <Link href={item.link} key={item.link}>
                    <a className={style.link}>
                      <span
                        className={
                          item.link === asPath ? style.active : style.inactive
                        }
                      >
                        {item.title}
                      </span>
                    </a>
                  </Link>
                ))}
              </Accordion>
            ) : (
              <Link href={section.path ?? "/"}>
                <a
                  // className=  "text-base  text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 hover:dark:bg-gray-700 dark:bg-slate-800 group"
                  className={`mx-2 my-3 ${
                    section.path === asPath && " bg-gray-900   "
                  }
                    shadow-md hover:shadow-lg text-base font-normal flex rounded-lg p-2 group `}
                >
                  <div
                    className={`${section.path === asPath && "  text-white "}`}
                  >
                    {section.icon}
                  </div>

                  <span
                    // className="ml-3   text-black "
                    className={`ml-3 ${
                      section.path === asPath && " text-white "
                    }
                  `}
                  >
                    {section.section}
                  </span>
                </a>
              </Link>
            )}
          </div>
        ))}
      </li>
    </ul>
  );
};
