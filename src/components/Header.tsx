"use client";
import React from "react";
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";

const Header = () => {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="mr-2 hidden rounded bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 md:inline dark:bg-emerald-200 dark:text-emerald-800">
              New
            </span>
            <span className="[&_p]:inline">
              Tony has just launched his newest E-Commerce project!&nbsp;
              <a
                href="Projects"
                className="inline font-medium text-primary underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary"
              >
                Check it out
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
};

export default Header;
