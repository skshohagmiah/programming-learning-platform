// components/LessonProgressBar.tsx
"use client";
import { Progress } from "@/components/ui/progress";

interface LessonProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function LessonProgressBar({
  currentStep,
  totalSteps,
}: LessonProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full flex items-center justify-between gap-2">
      <Progress className=" text-green-600" value={progress} />
      <span className="text-lg font-medium">{Math.floor(progress)}%</span>
    </div>
  );
}
