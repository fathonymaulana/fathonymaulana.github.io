import React from "react";

const License = () => {
  return (
    <div className="w-full min-w-0">
      <div className="flex">
        <div className="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
          <main>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              <div className="pb-8">
                <h1 className="mb-2 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  License - Tonydev
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Learn more about the licensing rights of the Tonydev
                </p>
              </div>
              <div id="mainContent" className="py-8 flex flex-col gap-4">
                <h2
                  className="group relative z-20 scroll-mt-20 text-2xl font-bold text-gray-900 dark:text-white"
                  id="mit-license"
                >
                  <a
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                    href="#mit-license"
                  >
                    <span className="icon icon-link"></span>
                  </a>
                  MIT License
                  <a
                    href="#mit-license"
                    aria-label="Link to this section: [object Object],MIT License"
                    className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </a>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Copyright © 2024 Bergside Inc.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
                <div className="h-[20vh]"></div>
              </div>
            </div>
          </main>
          <aside
            className="flex font-medium leading-6"
            aria-label="Previous and next page navigation"
          >
            <a
              className="mr-8 flex items-center justify-center text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="Introduction"
            >
              <svg
                className="mr-2 size-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                ></path>
              </svg>
              Introduction
            </a>
            <a
              className="ml-auto flex items-center justify-center text-right text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="Figma"
            >
              Figma
              <svg
                className="ml-2 size-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                ></path>
              </svg>
            </a>
          </aside>
        </div>
        <div className="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm"></div>
      </div>
    </div>
  );
};

export default License;
