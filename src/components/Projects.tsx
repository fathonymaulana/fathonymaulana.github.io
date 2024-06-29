"use client";

import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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

const Projects = () => {
  return (
    <section className="border-t border-gray-200 py-0 dark:border-gray-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-12 lg:px-20 lg:py-24">
        <div className="flex flex-col items-center gap-4 sm:gap-4">
          <span className="text-sm text-primary font-semibold">Projects</span>
          <h2 className="text-3xl font-semibold text-center tracking-tight text-gray-900 lg:text-4xl dark:text-white">
            All about my freelance and professional work experience.
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500 dark:text-gray-400">
            Explore the entire collection of projects created with
            <span className="font-medium text-primary dark:text-white pl-1">
              React, Flowbite, and Tailwind CSS
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
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
                <div className="relative h-full w-fit bg-cover flex items-center justify-center">
                  <img src={project.img} alt="project image" />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mb-4 flex w-full justify-center text-center">
          <a
            href="Projects"
            type="button"
            className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 rounded-lg"
          >
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
              View all components
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
