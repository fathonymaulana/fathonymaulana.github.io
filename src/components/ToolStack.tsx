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
                src="/images/icon/react.png"
                alt="Tools Stack"
                draggable="false"
              />
            </Tooltip>
            <Tooltip content="Tailwind CSS" className="w-fit">
              <img
                src="/images/icon/tailwind.png"
                alt="Tools Stack"
                draggable="false"
              />
            </Tooltip>
            <Tooltip content="Next JS" className="w-fit">
              <img
                src="/images/icon/nextjs.png"
                alt="Tools Stack"
                draggable="false"
              />
            </Tooltip>
            <Tooltip content="Type Script" className="w-fit">
              <img
                src="/images/icon/typescript.png"
                alt="Tools Stack"
                draggable="false"
              />
            </Tooltip>
            <span>|</span>
            <Tooltip content="Figma" className="w-fit">
              <img
                src="/images/icon/figma.png"
                alt="Tools Stack"
                draggable="false"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
