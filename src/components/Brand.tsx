import React from "react";

const Brand = () => {
  return (
    <section className="border-b border-t border-gray-200 bg-white py-0 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      <div className="mx-auto max-w-8xl px-4 py-8 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-8">
          <div className="mx-auto mb-4 text-base tracking-tight lg:mx-0 lg:mb-0">
            Have worked at:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img
              src="/images/brand/mandiri.png"
              alt="Tools Stack"
              draggable="false"
              width={55}
              height={55}
            />
            <img
              src="/images/brand/mitech.png"
              alt="Tools Stack"
              draggable="false"
              width={55}
              height={55}
            />
            <img
              src="/images/brand/ikon.png"
              alt="Tools Stack"
              draggable="false"
              width={55}
              height={55}
            />
            <img
              src="/images/brand/upwork.png"
              alt="Tools Stack"
              draggable="false"
              width={55}
              height={55}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
