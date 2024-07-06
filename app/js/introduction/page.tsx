"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ImageIcon, MessageSquare, Music } from "lucide-react";
import Image from "next/image";
import LessonNavigationButtons from "@/components/LessonNavigationButtons";
import Link from "next/link";

export default function JsIntroPage() {
  return (
    <div className=" py-12 px-4 w-full">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
              JavaScript: The Language of the Web
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Dive into the dynamic world of JavaScript, the driving force
              behind interactive websites, web applications, and rich user
              experiences.
            </p>
            <Link href={"/js/variables"} className="block">
              <Button>Start Learning Now</Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/js.png" // Replace with relevant image
              alt="JavaScript Illustration"
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium flex items-center gap-2">
              <Code />
              Interactive and Dynamic
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              JavaScript empowers you to create dynamic and interactive web
              pages that respond to user actions, providing a more engaging and
              immersive online experience.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium flex items-center gap-2">
              <MessageSquare />
              Front-end and Back-end
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              JavaScript is versatile, enabling both front-end development (with
              frameworks like React, Vue, and Angular) and back-end development
              (using Node.js).
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium flex items-center gap-2">
              <Music />
              Games and Animations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              With libraries like p5.js and Three.js, JavaScript is a great tool
              for building games, animations, and interactive visualizations.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium flex items-center gap-2">
              <ImageIcon />
              Mobile Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Frameworks like React Native allow you to build cross-platform
              mobile applications using your existing JavaScript skills.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <LessonNavigationButtons prev="/js" next="/js/variables" />
    </div>
  );
}
