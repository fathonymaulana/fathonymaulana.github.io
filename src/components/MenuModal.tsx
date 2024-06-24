import Link from "next/link";
import React from "react";

const menus = [
  {
    href: "/",
    text: "home",
  },
  {
    href: "/about",
    text: "about",
  },
  {
    href: "/work",
    text: "work",
  },
  {
    href: "/experience",
    text: "experience",
  },
  {
    href: "/contact",
    text: "contact",
  },
];

const MenuModal = ({ links }) => {
  return (
    <ul className="absolute w-full h-screen top-0 right-0 bottom-0 left-0 bg-white m-auto flex flex-col gap-4 items-center justify-center capitalize">
      {menus.map((menu, index) => (
        <li key={index}>
          <Link href={menu.href} title={menu.text}>
            {menu.text}
          </Link>
        </li>
      ))}
      <div className="flex flex-col w-full items-center gap-4 mt-4 px-4 text-gray-700 text-base font-medium">
        <a
          className="w-full flex items-center justify-center bg-emerald-800 transition-all border-emerald-800 hover:bg-white border-2 rounded-lg py-2 px-4 text-white hover:text-emerald-800"
          href="/contact-us"
        >
          Contact Me
        </a>
        <a
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center text-emerald-800 hover:bg-emerald-800 transition-all hover:text-white border-2 rounded-lg py-2 px-4 border-emerald-800"
          href="https://app.jala.tech/register"
        >
          Get Started
        </a>
      </div>
    </ul>
  );
};

export default MenuModal;
