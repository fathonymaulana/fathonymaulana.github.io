"use client";
import React from "react";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="w-full min-w-0">
      <div className="flex">
        <div className="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
          <main>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              <div className="pb-8">
                <span className="text-sm text-primary font-semibold">
                  Introduction
                </span>
                <h1 className="mb-4 mt-4 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Tony Portfolio
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Welcome to Tony Portfolio, the repository for my personal
                  portfolio!
                </p>
              </div>
              <div className="py-8">
                <p className="text-gray-600 dark:text-gray-400">
                  This repository showcases my projects, skills, and
                  accomplishments as a developer. It includes a collection of my
                  work, from coding projects to professional experiences,
                  highlighting my journey and expertise in the tech world.
                </p>
                <h2
                  className="group relative z-20 my-8 text-2xl font-bold text-gray-900 dark:text-white"
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
                  Features
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
                      <Timeline.Title>Personal Projects:</Timeline.Title>
                      <Timeline.Body>
                        A variety of projects demonstrating my skills in
                        different programming languages and frameworks.
                        <img
                          src="/images/mockup.png"
                          alt=""
                          className=" my-4 w-full rounded-xl border border-gray-300 dark:border-gray-600"
                        />
                      </Timeline.Body>
                      <Link href="Projects" passHref>
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
                      <Timeline.Title>Professional Experience:</Timeline.Title>
                      <Timeline.Body>
                        <p className="text-gray-600 dark:text-gray-400">
                          I started my professional career as a IT Quality
                          Assurance Tester around 2019. In 2022, I resigned from
                          my job at
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
                          as the client to focus on front-end developer career
                          and take up some freelance projects at
                          <a
                            href="https://www.upwork.com/freelancers/~0165181e435c664a96?viewMode=1"
                            className="hover:underline font-semibold dark:text-white mx-1"
                            target="_blank"
                          >
                            UpWork.com
                          </a>
                          .
                        </p>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Skills:</Timeline.Title>
                      <Timeline.Body>
                        A comprehensive list of my technical skills and
                        proficiencies:
                        <div className="mt-4 text-black dark:text-white text-lg font-semibold">
                          Next.js
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            1. Routing and Navigation
                            <li className="mt-2 ml-8 font-normal">
                              Implementing dynamic and static routes
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Nested routing and route protection
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            2. Server-Side Rendering (SSR) and Static Site
                            Generation (SSG)
                            <li className="mt-2 ml-8 font-normal">
                              Configuring SSR and SSG for optimal performance
                              and SEO
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Utilizing{" "}
                              <span className="font-mono text-sm font-semibold text-black dark:text-white">
                                `getStaticProps`
                              </span>
                              ,{" "}
                              <span className="font-mono text-sm font-semibold text-black dark:text-white">
                                `getStaticPaths`
                              </span>
                              , and{" "}
                              <span className="font-mono text-sm font-semibold text-black dark:text-white">
                                `getServerSideProps`
                              </span>
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            3. API Routes
                            <li className="mt-2 ml-8 font-normal">
                              Creating API endpoints within a Next.js
                              application
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Handling API requests and responses
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            4. Data Fetching
                            <li className="mt-2 ml-8 font-normal">
                              Integrating with RESTful APIs and GraphQL
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Using{" "}
                              <span className="font-mono text-sm font-semibold text-black dark:text-white">
                                `SWr`
                              </span>{" "}
                              and{" "}
                              <span className="font-mono text-sm font-semibold text-black dark:text-white">
                                `React Query`
                              </span>{" "}
                              for data fetching and caching
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            5. Image Optimization
                            <li className="mt-2 ml-8 font-normal">
                              Utilizing Next.js Image component for responsive
                              and optimized images
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            6. Styling
                            <li className="mt-2 ml-8 font-normal">
                              Integrating Tailwind CSS with Next.js
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Using styled-components or CSS modules for
                              component-level styles
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            7. Authentication and Authorization
                            <li className="mt-2 ml-8 font-normal">
                              Implementing authentication using libraries like
                              NextAuth.js
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Protecting routes and handling user roles
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            8. Performance Optimization
                            <li className="mt-2 ml-8 font-normal">
                              Code splitting and lazy loading
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Analyzing and optimizing application performance
                              with tools like Lighthouse
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            9. SEO Best Practices
                            <li className="mt-2 ml-8 font-normal">
                              Using Head component for meta tags and structured
                              data
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Implementing social sharing tags (Open Graph,
                              Twitter Cards)
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            10. Deployment and Hosting
                            <li className="mt-2 ml-8 font-normal">
                              Deploying applications on platforms like Vercel,
                              Netlify, or custom servers
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Configuring CI/CD pipelines for automated
                              deployments
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 text-black dark:text-white text-lg font-semibold">
                          Tailwind CSS
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            1. Utility-First CSS
                            <li className="mt-2 ml-8 font-normal">
                              Applying utility classes for rapid UI development
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Understanding the philosophy and benefits of
                              utility-first CSS
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            2. Responsive Design
                            <li className="mt-2 ml-8 font-normal">
                              Creating responsive layouts using Tailwind's
                              responsive utilities
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Ensuring cross-browser and cross-device
                              compatibility
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            3. Customization
                            <li className="mt-2 ml-8 font-normal">
                              Customizing the Tailwind configuration (
                              <span className="font-mono text-sm font-semibold text-black dark:text-white">
                                `tailwind.config.js`
                              </span>{" "}
                              )
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Extending Tailwind with custom themes, colors, and
                              plugins
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            4. Component Styling
                            <li className="mt-2 ml-8 font-normal">
                              Building reusable and consistent UI components
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Applying conditional styles and states using
                              Tailwind
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            5. Performance Optimization
                            <li className="mt-2 ml-8 font-normal">
                              Purging unused CSS for optimal performance
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Implementing best practices for minimal CSS output
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            6. Integrating with Next.js
                            <li className="mt-2 ml-8 font-normal">
                              Setting up Tailwind in a Next.js project
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Using Tailwind with CSS-in-JS solutions if needed
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 text-black dark:text-white text-lg font-semibold">
                          Figma
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            1. UI/UX Design
                            <li className="mt-2 ml-8 font-normal">
                              Creating wireframes, mockups, and prototypes
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Designing intuitive and user-friendly interfaces
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            2. Collaboration and Handoff
                            <li className="mt-2 ml-8 font-normal">
                              Using Figma's collaboration tools for real-time
                              teamwork
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Preparing designs for developer handoff with
                              proper annotations
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            3. Component Libraries
                            <li className="mt-2 ml-8 font-normal">
                              Building and maintaining design systems and
                              component libraries
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Utilizing reusable components, styles, and assets
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            4. Prototyping and Interaction Design
                            <li className="mt-2 ml-8 font-normal">
                              Creating interactive prototypes to demonstrate
                              user flows
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Using advanced prototyping features like overlays,
                              transitions, and animations
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            5. Design to Code
                            <li className="mt-2 ml-8 font-normal">
                              Translating Figma designs into pixel-perfect code
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Ensuring design consistency and adherence to UI
                              guidelines
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            6. Accessibility
                            <li className="mt-2 ml-8 font-normal">
                              Designing accessible interfaces considering WCAG
                              guidelines
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Implementing accessible features in code based on
                              Figma designs
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 text-black dark:text-white text-lg font-semibold">
                          General Frontend Development Skills
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            1. HTML/CSS
                            <li className="mt-2 ml-8 font-normal">
                              Writing semantic HTML and modular CSS
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Implementing modern CSS features like Grid,
                              Flexbox, and custom properties
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            2. JavaScript/TypeScript
                            <li className="mt-2 ml-8 font-normal">
                              Proficiency in modern JavaScript (ES6+) and
                              TypeScript
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Writing clean, maintainable, and scalable code
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            3. React.js
                            <li className="mt-2 ml-8 font-normal">
                              Building functional components with hooks
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Managing state and side effects with React and
                              context API
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            4. Version Control
                            <li className="mt-2 ml-8 font-normal">
                              Using Git for version control and collaboration
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Understanding branching strategies and pull
                              request workflows
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            5. Testing
                            <li className="mt-2 ml-8 font-normal">
                              Writing unit and integration tests with Jest and
                              React Testing Library
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Ensuring code quality and reliability through
                              automated testing
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            6. Tooling and Build Systems
                            <li className="mt-2 ml-8 font-normal">
                              Configuring and optimizing Webpack, Babel, and
                              other build tools
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Using package managers like npm or Yarn
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 text-black dark:text-white text-lg font-semibold">
                          Soft Skills
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            1. Problem Solving
                            <li className="mt-2 ml-8 font-normal">
                              Analytical thinking and troubleshooting
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Creative solutions to complex challenges
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            2. Communication
                            <li className="mt-2 ml-8 font-normal">
                              Clear and effective communication with team
                              members and stakeholders
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Documenting processes, decisions, and code
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            3. Collaboration
                            <li className="mt-2 ml-8 font-normal">
                              Working effectively in a team environment
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Contributing to a positive and productive work
                              culture
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            4. Adaptability
                            <li className="mt-2 ml-8 font-normal">
                              Staying current with industry trends and
                              technologies
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Learning and adopting new tools and frameworks as
                              needed
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            5. Testing
                            <li className="mt-2 ml-8 font-normal">
                              Writing unit and integration tests with Jest and
                              React Testing Library
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Ensuring code quality and reliability through
                              automated testing
                            </li>
                          </ul>
                          <ul className="ml-4 my-4 text-gray-600 list-disc text-sm font-medium">
                            6. Tooling and Build Systems
                            <li className="mt-2 ml-8 font-normal">
                              Configuring and optimizing Webpack, Babel, and
                              other build tools
                            </li>
                            <li className="mt-2 ml-8 font-normal">
                              Using package managers like npm or Yarn
                            </li>
                          </ul>
                        </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Education:</Timeline.Title>
                      <Timeline.Body>
                        Details of my educational background and certifications:
                        <div className="mt-4 text-black dark:text-white text-lg font-semibold">
                          Universitas Gunadarma
                        </div>
                        <p className="font-normal">
                          Bachelor of Technology (BTech), Information System
                        </p>
                        <Timeline.Time>2014-2019</Timeline.Time>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Contact Information:</Timeline.Title>
                      <Timeline.Body>
                        <p className="mb-4">
                          How to get in touch with me for collaborations or
                          opportunities.
                        </p>
                        <Link href="Contact" passHref>
                          <Button color="gray">
                            Learn More
                            <HiArrowNarrowRight className="mt-1 ml-2 h-3 w-3" />
                          </Button>
                        </Link>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </div>
              <div className="py-8">
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
                  Why hire me?
                  <a
                    href="#getting-started"
                    aria-label="Link to this section: [object Object],Getting started"
                    className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </a>
                </h2>
                <p className="my-8 text-gray-600 dark:text-gray-400">
                  As a dedicated and passionate Frontend Developer, I bring a
                  unique blend of technical expertise and creative
                  problem-solving to every project. Here’s why I’m the perfect
                  choice for your team:
                </p>
                <Timeline>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>
                        Strong Technical Proficiency
                      </Timeline.Title>
                      <Timeline.Body>
                        With a solid foundation in HTML, CSS, JavaScript, and
                        modern frameworks like React and Vue.js, I build
                        dynamic, responsive, and user-friendly web applications.
                        My keen understanding of front-end development
                        principles ensures that I can create interfaces that are
                        not only visually appealing but also functionally
                        robust.
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Attention to Detail</Timeline.Title>
                      <Timeline.Body>
                        I pride myself on my meticulous attention to detail.
                        From pixel-perfect designs to seamless animations, I
                        ensure that every element on the webpage contributes to
                        an exceptional user experience. This dedication to
                        precision translates into polished and professional end
                        products.
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Problem-Solving Mindset</Timeline.Title>
                      <Timeline.Body>
                        Challenges inspire me. Whether it’s debugging complex
                        issues or optimizing performance, I thrive on finding
                        innovative solutions. My analytical skills and
                        persistence enable me to tackle any problem head-on,
                        ensuring smooth and efficient project execution.
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>User-Centered Design</Timeline.Title>
                      <Timeline.Body>
                        Understanding the end user is at the heart of my design
                        philosophy. I leverage UX/UI best practices to create
                        interfaces that are intuitive and engaging. By putting
                        myself in the user’s shoes, I can anticipate needs and
                        deliver designs that exceed expectations.
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Collaborative Spirit</Timeline.Title>
                      <Timeline.Body>
                        I believe that the best results come from effective
                        collaboration. I’m a strong communicator and a proactive
                        team player, always ready to share ideas and contribute
                        to collective success. My ability to work seamlessly
                        with designers, back-end developers, and stakeholders
                        ensures that projects run smoothly and goals are met.
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Continuous Learning</Timeline.Title>
                      <Timeline.Body>
                        The tech landscape is ever-evolving, and I’m committed
                        to staying ahead of the curve. I continuously enhance my
                        skills through courses, workshops, and staying updated
                        with industry trends. This dedication to lifelong
                        learning means I bring fresh, cutting-edge solutions to
                        your projects.
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title>Proven Track Record</Timeline.Title>
                      <Timeline.Body>
                        My portfolio speaks for itself. With a range of
                        successful projects across different industries, I have
                        a proven ability to deliver high-quality work on time
                        and within budget. Client satisfaction and positive
                        feedback are testaments to my commitment to excellence.
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
                <div className="h-[20vh]"></div>
              </div>
            </div>
          </main>
          <aside
            className="flex font-medium leading-6"
            aria-label="Previous and next page navigation"
          >
            <a
              className="ml-auto flex items-center justify-center text-right text-gray-600 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-white"
              href="License"
            >
              License
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

export default Introduction;
