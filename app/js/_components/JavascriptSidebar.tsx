// components/JsLessonsSidebar.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const lessons = [
  // Basics
  { title: "Introduction to JavaScript", link: "/js/introduction" },
  { title: "JavaScript Syntax", link: "/js/syntax" },
  { title: "Comments and Variables", link: "/js/comments-and-variables" },
  { title: "Data Types and Operators", link: "/js/data-types-and-operators" },

  // Control Flow
  {
    title: "Conditional Statements (if/else)",
    link: "/js/conditional-statements",
  },
  { title: "Switch Statements", link: "/js/switch-statements" },
  { title: "Loops (for, while, do...while)", link: "/js/loops" },

  // Functions
  { title: "Functions: The Basics", link: "/js/functions-basics" },
  {
    title: "Function Parameters and Arguments",
    link: "/js/function-parameters",
  },
  { title: "Return Values and Scope", link: "/js/return-values-and-scope" },
  { title: "Arrow Functions", link: "/js/arrow-functions" },
  { title: "Higher-Order Functions", link: "/js/higher-order-functions" },

  // Objects and Arrays
  { title: "Objects: The Basics", link: "/js/objects-basics" },
  {
    title: "Object Methods and Properties",
    link: "/js/object-methods-and-properties",
  },
  { title: "Arrays: The Basics", link: "/js/arrays-basics" },
  { title: "Array Methods (map, filter, reduce)", link: "/js/array-methods" },

  // Advanced Concepts
  { title: "Classes and Prototypes", link: "/js/classes-and-prototypes" },
  { title: "Modules and Import/Export", link: "/js/modules-and-import-export" },
  { title: "Promises and Async/Await", link: "/js/promises-and-async-await" },
  { title: "Error Handling (try...catch)", link: "/js/error-handling" },

  // DOM Manipulation and Events
  { title: "DOM Manipulation", link: "/js/dom-manipulation" },
  { title: "Event Handling", link: "/js/event-handling" },

  // Web APIs
  { title: "Fetch API and AJAX", link: "/js/fetch-api-and-ajax" },
  {
    title: "Local Storage and Session Storage",
    link: "/js/local-and-session-storage",
  },

  // Additional Topics (Optional)
  { title: "Regular Expressions", link: "/js/regular-expressions" },
  { title: "Canvas and Animations", link: "/js/canvas-and-animations" },
  { title: "Web Workers", link: "/js/web-workers" },
  { title: "Service Workers", link: "/js/service-workers" },
  { title: "WebSockets", link: "/js/websockets" },
  { title: "Node.js Introduction", link: "/js/node-js" },
  { title: "React.js Introduction", link: "/js/react-js" },
  { title: "Vue.js Introduction", link: "/js/vue-js" },
];

export default function JsLessonsSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        " sticky top-0 bottom-0 left-0 border-r-2 overflow-auto overflow-x-hidden h-screen  no-scrollbar w-full max-w-[18rem]",
        pathname === "/js" ? "hidden" : "hidden md:block"
      )}
    >
      <div className="min-w-[20rem]  pb-36  border-gray-200 dark:border-gray-700 mt-4">
        <nav className="px-4 py-2 space-y-1">
          {lessons.map((lesson) => (
            <div key={lesson.title}>
              <Link
                href={lesson.link}
                className={`block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-700  ${
                  pathname.includes(lesson.link)
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                }`}
              >
                {lesson.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
