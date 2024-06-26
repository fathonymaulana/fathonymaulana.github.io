"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

const resources = [
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
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full dark:bg-gray-800 md:flex md:items-center md:justify-between rounded-none bg-gray-50 pb-8 pt-16 shadow-none border-t border-gray-200 dark:border-gray-600">
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
              <span className="tracking-tighter font-extrabold">
                Tony<span className="text-primary"> Portfolio</span>
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
                href="https://github.com/fathonymaulana/fathonymaulana.github.io/blob/main/MIT-LICENSE.txt"
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
        <div className="text-gray-500 dark:text-gray-400 text-base flex flex-col-reverse md:flex-row md:justify-between gap-4">
          <div className="w-full md:w-2/3 text-center md:text-left flex flex-col gap-4">
            <small>
              Copyright © 2012-2024 Tony Portfolio, LLC. All Rights Reserved
              Constitution. The Tony Portfolio wordmark is a trademark
              registered from Tony Portfolio Operating Company, LLC in the US
              and other countries. The “Tony” logo is a registered trademark of
              fathonymaulana.vercel.app, LLC in the US.
            </small>
            <small>
              Use of this Site is subject to the terms of Use. By using this
              site, you confirm that you agree to abide by the Universal Terms
              of Service.
            </small>
          </div>
          <div className="flex flex-row mt-4 mb-8 md:mb-0 md:mt-1 gap-8">
            <a
              onClick={() => setOpenModal(true)}
              className="text-xs hover:underline cursor-pointer w-fit h-fit"
            >
              Privacy policy
            </a>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Privacy policy</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Welcome to Tony's personal portfolio website. Your privacy
                    is very important to us. This privacy policy outlines the
                    types of information we collect, how we use it, and the
                    steps we take to ensure your information is protected.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The security of your personal information is important to
                    me. I implement a variety of security measures to maintain
                    the safety of your personal information when you enter,
                    submit, or access your personal information.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setOpenModal(false)}>I accept</Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
