"use client";
import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LessonProgressBar from "@/components/LessonProgressBar";
import Editor from "@monaco-editor/react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import LessonNavigationButtons from "@/components/LessonNavigationButtons";
import { editor } from "monaco-editor";

export default function VariableLesson() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Increased total steps
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const [codeOutput, setCodeOutput] = useState<string | null>(null);
  const [executionError, setExecutionError] = useState<string | null>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

 
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '/code-runner.html';
    document.body.appendChild(iframe);
  
    const handleMessage = (event:any) => {
      if (event.data.type === 'console.log') {
        setCodeOutput(event.data.message);
      } else if (event.data.type === 'error') {
        setExecutionError(event.data.message);
      }
    };
  
    window.addEventListener('message', handleMessage);
  
    return () => {
      document.body.removeChild(iframe);
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  
  const handleRunCode = () => {
    const code = editorRef.current?.getValue();
    if (code) {
      setCodeOutput(null);
      setExecutionError(null);
  
      const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
        const wrappedCode = `
          try {
            const originalConsoleLog = console.log;
            console.log = function(...args) {
              window.parent.postMessage({ type: 'console.log', message: args.join(' ') }, '*');
              originalConsoleLog.apply(console, args);
            };
            ${code}
          } catch (error) {
            window.parent.postMessage({ type: 'error', message: error.toString() }, '*');
          }
        `;
        iframe.contentWindow.postMessage({ type: 'runCode', script: wrappedCode }, '*');
      }
    }
  };



  const handleEditorChange = (value: string | undefined, event: any) => {
    // Validate the user's code in the editor here
    const isValid = value?.trim() === "let message = 'Hello, world!';";
    setIsCorrect(isValid);
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setIsCorrect(false);
      setShowExplanation(false);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setIsCorrect(false);
      setShowExplanation(false);
    }
  };

  const handleCheckAnswer = () => {
    let userInputArr = userInput.split("=");
    const name = userInputArr[1];
    console.log(userInputArr);

    if (userInputArr[0] && typeof name === "string" && name.length > 2) {
      setIsCorrect(true);
      setShowExplanation(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <Card className="max-w-[1000px] w-full p-6 shadow-md rounded-md bg-slate-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            JavaScript Variables
          </CardTitle>
          <CardDescription className="text-gray-600">
            Mastering the fundamentals of storing and managing data in
            JavaScript.
          </CardDescription>
          <LessonProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        </CardHeader>

        <CardContent className="space-y-4">
          {currentStep === 1 && (
            <div>
              <p>
                Variables in JavaScript are used to store data values. They act
                as containers, holding information that you can use throughout
                your code. To declare a variable, you use the `let` keyword,
                followed by the variable name and an optional initial value.
              </p>
              <p>Here&apos;s the basic syntax for declaring a variable:</p>
              <div className="my-4 !bg-transparent">
                <Editor
                  height="50px" // Adjust height as needed
                  theme="vs-dark"
                  defaultLanguage="javascript"
                  value="let variableName;"
                  options={{ readOnly: true, fontSize: 22 }}
                />
              </div>
              <p>
                The `variableName` is where you choose a meaningful name for
                your variable. It should describe the data it holds.
              </p>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <p>
                To assign a value to a variable, you use the assignment operator
                (`=`). You can assign various types of values, such as numbers,
                strings (text), booleans (true or false), and more.
              </p>
              <Editor
                height="120px" // Adjust height as needed
                defaultLanguage="javascript"
                // line={2}
                theme="vs-dark"
                value={`
                let message = 'Hello, world!';
                let age = 30;
                let isStudent = true;`}
                options={{ readOnly: true, fontSize: 18 }}
              />
              <p>
                In the example above, we created three variables: `message`,
                `age`, and `isStudent`, and assigned different values to them.
              </p>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p>
                Let&apos;s test your understanding! Declare a variable named
                `firstName` and assign your first name to it.
              </p>
              <Input
                placeholder="Enter your code here"
                value={userInput}
                onChange={handleInputChange}
                className="w-full"
              />
              <Button onClick={() => handleCheckAnswer()}>Check Answer</Button>
              {showExplanation && (
                <Alert variant={isCorrect ? "default" : "destructive"}>
                  <Info className="h-4 w-4" />
                  <AlertTitle>
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </AlertTitle>
                  <AlertDescription>
                    {isCorrect
                      ? "Great job! You correctly declared and assigned your first name to the variable."
                      : "The correct answer is: let firstName = 'YourFirstName';"}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
          {currentStep === 4 && (
            <div>
              <p>
                Variables are essential in programming because they allow you to
                store and reuse data, making your code more dynamic and easier
                to manage. You can update a variable&apos;s value as needed, and
                its latest value will be used whenever you reference it.
              </p>
              <p>Here&apos;s how you can update a variable&apos;s value:</p>
              <Editor
                height="100px" // Adjust height as needed
                defaultLanguage="javascript"
                theme="vs-dark"
                value={`
                  let counter = 0;
                  counter = counter + 1; // Increment the counter
                  console.log(counter); // Output: 1`}
                options={{ readOnly: true }}
              />
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <p>
                When naming variables, it&apos;s important to follow a few
                rules:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Variable names must start with a letter, underscore (_), or
                  dollar sign ($).
                </li>
                <li>
                  They can contain letters, numbers, underscores, and dollar
                  signs.
                </li>
                <li>
                  Variable names are case-sensitive (e.g., `myVar` and `myvar`
                  are different variables).
                </li>
                <li>
                  Avoid using reserved keywords (e.g., `let`, `var`, `if`,
                  `else`) as variable names.
                </li>
              </ul>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-4">
              <p className="text-gray-700">
                Now, try declaring and assigning a value to a variable yourself
                in the editor below:
              </p>
              <Editor
                height="200px"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue="// Declare and assign a value to a variable"
                onChange={handleEditorChange}
                onMount={(editor) => (editorRef.current = editor)}
                className="border rounded-md shadow-sm"
              />
              <Button variant="outline" onClick={handleRunCode}>
                Run Code
              </Button>

              {/* Output/Result Section */}
              <div className="mt-4">
                {codeOutput && (
                  <div className="bg-green-100 text-green-800 p-2 rounded-md">
                    Output: {codeOutput}
                  </div>
                )}
                {executionError && (
                  <div className="bg-red-100 text-red-800 p-2 rounded-md">
                    Error: {executionError}
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousStep}
            disabled={currentStep === 1}
          >
            Back Step
          </Button>
          <Button
            onClick={handleNextStep}
            disabled={currentStep === totalSteps}
          >
            {currentStep === totalSteps ? "Complete" : "Next Step"}
          </Button>
        </CardFooter>
      </Card>
      <LessonNavigationButtons prev="/js/introduction" next="/js/data-types" />
    </main>
  );
}
