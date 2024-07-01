"use client";

import React from "react";
import { Button, Timeline } from "flowbite-react";
import Banner from "@/components/Banner";

const figma = () => {
  return (
    <div className="w-full min-w-0">
      <div className="flex">
        <div className="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
          <main>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              <div className="pb-8">
                <span className="text-sm text-primary font-semibold">
                  My Figma Creations
                </span>
                <h1 className="mb-4 mt-4 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Explore my design projects and mockups created with{" "}
                  <span className="text-primary ml-1 md:ml-0">Figma</span>.
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  As a passionate Frontend Developer, I leverage Figma to create
                  stunning, user-friendly designs. Below you'll find a selection
                  of my projects showcasing my design process, from ideation to
                  interactive prototypes.
                </p>
              </div>
              <div className="py-8 flex flex-col gap-4">
                <h2
                  className="group relative z-20 text-2xl font-bold text-gray-900 dark:text-white"
                  id="getting-started"
                >
                  <a
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                    href="#getting-started"
                  >
                    <span className="icon icon-link"></span>
                  </a>
                  Design Projects:
                  <a
                    href="#getting-started"
                    aria-label="Link to this section: [object Object],Getting started"
                    className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </a>
                </h2>
                <a
                  href="https://www.figma.com/design/WrtvXY515WsHeMWTNrFo6Z/Tony-Portfolio?node-id=64-664&t=gKFmeX3p26VskFMd-1"
                  target="_blank"
                  className=" my-4"
                >
                  <img
                    src="/images/mockup.png"
                    alt="Figma"
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-xl hover:border-gray-300 hover:shadow-lg dark:hover:border-gray-600 dark:hover:shadow-lg-light"
                  />
                </a>
                <div className="flex flex-row items-center gap-2">
                  <a
                    href="https://www.figma.com/design/WrtvXY515WsHeMWTNrFo6Z/Tony-Portfolio?node-id=64-664&t=gKFmeX3p26VskFMd-1"
                    target="_blank"
                    className="flex items-center justify-center rounded-lg px-4 py-3 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary"
                  >
                    Open in figma
                  </a>
                </div>
                <h2
                  className="group relative z-20 mt-8 text-2xl font-bold text-gray-900 dark:text-white"
                  id="getting-started"
                >
                  <a
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                    href="#getting-started"
                  >
                    <span className="icon icon-link"></span>
                  </a>
                  Project Details:
                  <a
                    href="#getting-started"
                    aria-label="Link to this section: [object Object],Getting started"
                    className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </a>
                </h2>
                <Timeline>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>May 2024</Timeline.Time>
                      <Timeline.Title>
                        Tony's Personal Portfolio landing pages website
                      </Timeline.Title>
                      <Timeline.Body>
                        A complete redesign of an e-commerce website to enhance
                        user experience and increase conversions. I utilized
                        modern UI/UX principles and ensured a responsive design.
                        <div className="mr-4">
                          <ul className="mt-4 font-semibold text-black dark:text-white flex flex-wrap flex-row items-center max-w-2xl gap-4">
                            Tags
                            <li className="font-normal rounded border text-gray-600 dark:text-gray-400 border-gray-200 py-2 px-4 text-xs w-fit">
                              UI Design
                            </li>
                            <li className="font-normal rounded border text-gray-600 dark:text-gray-400 border-gray-200 py-2 px-4 text-xs w-fit">
                              Prototyping
                            </li>
                            <li className="font-normal rounded border text-gray-600 dark:text-gray-400 border-gray-200 py-2 px-4 text-xs w-fit">
                              Wireframing
                            </li>
                          </ul>
                        </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </div>

              <div className="py-8">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                  My Design Process
                </h2>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  My design process is a blend of creativity and strategic
                  thinking. Here's how I use Figma in my workflow:
                </p>
                <ul className="mt-4 ml-4 font-semibold text-lg text-black dark:text-white">
                  Research and Ideation
                  <li className="mt-2 ml-4 font-normal list-disc text-gray-600 dark:text-gray-400 text-sm w-fit">
                    Gather information and brainstorm ideas to define project
                    goals.
                  </li>
                </ul>
                <ul className="mt-4 ml-4 font-semibold text-lg text-black dark:text-white">
                  Wireframing
                  <li className="mt-2 ml-4 font-normal list-disc text-gray-600 dark:text-gray-400 text-sm w-fit">
                    Create initial wireframes to outline the structure and
                    layout.
                  </li>
                </ul>
                <ul className="mt-4 ml-4 font-semibold text-lg text-black dark:text-white">
                  UI Design
                  <li className="mt-2 ml-4 font-normal list-disc text-gray-600 dark:text-gray-400 text-sm w-fit">
                    Design detailed user interfaces, focusing on aesthetics and
                    usability.
                  </li>
                </ul>
                <ul className="mt-4 ml-4 font-semibold text-lg text-black dark:text-white">
                  Prototyping
                  <li className="mt-2 ml-4 font-normal list-disc text-gray-600 dark:text-gray-400 text-sm w-fit">
                    Develop interactive prototypes to visualize the user
                    experience.
                  </li>
                </ul>
                <ul className="mt-4 ml-4 font-semibold text-lg text-black dark:text-white">
                  Testing and Feedback
                  <li className="mt-2 ml-4 font-normal list-disc text-gray-600 dark:text-gray-400 text-sm w-fit">
                    Test designs with users and gather feedback for
                    improvements.
                  </li>
                </ul>
                <ul className="mt-8 font-semibold text-black dark:text-white flex flex-wrap flex-row items-center max-w-2xl gap-4">
                  Tools Used:
                  <li className="font-normal rounded border text-gray-600 dark:text-gray-400 border-gray-200 py-2 px-4 text-xs w-fit">
                    Figma Plugins (Auto Layout, Unsplash)
                  </li>
                  <li className="font-normal rounded border text-gray-600 dark:text-gray-400 border-gray-200 py-2 px-4 text-xs w-fit">
                    Adobe Photoshop
                  </li>
                  <li className="font-normal rounded border text-gray-600 dark:text-gray-400 border-gray-200 py-2 px-4 text-xs w-fit">
                    Sketch
                  </li>
                  <li className="font-normal rounded border text-gray-600 dark:text-gray-400 border-gray-200 py-2 px-4 text-xs w-fit">
                    Zeplin
                  </li>
                </ul>
              </div>

              <div className="py-8">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                  Interactive Prototypes
                </h2>
                <ul className="mt-4 ml-4 font-semibold text-lg text-black dark:text-white">
                  Tony's Personal Portfolio Web App Prototype
                  <li className="mt-2 ml-4 font-normal list-disc text-gray-600 dark:text-gray-400 text-sm w-fit">
                    Experience the interactive prototype of the Personal
                    Portfolio Web App app I designed. Click the link below to
                    explore the user journey and interactions.
                    <div className="flex flex-row items-center gap-2 mt-2">
                      <a
                        href="https://www.figma.com/design/WrtvXY515WsHeMWTNrFo6Z/Tony-Portfolio?node-id=64-664&t=gKFmeX3p26VskFMd-1"
                        target="_blank"
                        className="flex items-center justify-center rounded-lg px-4 py-3 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                      >
                        Try Prototype
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="my-8 rounded-xl overflow-hidden">
                  <Banner />
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
              className="mr-8 flex items-center justify-center text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="License"
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
              License
            </a>
            <a
              className="ml-auto flex items-center justify-center text-right text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="About"
            >
              About
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

export default figma;
