import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";

const About = () => {
  return (
    <section className="grid">
      <div className="w-full py-10 md:py-16">
        <div className="w-full mx-auto max-w-5xl px-4 sm:px-6 md:px-8 xl:px-5 md:pt-20 space-y-8 text-center md:text-left">
          <span className="text-sm text-primary font-semibold">
            About Me
          </span>
          <div className="md:flex items-center justify-between md:space-x-4">
            <div className="md:w-1/2 grid space-y-4">
              <h1 className="dark:text-white text-xl md:text-4xl lg:text-3xl md:font-medium font-semibold font-poppins tracking-tight">
                <span>Let's create your</span>
                <span className="text-primary">
                  {" "}
                  dream website <span className="text-black dark:text-white">together!</span>
                </span>
              </h1>
              <h2 className="text-base text-gray-600 dark:text-gray-400 font-light items-center">
                Over a decade of experience in interactive design and working
                with some of the most talented people in the business.
              </h2>
              <div className="hidden lg:inline-flex items-center space-x-2 text-gray-700 text-base font-medium">
                <a
                  href=""
                  className="text-primary hover:text-black dark:hover:text-white flex flex-row items-center"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                  More details
                </a>
              </div>
            </div>
            <div className="pt-6 md:pt-0 md:w-1/2 grid space-y-4">
              <h1 className="dark:text-white text-xl md:text-4xl lg:text-3xl md:font-medium font-semibold font-poppins tracking-tight">
                <span>
                  Let's be friends and stay{" "}
                  <span className="text-primary"> connected</span>
                </span>
              </h1>
              <h2 className="text-base text-gray-600 dark:text-gray-400 font-light items-center">
                So we can exchange ideas, collaborate on exciting projects, and
                keep up with the latest trends and technologies together."
              </h2>
              <div className="hidden lg:inline-flex items-center space-x-2 text-gray-700 text-base font-medium">
                <a
                  href="mailto:maulanafathony@gmail.com"
                  className="text-primary hover:text-black dark:hover:text-white flex flex-row items-center"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                  More details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
