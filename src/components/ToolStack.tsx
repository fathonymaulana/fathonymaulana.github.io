import { Tooltip } from "flowbite-react";
import React from "react";

const ToolStack = () => {
  return (
    <section className="border-b border-t border-gray-200 bg-white py-0 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      <div className="mx-auto max-w-8xl px-4 py-8 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-8">
          <div className="mx-auto mb-4 text-base tracking-tight lg:mx-0 lg:mb-0">
            Featured in:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Tooltip content="React" className="w-fit">
              <img
                src="/images/icon/react-light.png"
                alt="Tools Stack"
                draggable="false"
                className="dark:hidden"
              />
              <img
                src="/images/icon/react-dark.png"
                alt="Tools Stack"
                draggable="false"
                className="hidden dark:block"
              />
            </Tooltip>
            <Tooltip content="Tailwind CSS" className="w-fit">
              <img
                src="/images/icon/tailwind-light.png"
                alt="Tools Stack"
                draggable="false"
                className="dark:hidden"
              />
              <img
                src="/images/icon/tailwind-dark.png"
                alt="Tools Stack"
                draggable="false"
                className="hidden dark:block"
              />
            </Tooltip>
            <Tooltip content="Next JS" className="w-fit">
              <img
                src="/images/icon/nextjs-light.png"
                alt="Tools Stack"
                draggable="false"
                className="dark:hidden"
              />
              <img
                src="/images/icon/nextjs-dark.png"
                alt="Tools Stack"
                draggable="false"
                className="hidden dark:block"
              />
            </Tooltip>
            <Tooltip content="Type Script" className="w-fit">
              <img
                src="/images/icon/typescript-light.png"
                alt="Tools Stack"
                draggable="false"
                className="dark:hidden"
              />
              <img
                src="/images/icon/typescript-dark.png"
                alt="Tools Stack"
                draggable="false"
                className="hidden dark:block"
              />
            </Tooltip>
            <span className="text-gray-500 dark:text-gray-400">|</span>
            <Tooltip content="Figma" className="w-fit">
              <img
                src="/images/icon/figma-light.png"
                alt="Tools Stack"
                draggable="false"
                className="dark:hidden"
              />
              <img
                src="/images/icon/figma-dark.png"
                alt="Tools Stack"
                draggable="false"
                className="hidden dark:block"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
