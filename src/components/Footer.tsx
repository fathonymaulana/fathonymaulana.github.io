"use client";
import Link from "next/link";
import React from "react";

const resources = [
  {
    href: "Introduction",
    text: "Docs",
  },
  {
    href: "/",
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

const helpSupport = [
  {
    href: "/",
    text: "Discord",
  },
  {
    href: "/",
    text: "Github",
  },
  {
    href: "https://wa.me/6281299056988",
    text: "Whatsapp",
  },
  
];

const Footer = () => {
  return (
    <div className="w-full dark:bg-gray-800 md:flex md:items-center md:justify-between rounded-none bg-gray-50 pb-8 pt-16 shadow-none">
      <div className="mx-auto w-full max-w-6xl px-4 lg:px-20">
        <div className="grid w-full justify-between gap-8 md:grid-cols-2">
          <div className="mb-4 max-w-sm lg:mb-0">
            <a href="/" className="flex items-center gap-3">
              <img
                alt="Logo"
                aria-hidden="true"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                data-nimg="1"
                src="/images/Current-logo.png"
              />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                Tony<span className="text-primary">dev</span>
              </span>
            </a>
            <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Tony Portfolio is a dynamic and responsive site showcasing my
              projects and skills with a modern, clean design. Explore my
              professional journey and innovative work through an intuitive and
              engaging user experience.
            </p>
            <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              Code licensed
              <a
                href="https://github.com/fathonymaulana/fathonymaulana.github.io/blob/main/LICENSE.txt"
                className="text-primary hover:underline"
                target="_blank"
              >
                MIT
              </a>
              , docs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400 ">
                {resources.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.href}
                      className="hover:text-primary me-0 md:me-6 font-normal text-sm"
                    >
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Help & Support
              </h2>
              <ul className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400 ">
                {helpSupport.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.href}
                      className="hover:text-primary me-0 md:me-6 font-normal text-sm"
                    >
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr
          data-testid="footer-divider"
          className="my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
        ></hr>
        <div className="w-full text-center sm:flex sm:items-center sm:justify-center">
          <div className="text-gray-500 dark:text-gray-400 sm:text-center text-base">
            © 2024
            <a href="/" className="ml-1 hover:underline">
              All Rights Reserved. Tonydev™ is a registered trademark.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
