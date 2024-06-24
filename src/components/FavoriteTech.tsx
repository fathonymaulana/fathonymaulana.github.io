"use client";
import { Tooltip } from "flowbite-react";
import React from "react";

const FavoriteTech = () => {
  return (
    <section className="border-t border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto max-w-8xl px-4 py-8 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-8">
          <div className="mx-auto mb-4 text-base tracking-tight lg:mx-0 lg:mb-0 text-gray-500 dark:text-gray-400">
            Current favorite tech stack/tools:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Tooltip content="HTML5" className="w-fit">
              <img src="/tools/html5.png" alt="tools stack" className="w-10" />
            </Tooltip>
            <Tooltip content="CSS3" className="w-fit">
              <img src="/tools/css3.png" alt="tools stack" className="w-10" />
            </Tooltip>
            <Tooltip content="JavaScript" className="w-fit">
              <img
                src="/tools/javascript.png"
                alt="tools stack"
                className="w-10"
              />
            </Tooltip>
            <Tooltip content="Next JS" className="w-fit">
              <img src="/tools/nextjs.png" alt="tools stack" className="w-10" />
            </Tooltip>
            <Tooltip content="Tailwind CSS" className="w-fit">
              <img
                src="/tools/tailwind-css.png"
                alt="tools stack"
                className="w-10"
              />
            </Tooltip>
            <Tooltip content="React" className="w-fit">
              <img src="/tools/react.png" alt="tools stack" className="w-10" />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteTech;
