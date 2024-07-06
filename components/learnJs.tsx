import Image from "next/image";
import React from "react";

const LearnJs = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
      <div className=" mx-auto px-4 max-w-7xl">
        <div className="flex justify-between flex-col-reverse md:flex-row gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Why JavaScript?
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
              <li>
                <span className="text-lg  font-semibold">The Language of the Web:</span> JavaScript is essential for
                creating interactive websites, web applications, and dynamic
                user interfaces.
              </li>
              <li>
                <span className="text-lg font-semibold">Versatile and Powerful:</span> From front-end development to
                server-side with Node.js, JavaScript is a versatile tool for a
                variety of projects.
              </li>
              <li>
                <span className="text-lg font-semibold">High Demand:</span> JavaScript developers are in high demand across
                industries, offering lucrative career opportunities.
              </li>
              <li>
               <span className="text-lg font-semibold"> Community and Resources:</span> JavaScript boasts a vast and
                supportive community with abundant learning resources, making it
                easier to learn and troubleshoot.
              </li>
            </ul>
          </div>
          <div className="relative w-full h-[300px] md:w-[400px] md:h-[400px] md:ml-12">
            <Image
              src="/js.png" // Replace with relevant image
              alt="JavaScript Illustration"
              fill
              className="dark:fill-white object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnJs;
