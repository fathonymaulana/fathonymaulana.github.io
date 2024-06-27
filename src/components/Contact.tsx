import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-w-0">
      <div className="flex">
        <div className="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
          <main>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              <div className="pb-8">
                <h1 className="mb-2 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Contact
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Get in touch with me anytime, through social media, e-mail, or
                  phone number.
                </p>
              </div>
              <div id="mainContent" className="py-8 flex flex-col gap-4">
                <h2
                  className="group relative z-20 scroll-mt-20 text-2xl font-bold text-gray-900 dark:text-white"
                  id="mit-license"
                >
                  <a
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                    href="#mit-license"
                  >
                    <span className="icon icon-link"></span>
                  </a>
                  Gmail
                  <a
                    href="#mit-license"
                    aria-label="Link to this section: [object Object],MIT License"
                    className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </a>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Just a friendly reminder that the information provided here is
                  for business purposes only. If you have any questions, feel
                  free to chat with me directly on my social media.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  I appreciate your understanding in using this responsibly.
                </p>
                <table className="table-auto my-10 border dark:border-gray-600">
                  <thead className="bg-gray-100 dark:bg-gray-600 text-left dark:text-white">
                    <tr>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr>
                      <td className="px-4 py-2">Address</td>
                      <td className="px-4 py-2">East Jakarta, Indonesia</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Timezone</td>
                      <td className="px-4 py-2">GMT+7</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">E-mail</td>
                      <td className="flex items-center text-primary px-4 py-2 hover:underline">
                        <EnvelopeIcon className="w-5 h-5 mr-1" />
                        <a href="mailto:maulanafathony@gmail.com">
                          maulanafathony@gmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-600 dark:text-gray-400">
                  If you need any further information, such as my phone number,
                  please do not hesitate to send me an email first.
                </p>
              </div>
              <div id="mainContent" className="py-8 flex flex-col gap-4">
                <h2
                  className="group relative z-20 scroll-mt-20 text-2xl font-bold text-gray-900 dark:text-white"
                  id="mit-license"
                >
                  <a
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                    href="#mit-license"
                  >
                    <span className="icon icon-link"></span>
                  </a>
                  Social Media
                  <a
                    href="#mit-license"
                    aria-label="Link to this section: [object Object],MIT License"
                    className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </a>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  If you want to find me on social media, just search for
                  @fathonymaulana. That's my username on almost all platforms,
                  so it should be easy to find me.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  But if you're short on time, I've included some links to the
                  social media platforms I use most frequently below.
                </p>
                <table className="table-auto my-10 border dark:border-gray-400">
                  <thead className="bg-gray-100 dark:bg-gray-600 text-left dark:text-white">
                    <tr>
                      <th className="p-4">Social Media</th>
                      <th className="p-4">Profile URL</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr>
                      <td className="px-4 py-2">LinkedIn</td>
                      <td className="flex items-center text-primary px-4 py-2 hover:underline">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
                        <a
                          href="https://www.linkedin.com/in/fathony-maulana-96a2a71ba/"
                          target="_blank"
                        >
                          fathony-maulana
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Instagram</td>
                      <td className="flex items-center text-primary px-4 py-2 hover:underline">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
                        <a
                          href="https://www.instagram.com/fathonymaulana/"
                          target="_blank"
                        >
                          fathonymaulana
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Whatsapp</td>
                      <td className="flex items-center text-primary px-4 py-2 hover:underline">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
                        <a href="https://wa.me/6281299056988" target="_blank">
                          +62 812 9905 6988
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              href="Introduction"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                ></path>
              </svg>
              Introduction
            </a>
          </aside>
        </div>
        <div className="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm"></div>
      </div>
    </div>
  );
};

export default Contact;
