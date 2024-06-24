import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";

const EmailSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8 xl:px-5 py-12 md:py-24 space-y-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8 items-center">
          <div>
            <div className="text-3xl md:text-2xl lg:text-4xl font-poppins text-dark-blue pb-6 pt-4">
              <span></span>
              <span className="text-emerald-800">Operational Cooperation</span>
              <span> and </span>
              <span className="text-emerald-800">Funding</span>
              <span> of Web Project</span>
            </div>
            <div className="pb-8 space-y-4">
              <div className="lg:text-base text-sm font-light text-gray-500 items-center">
                involve teamwork and securing money to support development,
                maintenance, and marketing. It includes planning, resource
                allocation, and regular evaluation to ensure success. Effective
                cooperation and funding are essential for delivering a quality
                web project on time and within budget.
              </div>
              <div className="lg:text-base text-sm font-light text-gray-500">
                <ul className="space-y-2">
                  <li className="items-start flex leading-4">
                    <CheckCircleIcon className="text-emerald-800 w-4 h-4  inline-block mr-2 flex-shrink-0 text-jala-farm" />
                    HTML/CSS/JavaScript development
                  </li>
                  <li className="items-start flex leading-4">
                    <CheckCircleIcon className="text-emerald-800 w-4 h-4  inline-block mr-2 flex-shrink-0 text-jala-farm" />
                    HTML & CSS Responsive Web Design
                  </li>
                  <li className="items-start flex leading-4">
                    <CheckCircleIcon className="text-emerald-800 w-4 h-4  inline-block mr-2 flex-shrink-0 text-jala-farm" />
                    Single-page development (SPA)
                  </li>
                  <li className="items-start flex leading-4">
                    <CheckCircleIcon className="text-emerald-800 w-4 h-4  inline-block mr-2 flex-shrink-0 text-jala-farm" />
                    React Development
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-8 flex-1 items-center space-x-2 font-medium">
              <Link
                href="/"
                className=" hover:bg-white border-2 rounded-full text-white inline-flex items-center py-3 px-5 bg-emerald-800  border-emerald-800 hover:text-emerald-800"
              >
                Contact Now
              </Link>
              <Link
                href="/"
                className=" text-emerald-800 hover:bg-emerald-800 hover:text-white rounded-full py-3 px-5 border-2  hover:border-emerald-800 md:inline-flex items-center hidden sm:block border-emerald-800"
              >
                Learn More
              </Link>
            </div>
            <div>
              <div className="md:text-sm text-xs font-light text-jala-gray items-center pb-2">
                Have worked with:
              </div>
              <div className="w-full">
                <div className="relative flex overflow-x-hidden">
                  <div className="flex flex-row py-12 animate-marquee whitespace-nowrap">
                    <img
                      src="/images/clients/mandiri.png"
                      alt=""
                      className="w-full object-cover"
                    />
                    <img
                      src="/images/clients/livin.png"
                      alt=""
                      className="w-full object-cover"
                    />
                    <img
                      src="/images/clients/mitech.png"
                      alt=""
                      className="w-full object-cover"
                    />
                    <img
                      src="/images/clients/ikon.png"
                      alt=""
                      className="w-full object-cover"
                    />
                    <img
                      src="/images/clients/dapurMamaHerma.png"
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-first">
            <div className="relative box-border inline-block overflow-hidden w-full h-full max-w-full">
              <img
                src="/images/presentation.webp"
                alt=""
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
