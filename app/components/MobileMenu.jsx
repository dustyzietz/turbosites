"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const MobileMenu = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="absolute inset-y-0 left-2 flex h-16 items-center sm:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {open && (
        <div className="sm:hidden block bg-gray-800 w-full">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
