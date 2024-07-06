import Image from "next/image";

import React from 'react'

const LearnPython = () => {
  return (
    <section className="py-12 md:py-20">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:order-2"> 
      <div className="relative w-full h-[300px] md:w-[400px] md:h-[400px]">
        <Image
          src="/python.png" // Replace with relevant image
          alt="Python Illustration"
          fill
        />
      </div>
      <div className="text-center md:text-left px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Why Learn Python?</h2>
        <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 space-y-3">
          <li>
            <span className="text-lg font-semibold">Beginner-Friendly:</span> Python&apos;s clear and readable syntax makes it an excellent language for beginners to learn programming concepts.
          </li>
          <li>
            <span className="text-lg font-semibold">Data Science and Machine Learning:</span> Python&apos;s extensive libraries (e.g., NumPy, pandas, scikit-learn) make it a powerful tool for data analysis, machine learning, and AI.
          </li>
          <li>
            <span className="text-lg font-semibold">Web Development: </span>Python&apos;s frameworks like Django and Flask streamline web application development.
          </li>
          <li>
            <span className="text-lg font-semibold">Automation and Scripting:</span> Python is ideal for automating repetitive tasks and building scripts for various purposes.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default LearnPython

