"use client";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface Lesson {
  title: string;
  description: string;
  link: string;
}

const lessons: Lesson[] = [
  {
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript syntax and concepts.",
    link: "/js/introduction",
  },
  {
    title: "Variables",
    description: "Discover how to store and manipulate data in JavaScript.",
    link: "/js/variables",
  },
  {
    title: "Control Flow",
    description: "Learn all about control program flow.",
    link: "/js/control-flow",
  },
  {
    title: "Objects",
    description: "Organize data with objects",
    link: "/js/objects",
  },
  // ... add more lessons here
];

export default function JsLessonsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        JavaScript Lessons
      </h1>

      {/* Lessons Container */}
      <div className="relative h-[1000px]"> {/* Increased container height */}
        {lessons.map((lesson, index) => (
          <Link
            key={lesson.title}
            href={lesson.link}
            className={`group relative flex items-center space-x-4 p-4 mb-8 w-full md:w-fit rounded-lg shadow-md hover:shadow-lg border transition-shadow duration-300  ${
              index % 2 === 0 ? "md:ml-8" : "md:ml-auto" // Zig-zag placement
            }`}
          >
            {/* Background & Icon */}
            <div className="bg-green-500 p-2 rounded-full group-hover:bg-green-600 transition-colors duration-300">
              <StarIcon className="text-yellow-400 h-6 w-6" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:underline">
                {lesson.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{lesson.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
