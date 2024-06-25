import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const ServiceC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start justify-between gap-24 py-1 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <h2 className="text-3xl font-semibold leading-none text-gray-900 lg:text-4xl dark:text-white">
                Design with Figma
              </h2>
              <p className="text-lg dark:text-gray-400">
                Get started with the most popular and definitive design system
                built in Figma and used by thousands of designers and agencies
                that is compatible across multiple frameworks in the Flowbite
                ecosystem including React, Vue, Svelte, and Flowbite.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 dark:text-gray-400">
              <p className="self-stretch">
                Check out the following resources to learn more about My
                Personal Portfolio using Figma:
              </p>
              <div className="isolate flex flex-col items-start gap-4 self-stretch">
                <a
                  href=""
                  className="inline-flex max-w-lg items-center justify-start gap-5 self-stretch rounded-lg border border-gray-300 bg-white px-4 py-3.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 sm:gap-7 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    width="18"
                    height="25"
                    viewBox="0 0 18 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_18_290731)">
                      <path
                        d="M4.38242 24.8955C6.80071 24.8955 8.76338 23.1035 8.76338 20.8955V16.8955H4.38242C1.96413 16.8955 0.00146484 18.6875 0.00146484 20.8955C0.00146484 23.1035 1.96413 24.8955 4.38242 24.8955Z"
                        fill="#0ACF83"
                      ></path>
                      <path
                        d="M0.00146484 12.8955C0.00146484 10.6875 1.96413 8.89551 4.38242 8.89551H8.76338V16.8955H4.38242C1.96413 16.8955 0.00146484 15.1035 0.00146484 12.8955Z"
                        fill="#A259FF"
                      ></path>
                      <path
                        d="M0.00195312 4.89551C0.00195312 2.68751 1.96462 0.895508 4.38291 0.895508H8.76387V8.8955H4.38291C1.96462 8.8955 0.00195312 7.1035 0.00195312 4.89551Z"
                        fill="#F24E1E"
                      ></path>
                      <path
                        d="M8.76367 0.895508H13.1446C15.5629 0.895508 17.5256 2.68751 17.5256 4.89551C17.5256 7.1035 15.5629 8.8955 13.1446 8.8955H8.76367V0.895508Z"
                        fill="#FF7262"
                      ></path>
                      <path
                        d="M17.5256 12.8955C17.5256 15.1035 15.5629 16.8955 13.1446 16.8955C10.7263 16.8955 8.76367 15.1035 8.76367 12.8955C8.76367 10.6875 10.7263 8.89551 13.1446 8.89551C15.5629 8.89551 17.5256 10.6875 17.5256 12.8955Z"
                        fill="#1ABCFE"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_18_290731">
                        <rect
                          width="17.5273"
                          height="24"
                          fill="white"
                          transform="translate(0 0.895508)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Preview in Figma
                  <div className="ml-auto hidden sm:block">
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden h-full flex-col items-center justify-center lg:flex">
            <div className="relative rounded-xl">
              <img
                alt="Tailwind CSS with React code"
                loading="lazy"
                width="549"
                height="496"
                decoding="async"
                data-nimg="1"
                className="dark:hidden"
                src="https://flowbite-react.com/_next/image?url=%2Fimages%2Ffeature-sections%2Fflowbite-react-figma.png&w=640&q=75"
              ></img>
              <img
                alt="React dark mode preview (inverted colors)"
                loading="lazy"
                width="608"
                height="443"
                decoding="async"
                data-nimg="1"
                className="hidden dark:block text-transparent"
                src="/images/figma-dark.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceC;
