import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8 xl:px-5 pt-10 md:pt-16 space-y-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="grid grid-cols-1">
            <div className="text-3xl md:text-2xl lg:text-4xl font-poppins text-white pb-4">
              <span>Ready to Boost Your Website </span>
              <span className="text-black font-bold">Application</span>
              <span>?</span>
            </div>
            <div className="lg:text-base text-sm font-light text-slate-200 items-center pb-8">
              Find the best solution that fits your website need
            </div>
            <div className="pb-8 flex-1 items-center space-x-4 font-medium">
              <a
                href="mailto:maulanafathony@gmail.com"
                className=" hover:bg-primary border-2 rounded-lg text-primary inline-flex items-center py-3 px-5 bg-white  border-white hover:border-white hover:text-white"
              >
                Contact Me
              </a>
              <a
                target="_blank"
                href="/Resume_FathonyMaulana.pdf"
                className=" text-white hover:bg-white hover:text-primary rounded-lg py-3 px-5 border-2 border-white hover:border-white md:inline-flex items-center hidden sm:block"
              >
                Resume
                <CloudArrowDownIcon className="ml-1.5 size-5 text-current" />
              </a>
            </div>
          </div>

          <div className="">
            <img
              src="/images/banner-image.png"
              alt="Banner"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
