"use client";

import React from "react";
import { Accordion } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { ArrowUpRightFromSquare, BookIcon } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Dapur Nakama",
    description:
      "Website app project for a local food business in Jatiwaringin, Indonesia.",
    date: "01.12.2022",
    studyCase: "#",
    link: "#",
    img: "/images/brand/dapur-nakama.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "N-Aquatic",
    description:
      "Website app project for a local aquascape business in Jatiwaringin, Indonesia.",
    date: "01.12.2022",
    studyCase: "#",
    link: "#",
    img: "/images/brand/n-aquatic.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "BELGARETI",
    description:
      "Web app and web portfolio for hotel and guess house business in Indonesia.",
    date: "01.12.2022",
    studyCase: "#",
    link: "#",
    img: "/images/brand/belgareti.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "AJAIB",
    description:
      "Admin Dashboard owned by BELGARETI Group for hotel management needs.",
    date: "01.12.2022",
    studyCase: "#",
    link: "#",
    img: "/images/brand/belgareti.png",
    tag: ["All", "Web"],
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
                  <div className="w-full h-full py-6 md:py-8 px-6 flex flex-col gap-2 items-center justify-center text-center rounded-lg border overflow-hidden border-gray-200 bg-white p-0 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                    <img
                      src="./images/project-light.png"
                      alt="Vector"
                      width={100}
                    />
                    <h2 className="text-2xl text-black dark:text-white font-semibold tracking-tight">
                      All projects list
                    </h2>
                    <p className="text-sm">
                      Still not enough? Click on a tile to view the project.
                    </p>
                  </div>
                  {projectsData.map((project) => (
                    <div className="relative w-full h-full py-6 md:py-2 px-6 flex flex-col gap-4 md:gap-2 items-start justify-center text-left rounded-lg border overflow-hidden border-gray-200 bg-white p-0 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 shadow-none hover:border-gray-300 hover:shadow-lg dark:hover:border-gray-600 dark:hover:shadow-lg-light">
                      <div className="w-full flex justify-between text-sm items-center">
                        <img
                          src={project.img}
                          alt="Brand Logo"
                          width={40}
                          height={40}
                        />
                        <p>{project.date}</p>
                      </div>
                      <h2 className="text-2xl text-black dark:text-white font-semibold tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-sm">{project.description}</p>
                      <div className="flex flex-col mt-4 gap-2">
                        <a
                          href={project.studyCase}
                          className="flex flex-row items-center gap-2 text-sm hover:underline"
                        >
                          <BookIcon width={18} />
                          View study case
                        </a>
                        <div className="flex flex-col justify-between gap-4">
                          <a
                            href={project.link}
                            className="flex flex-row items-center gap-2 text-sm hover:underline"
                          >
                            <ArrowUpRightFromSquare width={18} />
                            Visit website
                          </a>
                          <div className="flex flex-wrap gap-2 md:hidden">
                            <Avatar.Group>
                              <Avatar
                                img="/images/avatar/Ellipse 2.png"
                                rounded
                                stacked
                              />
                              <Avatar
                                img="/images/avatar/Ellipse 3.png"
                                rounded
                                stacked
                              />
                              <Avatar
                                img="/images/avatar/Ellipse 4.png"
                                rounded
                                stacked
                              />
                              <Avatar.Counter total={6} href="#" />
                            </Avatar.Group>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-8">
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>
                      What technologies do you use in your frontend development
                      projects?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        In my frontend development projects, I primarily use
                        Next.js for its powerful React-based framework
                        capabilities, Tailwind CSS for efficient and
                        customizable styling, and Figma for designing and
                        prototyping user interfaces. This combination allows me
                        to build responsive, visually appealing, and
                        high-performance web applications.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      Can you explain how you approach the design and
                      development process?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        My approach to design and development involves several
                        key steps:
                      </p>
                      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 flex flex-col gap-4">
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Planning and Requirements Gathering:
                            </span>{" "}
                            I start by understanding the project requirements
                            and objectives. This often involves discussions with
                            stakeholders to ensure clarity.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              I start by Design and Prototyping:
                            </span>{" "}
                            Using Figma, I create wireframes and prototypes to
                            visualize the user interface and user experience.
                            This step includes iterating on designs based on
                            feedback until the final design is approved.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Development:
                            </span>{" "}
                            I use Next.js to set up the project structure and
                            develop the application, implementing the designs
                            using Tailwind CSS for styling. I ensure the code is
                            clean, modular, and maintainable.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Testing and Optimization:
                            </span>{" "}
                            I rigorously test the application across different
                            devices and browsers to ensure compatibility and
                            performance. I also optimize the code and assets to
                            enhance loading times and user experience.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Deployment and Maintenance:
                            </span>{" "}
                            Once the application is ready, I deploy it to a
                            suitable hosting environment. Post-deployment, I
                            provide ongoing maintenance and updates as required.
                          </p>
                        </li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      How do you ensure the quality and performance of your web
                      applications?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Ensuring the quality and performance of web applications
                        is a top priority for me. Here are the steps I take:
                      </p>
                      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 flex flex-col gap-4">
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Code Quality:
                            </span>{" "}
                            I follow best coding practices and use modern
                            development tools to write clean, readable, and
                            maintainable code. I also conduct regular code
                            reviews to catch and fix potential issues early.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Responsive Design:
                            </span>{" "}
                            Using Tailwind CSS, I ensure that the application is
                            fully responsive and looks great on all devices,
                            from mobile phones to desktops.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Performance Optimization:
                            </span>{" "}
                            I optimize the application's performance by
                            minimizing the use of unnecessary libraries,
                            implementing lazy loading, optimizing images, and
                            using efficient coding techniques. I also leverage
                            Next.js features like static site generation and
                            server-side rendering for improved performance.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              Testing:
                            </span>{" "}
                            I perform comprehensive testing, including unit
                            tests, integration tests, and end-to-end tests, to
                            identify and resolve bugs and issues. Automated
                            testing tools help streamline this process.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-medium mr-1 text-black dark:text-white">
                              User Feedback:
                            </span>{" "}
                            I value user feedback and continuously monitor the
                            application for any issues reported by users. This
                            feedback helps me make necessary improvements and
                            ensure a smooth user experience.
                          </p>
                        </li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
              <div className="h-[20vh]"></div>
            </div>
          </main>
          <aside
            className="flex font-medium leading-6"
            aria-label="Previous and next page navigation"
          >
            <a
              className="mr-8 flex items-center justify-center text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="About"
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
              About
            </a>
            <a
              className="ml-auto flex items-center justify-center text-right text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="Contact"
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

export default ProjectDetail;
