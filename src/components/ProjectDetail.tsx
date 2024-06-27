"use client";

import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: 1,
    title: "Dapur Nakama",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iure molestias numquam,",
    img: "/images/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "N-Aquatic",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iure molestias numquam,",
    img: "/images/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Ajaib",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iure molestias numquam,",
    img: "/images/3.png",
    tag: ["All", "Mobile"],
  },
];

const ProjectDetail = () => {

  return (
    <div className="w-full min-w-0">
      <div className="flex">
        <div className="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
          <main>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              <div className="pb-8">
                <span className="text-sm text-primary font-semibold">
                  Projects
                </span>
                <h1 className="mb-4 mt-4 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  All about my freelance and professional work experience.
                </h1>
                <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                  Here you'll find a collection of my projects, spanning web
                  development, mobile apps, and graphic design. Each project
                  highlights my passion for creating functional and
                  aesthetically pleasing solutions
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Explore the entire collection of projects created with
                  <span className="font-medium text-primary dark:text-white pl-1">
                    React, Flowbite, and Tailwind CSS
                  </span>
                </p>
                <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3 mt-12">
                  {projectsData.map((project) => (
                    <a
                      href="/"
                      className="flex flex-col rounded-lg border overflow-hidden border-gray-200 bg-white p-0 text-gray-500 shadow-none hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:shadow-lg-light"
                      key={project.id}
                    >
                      <div className="flex items-center justify-between rounded-t-md border-b border-gray-200 bg-gray-50 px-5 py-2.5 dark:border-gray-700 dark:bg-gray-700">
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          {project.title}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                        </span>
                      </div>
                      <div className="flex h-52 items-center justify-center">
                        <div className="relative h-full w-full bg-cover dark:hidden">
                          <img src={project.img} alt="project image" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="h-[20vh]"></div>
              </div>
            </div>
          </main>
          <aside
            className="flex font-medium leading-6"
            aria-label="Previous and next page navigation"
          >
            <a
              className="ml-auto flex items-center justify-center text-right text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="License"
            >
              Contact
              <svg
                className="ml-2 size-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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

export default ProjectDetail;
