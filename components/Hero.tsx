"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function HeroSection() {
  const { theme } = useTheme();
  const [code, setCode] = useState(
    `console.log('Welcome to Interactive Coding!');`
  );
  const [output, setOutput] = useState<string>(""); // Initialize as a string
  const [isEditorReady, setIsEditorReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    setIsEditorReady(true);

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframeRef.current = iframe;

    const iframeContent = `
      <html>
        <body>
          <script>
            let output = '';
            const originalConsoleLog = console.log;
            console.log = function(...args) {
              output += args.join(' ') + '\\n';
              originalConsoleLog.apply(console, args);
            };
            
            window.addEventListener('message', function(event) {
              try {
                output = ''; // Reset output for each run
                eval(event.data);
                window.parent.postMessage(output || 'No output', '*');
              } catch (error) {
                window.parent.postMessage('Error: ' + error.message, '*');
              }
            }, false);
          </script>
        </body>
      </html>
    `;
    iframe.srcdoc = iframeContent;

    const handleMessage = (event: any) => {
      if (event.source === iframe.contentWindow) {
        setOutput(String(event.data));
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, []);

  const runCode = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(code, "*");
    }
  };

  return (
    <section className="py-20 ">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between text-center md:text-left">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 w-full mb-10 md:mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Learn to <span className="text-green-500">Code</span>, Create, and
              Conquer.
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-300">
              Unleash your potential with{" "}
              <span className="text-green-500 font-semibold text-2xl capitalize">
                interactive JavaScript and Python course.
              </span>{" "}
              Build real-world projects, solve challenges, and get everything for free.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 justify-center w-full md:justify-start md:space-x-4"
            >
              <Link href="/js" >
                <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-6 rounded-full text-lg font-semibold w-full border-b-4">
                  Start Learning
                </Button>
              </Link>
              <Link href="/lessons" >
                <Button
                  variant="outline"
                  className=" px-8 py-6 rounded-full text-lg font-semibold w-full border-b-4"
                >
                  Explore Courses
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Code Editor and Output */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {isEditorReady && (
              <div className="relative border rounded-lg overflow-hidden shadow-lg">
                <Editor
                  height="300px"
                  width={"100%"}
                  theme={theme === "dark" ? "vs-dark" : "vs-light"}
                  defaultLanguage="javascript"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  className="rounded-lg"
                />
                <Button
                  onClick={runCode}
                  className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Run Code
                </Button>
              </div>
            )}
            <div
              className={cn(
                "mt-4 p-4 rounded-lg overflow-auto transition-colors",
                output.includes("Error")
                  ? "bg-red-100 text-red-900"
                  : "bg-gray-800 text-white"
              )}
            >
              <h2 className="text-lg text-left font-semibold">Output:</h2>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
