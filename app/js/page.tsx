"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Lesson {
  title: string;
  description: string;
  link: string;
}

const lessons: Lesson[] = [
  // Basics
  {
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript syntax and concepts.",
    link: "/js/introduction",
  },
  {
    title: "JavaScript Syntax",
    description: "Dive deeper into JavaScript's syntax rules and structure.",
    link: "/js/syntax",
  },
  {
    title: "Comments and Variables",
    description: "Understand the importance of comments and how to use variables effectively.",
    link: "/js/comments-and-variables",
  },
  {
    title: "Data Types and Operators",
    description: "Explore different data types and learn to manipulate them with operators.",
    link: "/js/data-types-and-operators",
  },

  // Control Flow
  {
    title: "Conditional Statements (if/else)",
    description: "Make decisions in your code based on conditions.",
    link: "/js/conditional-statements",
  },
  {
    title: "Switch Statements",
    description: "Handle multiple conditions efficiently with switch statements.",
    link: "/js/switch-statements",
  },
  {
    title: "Loops (for, while, do...while)",
    description: "Automate repetitive tasks with different types of loops.",
    link: "/js/loops",
  },

  // Functions
  {
    title: "Functions: The Basics",
    description: "Write reusable code blocks with functions.",
    link: "/js/functions-basics",
  },
  {
    title: "Function Parameters and Arguments",
    description: "Pass data into functions and customize their behavior.",
    link: "/js/function-parameters",
  },
  {
    title: "Return Values and Scope",
    description: "Control what functions output and where variables are accessible.",
    link: "/js/return-values-and-scope",
  },
  { title: "Arrow Functions", description: "Learn a concise way to write functions.", link: "/js/arrow-functions" },
  {
    title: "Higher-Order Functions",
    description: "Use functions that operate on other functions.",
    link: "/js/higher-order-functions",
  },

  // Objects and Arrays
  { title: "Objects: The Basics", description: "Structure your data using objects.", link: "/js/objects-basics" },
  {
    title: "Object Methods and Properties",
    description: "Add behavior and data to objects.",
    link: "/js/object-methods-and-properties",
  },
  { title: "Arrays: The Basics", description: "Store collections of data in arrays.", link: "/js/arrays-basics" },
  {
    title: "Array Methods (map, filter, reduce)",
    description: "Manipulate and transform arrays with powerful built-in methods.",
    link: "/js/array-methods",
  },
];
export default function JsLessonsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        JavaScript Lessons
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
        {lessons.map((lesson, index) => (
          <Link key={lesson.title} href={lesson.link}>
            <div className={`group relative overflow-hidden rounded-lg shadow-md hover:translate-y-0 hover:rotate-0 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:translate-y-8 rotate-6' : 'md:translate-y-8 rotate-6'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-700 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{lesson.title}</h3>
                <p className="text-sm text-white opacity-80 mb-4">{lesson.description}</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-full text-sm transition-colors duration-300">
                  Start Lesson
                </Button>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-blue-600 font-bold">{index + 1}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}