import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "flowbite-react";
import React from "react";

const DarkModeIntegrations = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-20 lg:py-24">
        <div className="flex w-full flex-row-reverse self-stretch py-6 lg:gap-16 lg:py-10">
          <div className="hidden w-1/2 items-center lg:flex">
            <img
              alt="React dark mode preview"
              loading="lazy"
              width="608"
              height="443"
              decoding="async"
              data-nimg="1"
              className="dark:hidden text-transparent"
              src="https://flowbite-react.com/_next/image?url=%2Fimages%2Ffeature-sections%2Freact-dark-mode.png&w=640&q=75"
            ></img>
            <img
              alt="React dark mode preview (inverted colors)"
              loading="lazy"
              width="608"
              height="443"
              decoding="async"
              data-nimg="1"
              className="hidden dark:block text-transparent"
              src="https://flowbite-react.com/_next/image?url=%2Fimages%2Ffeature-sections%2Freact-dark-mode-dark.png&w=640&q=75"
            ></img>
          </div>
          <div className="flex w-1/2 grow flex-col items-start gap-4 divide-y lg:gap-8 dark:divide-gray-700">
            <div className="flex flex-col items-start gap-3 self-stretch sm:gap-4">
              <h2 className="text-3xl font-semibold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                Dark mode integration
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Flowbite React has native built-in support for
                <a
                  href="https://flowbite-react.com/docs/customize/dark-mode"
                  className="px-1 text-lg font-medium text-primary underline hover:no-underline dark:text-white"
                  target="_blank"
                >
                  dark mode
                </a>
                by using Tailwind CSS and the Flowbite design system.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                All of the UI components from Flowbite React will automatically
                invert the colors when activating dark mode via browser settings
                or using a custom switcher component.
              </p>
            </div>
            <div className="flex flex-col items-start self-stretch pt-8">
              <ul className="mb-6 list-inside list-none space-y-4 font-medium text-gray-900 lg:mb-8 dark:text-white">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-primary" />
                  Increased accessibility based on room brightness
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-primary" />
                  Better visibility for users with low vision
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-primary" />
                  Improved readability for users with light sensitivity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-primary" />
                  High quality UI/UX design for modern applications
                </li>
              </ul>
              <div className="flex flex-row gap-4">
                <a
                  href="https://www.davegray.codes/posts/light-dark-mode-nextjs-app-router-tailwind"
                  className="flex items-center gap-2 font-medium text-primary hover:underline"
                  target="_blank"
                >
                  Learn how to integrate dark mode in React
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkModeIntegrations;
