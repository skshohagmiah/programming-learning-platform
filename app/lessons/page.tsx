"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpenIcon,
  PuzzleIcon,
  RocketIcon,
} from "lucide-react";
import Link from "next/link";

export default function LessonsPage() {
  return (
    <div className="min-h-screen py-16 ">
      {/* Introduction */}
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Start Your Coding Journey
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learn in-demand skills with our interactive, project-based courses.
          Build a strong foundation in programming and unlock your potential.
        </p>
      </div>

      {/* Learning Paths */}
      <div className="container mx-auto max-w-7xl px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* JavaScript Card */}
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-col items-start gap-2 p-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/js.png" // Replace with the relevant image
                  alt="JavaScript Illustration"
                  width={32}
                  height={32}
                />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  JavaScript
                </CardTitle>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                The Language of the Web
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <BookOpenIcon className="h-4 w-4" /> Interactive lessons
                </li>
                <li className="flex items-center gap-2">
                  <PuzzleIcon className="h-4 w-4" /> Hands-on projects
                </li>
                <li className="flex items-center gap-2">
                  <RocketIcon className="h-4 w-4" /> Real-world applications
                </li>
              </ul>
              <Link href="/js" passHref legacyBehavior>
                <Button className="mt-4" variant="default">
                  Explore JavaScript
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Python Card (similar structure to JavaScript card) */}
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-col items-start gap-2 p-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/python.png" 
                  alt="Python Illustration"
                  width={32}
                  height={32}
                />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Python
                </CardTitle>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                The Language of Data Science
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <BookOpenIcon className="h-4 w-4" /> Beginner-friendly lessons
                </li>
                <li className="flex items-center gap-2">
                  <PuzzleIcon className="h-4 w-4" /> Data analysis projects
                </li>
                <li className="flex items-center gap-2">
                  <RocketIcon className="h-4 w-4" /> Machine learning foundations
                </li>
              </ul>
              <Link href="/python" passHref legacyBehavior>
                <Button className="mt-4" variant="default">
                  Explore Python
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
