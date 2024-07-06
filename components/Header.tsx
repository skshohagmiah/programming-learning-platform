// components/Header.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link"; // Assuming you're using Next.js for routing
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, MessageSquareCode } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className=" sticky top-0 z-10 border-b-2 bg-white dark:bg-slate-950">
      <div className="max-w-screen-xl mx-auto  py-2 px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          <Image src={"/logo.svg"} alt="image" height={150} width={150} className="shrink-0" />
        </Link>

        <nav className="flex space-x-2 md:space-x-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="">
                Lessons <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Programming Languages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/js">JavaScript</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/python">Python</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/blog" className="hover:underline hidden md:block ">
            <Button variant={"ghost"}>Blog</Button>
          </Link>
          <ModeToggle />
          <Button className="hidden md:block" variant={'ghost'}>
          <MessageSquareCode />
          </Button>
        </nav>
      </div>
    </header>
  );
}
