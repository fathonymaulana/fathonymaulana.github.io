import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";

const projects = [
  {
    id: 1,
    title: "TITLE HERE",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iure molestias numquam,",
    img: "/images/phone.png",
    darkImg: "/images/dark-phone.png",
  },
  {
    id: 2,
    title: "TITLE HERE",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iure molestias numquam,",
    img: "/images/phone.png",
    darkImg: "/images/dark-phone.png",
  },
  {
    id: 3,
    title: "TITLE HERE",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iure molestias numquam,",
    img: "/images/phone.png",
    darkImg: "/images/dark-phone.png",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-12 lg:px-20 lg:pt-24">
        <div className="flex flex-col items-center gap-4 sm:gap-4">
          <span className="text-sm text-primary font-semibold">Projects</span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl dark:text-white">
            Showcase of my frontend related work
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500 dark:text-gray-400">
            Explore the entire collection of projects created with
            <span className="font-medium text-primary dark:text-white pl-1">
            React, Flowbite, and Tailwind CSS
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          {projects.map((project, index) => (
            <a
              href="/"
              className="flex flex-col rounded-lg border overflow-hidden border-gray-200 bg-white p-0 text-gray-500 shadow-none hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:shadow-lg-light"
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
                <div className="relative h-4/6 dark:hidden w-36">
                  <img src={project.img} alt="project image" />
                </div>
                <div className="relative hidden h-4/6 dark:block w-36">
                  <img src={project.darkImg} alt="project dark image" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
