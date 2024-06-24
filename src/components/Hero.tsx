import React from "react";

const Hero = () => {
  return (
    <section className="flex-1">
      <div className="grid">
        <div className="w-full bg-white py-10 md:py-16">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8 xl:px-5 space-y-8 text-center md:text-left ">
            <div className="md:flex items-center justify-between md:space-x-4">
              <div className="md:w-1/2 grid space-y-8">
                <p className="text-primary font-semibold">
                  Welcome to Tony Portfolio
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-none text-gray-900 lg:text-5xl xl:text-6xl dark:text-white">
                  <span>The repository for my </span>
                  <span className="text-primary">Personal Portfolio</span>!
                  <span></span>
                </h1>
                <h2 className="text-base font-light text-gray-600 dark:text-400 items-center">
                  This repository showcases my projects, skills, and
                  accomplishments as a developer. It includes a collection of my
                  work, from coding projects to professional experiences,
                  highlighting my journey and expertise in the tech world.
                </h2>
                <div className="pb-8 flex-1 items-center space-x-4 font-medium">
                  <a
                    rel="noopener noreferrer "
                    className=" hover:bg-white border-2 rounded-lg text-white  inline-flex items-center py-3 px-5 bg-primary border-primary hover:text-primary"
                    href="/contact-us"
                  >
                    Contact Me
                  </a>
                  <a
                    rel="noopener noreferrer "
                    className=" text-primary hover:bg-primary hover:text-white rounded-lg py-3 px-5 border-2  md:inline-flex items-center hidden sm:block border-primary "
                    href="https://app.jala.tech"
                  >
                    Get Started
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-2 size-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:flex-1 items-start justify-center relative">
                <img src="/images/hero-image.png" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
