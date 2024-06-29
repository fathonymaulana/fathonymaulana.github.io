"use client";
import React from "react";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full min-w-0">
      <div className="flex">
        <div className="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
          <main>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              <div className="pb-8">
                <span className="text-sm text-primary font-semibold">
                  About
                </span>
                <h1 className="mb-4 mt-4 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Website creation services using React, Flowbite & Tailwind CSS
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Let's start building a modern web application using React
                  components based on Tailwind CSS
                </p>
              </div>
              <div className="py-8">
                <p className="text-gray-600 dark:text-gray-400">
                  I started my professional career as a IT Quality Assurance
                  Tester around 2019. In 2022, I resigned from my job at
                  <a
                    href="https://mitech.co.id/"
                    className="hover:underline font-semibold dark:text-white mx-1"
                    target="_blank"
                  >
                    PT Mandiri International Technology
                  </a>
                  , and
                  <a
                    href="https://bankmandiri.co.id/"
                    className="hover:underline font-semibold dark:text-white mx-1"
                    target="_blank"
                  >
                    PT Bank Mandiri
                  </a>
                  as the client to focus on front-end developer career and take
                  up some freelance projects at
                  <a
                    href="https://www.upwork.com/freelancers/~0165181e435c664a96?viewMode=1"
                    className="hover:underline font-semibold dark:text-white mx-1"
                    target="_blank"
                  >
                    UpWork.com
                  </a>
                  .
                </p>
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
                  Getting started
                  <a
                    href="#getting-started"
                    aria-label="Link to this section: [object Object],Getting started"
                    className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </a>
                </h2>
                <p className="my-8 text-gray-600 dark:text-gray-400">
                  All about my freelance and professional work experience.
                </p>
                <Timeline>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>November 2022 - Present</Timeline.Time>
                      <Timeline.Title>
                        Front-end Developer (Freelancer) at UpWork.com
                      </Timeline.Title>
                      <Timeline.Body>
                        <div className="flex items-start">
                          ✓ Develop and maintain responsive web pages using
                          Tailwind CSS.{" "}
                        </div>
                        <div className="flex items-start">
                          ✓ Collaborate with designers and back-end developers
                          to implement website features and functionality.
                        </div>
                        <div className="flex items-start">
                          ✓ Troubleshoot and debug issues with website
                          performance and functionality.{" "}
                        </div>
                        <div className="flex items-start">
                          ✓ Optimize website for speed and user experience.
                        </div>
                      </Timeline.Body>
                      <Link
                        href="https://www.upwork.com/freelancers/~0165181e435c664a96?viewMode=1"
                        passHref
                        target="_blank"
                      >
                        <Button color="gray">
                          Learn More
                          <HiArrowNarrowRight className="mt-1 ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>
                        December 2019 - November 2022
                      </Timeline.Time>
                      <Timeline.Title>
                        IT TQA | Middle Role at PT Mandiri International
                        Technology
                      </Timeline.Title>
                      <Timeline.Body>
                        <div className="flex items-start">
                          ✓ Assigned as coordinator in the team at Role Middle
                          at PT. Bank Mandiri (persero) tbk
                        </div>
                        <div className="flex items-start">
                          ✓ Participate in Requirements Analysis
                        </div>
                        <div className="flex items-start">
                          ✓ Participate in Test Plan Board Meetings
                        </div>
                        <div className="flex items-start">
                          ✓ Coordinate with various stakeholders (User Team,
                          Development Team, Tester Quality Assurance Team)
                        </div>
                        <div className="flex items-start">
                          ✓ Conduct Sanity/Smoked Test before SIT, UAT
                        </div>
                        <div className="flex items-start">
                          ✓ Carrying out SIT, UAT using the Waterfall method
                        </div>
                        <div className="flex items-start">
                          ✓ Carrying out SIT, UAT with Agile (Scrum) methods
                        </div>
                        <div className="flex items-start">
                          ✓ Create Test Scripts (Positive, Negative, Regression
                          Test)
                        </div>
                        <div className="flex items-start">
                          ✓ Black Box/White Box Testing
                        </div>
                        <div className="flex items-start">
                          ✓ Respond to the absence of problems with Project
                          items in accordance with applicable Requirements
                        </div>

                        <div className="flex items-start">
                          ✓ Making Reports After SIT, UAT Testing
                        </div>
                        <div className="flex items-start">
                          ✓ Completed -/+ 80 Projects
                        </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>July 2019 - November 2019</Timeline.Time>
                      <Timeline.Title>
                        Junior Analyst at PT Ikonsultan Inovatama
                      </Timeline.Title>
                      <Timeline.Body>
                        <div className="flex items-center">
                          ✓ Carrying out SIT, UAT using the Waterfall method
                        </div>
                        <div className="flex items-center">
                          ✓ Blackbox/Whitebox Testing
                        </div>
                        <div className="flex items-center">
                          ✓ Looking for Issues/Defects in the given project
                        </div>
                        <div className="flex items-center">
                          ✓ Completed -/+ 3,000 of -/+ 7,000 Test Cases
                        </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
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
              href="Figma"
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
              Figma
            </a>
            <a
              className="ml-auto flex items-center justify-center text-right text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="Projects"
            >
              Projects
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

export default About;
