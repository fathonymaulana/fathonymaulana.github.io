import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ServiceSection = () => {
  return (
    <div className="w-full bg-bg">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8 xl:px-5 py-12 md:py-20 space-y-8 text-left">
        <div className="md:mx-20 lg:mx-44 text-center mb-16">
          <div className="text-3xl md:text-4xl font-poppins pb-4">
            <span>How Can I Help You </span>
            <span className="text-emerald-700">Increase Your Web Project</span>
            <span> ?</span>
          </div>
          <div className="text-base font-light text-gray-500 items-center">
            Understanding web structure and design more quickly and precisely
            will facilitate better decision-making to avoid uncertainty in
            production results.
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:pb-5 lg:grid-cols-1 gap-4">
            <div className="lg:max-h-[20rem] max-h-[18rem] w-full overflow-hidden rounded-xl">
              <img
                src="https://cdn.dribbble.com/users/941250/screenshots/14278998/media/05273f9da9c3f16a6158c81aada0823e.png?resize=400x0"
                alt="Clean & Intuitive"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <div className="grid gap-2">
                <div className="font-medium text-xs text-red-600">
                  Production
                </div>
                <div className="font-medium text-base lg:text-lg">Clean & Intuitive</div>
                <div className="text-base font-light text-gray-600 line-clamp-4 h-[6rem]">
                  Keep the UI clean with a modern touch without compromising UX.
                </div>
              </div>
              <div className="inline-flex space-x-2 md:py-3 overflow-x-auto font-medium text-xs md:text-sm ">
                <div className="px-4 py-2 rounded-full bg-red-100 text-red-600 uppercase">
                  Tailwind CSS
                </div>
                <div className="px-4 py-2 rounded-full bg-red-100 text-red-600 uppercase">
                  React
                </div>
                <div className="px-4 py-2 rounded-full bg-red-100 text-red-600 uppercase">
                  NextJS
                </div>
              </div>
              <div className="pb-8 flex-1 items-center space-x-2 font-medium">
                <a
                  href="/"
                  rel="noopener noreferrer "
                  className="py-3 transition-all hover:underline hover:underline-offset-4 inline-flex gap-2 items-center text-red-600"
                >
                  Learn more
                  <ArrowLongRightIcon width={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:pb-5 gap-4">
            <div className="lg:max-h-[20rem] max-h-[18rem] w-full overflow-hidden rounded-xl">
              <img
                src="https://cdn.dribbble.com/users/227553/screenshots/18007876/ck_dribbble_03_a.png?resize=400x0"
                alt="Detail Oriented"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <div className="grid gap-2">
                <div className="font-medium text-xs text-orange-600">
                  End-To-End
                </div>
                <div className="font-medium text-base lg:text-lg">
                  Detail Oriented
                </div>
                <div className="text-base font-light text-gray-600 line-clamp-4 h-[6rem]">
                  Awareness to ease of access, UI consistency, and improved UX.
                </div>
              </div>
              <div className="inline-flex space-x-2 md:py-3 overflow-x-auto font-medium text-xs md:text-sm ">
                <div className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 uppercase">
                  Figma
                </div>
              </div>
              <div className="pb-8 flex-1 items-center space-x-2 font-medium">
                <a
                  href="/"
                  rel="noopener noreferrer "
                  className="py-3 transition-all hover:underline hover:underline-offset-4 inline-flex gap-2 items-center text-orange-600"
                >
                  Learn more
                  <ArrowLongRightIcon width={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:pb-5 lg:grid-cols-1 gap-4">
            <div className="lg:max-h-[20rem] max-h-[18rem] w-full overflow-hidden rounded-xl">
              <img
                src="https://cdn.dribbble.com/userupload/14152907/file/original-a0814e4555f4a74ce8c61d642e474d9c.png?resize=400x0"
                alt="Pretty & Optimized"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <div className="grid gap-2">
                <div className="font-medium text-xs text-emerald-400">
                  Post Production
                </div>
                <div className="font-medium text-base lg:text-lg">
                  Pretty & Optimized
                </div>
                <div className="text-base font-light text-gray-600 line-clamp-4 h-[6rem]">
                  Writing clean code is a top priority while keeping it as
                  optimized as possible.
                </div>
              </div>
              <div className="inline-flex space-x-2 md:py-3 overflow-x-auto font-medium text-xs md:text-sm ">
                <div className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-400 uppercase">
                  Tailwind CSS
                </div>
              </div>
              <div className="pb-8 flex-1 items-center space-x-2 font-medium">
                <a
                  href="/"
                  rel="noopener noreferrer "
                  className="py-3 transition-all hover:underline hover:underline-offset-4 inline-flex gap-2 items-center text-emerald-400"
                >
                  Learn more
                  <ArrowLongRightIcon width={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
