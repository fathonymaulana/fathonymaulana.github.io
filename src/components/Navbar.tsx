"use client";
import { ArrowRightIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import { Tooltip } from "flowbite-react";
import ToggleMode from "./ToggleMode";
import { MenuIcon, X } from "lucide-react";

const menus = [
  {
    href: "Introduction",
    text: "Docs",
  },
  {
    href: "Figma",
    text: "Figma",
  },
  {
    href: "Projects",
    text: "Projects",
  },
  {
    href: "Contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-gray-200 bg-white py-0 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4 py-2.5 xl:max-w-8xl xl:px-20 container">
          <div className="flex items-center gap-3">
            {/* Hamburger button for mobile */}
            <div className="md:hidden">
              <button
                className="py-2 outline-none focus:border-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <X /> : <MenuIcon />}
              </button>
            </div>
            <a
              aria-hidden="true"
              className="flex items-center gap-3 text-2xl font-semibold text-gray-900 dark:text-white"
              href="/"
            >
              <img
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                data-nimg="1"
                src="/images/Current-logo.png"
              />
              <span className="tracking-tighter font-bold">
                Tony<span className="text-primary"> Portfolio</span>
              </span>
            </a>
          </div>
          <div
            className={`w-full flex md:hidden justify-center pb-3 mt-8 md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex flex-col">
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className="pb-6 text-xl text-gray-600 dark:text-gray-400 py-2 md:px-6 text-center"
                >
                  <Link href={menu.href} onClick={() => setNavbar(!navbar)}>
                    {menu.text}
                  </Link>
                </li>
              ))}
              <div className="pb-8 flex flex-col items-center justify-center gap-4 font-medium">
                <a
                  rel="noopener noreferrer "
                  className="hover:bg-white border-2 rounded-lg text-white  inline-flex items-center py-3 px-5 bg-primary border-primary hover:text-primary"
                  href="/contact-us"
                >
                  Discord
                </a>
                <a
                  rel="noopener noreferrer "
                  className=" text-primary hover:bg-primary hover:text-white rounded-lg py-3 px-5 border-2  md:inline-flex items-center sm:block border-primary "
                  href="Introduction"
                >
                  Github
                </a>
              </div>
            </ul>
          </div>
          <div className="flex items-center">
            <ul className="hidden items-center gap-1 lg:flex list-none">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.href}
                    className="hover:text-primary me-0 md:me-6 font-base text-sm"
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1">
              <div className="hidden md:flex gap-1">
                <Tooltip content="Ask on Discord" className="w-fit h-fit">
                  <Link href="#" passHref target="_blank">
                    <button
                      type="button"
                      className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="size-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                      </svg>
                    </button>
                  </Link>
                </Tooltip>
                <Tooltip content="View on Github" className="w-fit h-fit">
                  <Link
                    href="https://github.com/fathonymaulana/fathonymaulana.github.io"
                    passHref
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className="size-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </button>
                  </Link>
                </Tooltip>
              </div>
              <Tooltip content="Toggle dark mode" className="w-fit h-fit">
                <ToggleMode />
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
