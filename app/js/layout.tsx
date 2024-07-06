import React from "react";
import JsLessonsSidebar from "./_components/JavascriptSidebar";


const JavascriptLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-4 max-w-screen-xl mx-auto">
      <JsLessonsSidebar />
      {children}
    </div>
  );
};

export default JavascriptLayout;
