import React from "react";

const ServiceB = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-20 lg:py-24">
        <div className="flex w-full flex-row self-stretch py-6 lg:gap-16 lg:py-10">
          <div className="hidden w-1/2 items-center lg:flex">
            <img
              alt="Tailwind CSS with React code"
              loading="lazy"
              width="549"
              height="496"
              decoding="async"
              data-nimg="1"
              className="dark:hidden"
              src="https://flowbite-react.com/_next/image?url=%2Fimages%2Ffeature-sections%2Ftailwind-css-react.png&w=1200&q=75"
            ></img>
            <img
              alt="React dark mode preview (inverted colors)"
              loading="lazy"
              width="608"
              height="443"
              decoding="async"
              data-nimg="1"
              className="hidden dark:block text-transparent"
              src="https://flowbite-react.com/_next/image?url=%2Fimages%2Ffeature-sections%2Ftailwind-css-react-dark.png&w=640&q=75"
            ></img>
          </div>
          <div className="flex w-1/2 grow flex-col items-start gap-4 divide-y lg:gap-8 dark:divide-gray-700">
            <div className="flex flex-col items-start gap-3 self-stretch sm:gap-4">
              <h2 className="text-3xl font-semibold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                Compatible with Tailwind CSS
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Designing with Figma and ensuring compatibility with Tailwind
                CSS involves creating designs that can seamlessly translate into
                Tailwind's utility-first framework.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                <a
                  href="https://tailwindcss.com/"
                  className="pr-1 text-lg font-medium text-primary underline hover:no-underline dark:text-white"
                  target="_blank"
                >
                  Tailwind CSS
                </a>
                is the most popular and open-source utility-first CSS framework
                on the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceB;
