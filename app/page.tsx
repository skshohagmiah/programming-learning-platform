import BlogSection from "@/components/BlogsSection";
import HeroSection from "@/components/Hero";
import LearnJs from "@/components/learnJs";
import LearnPython from "@/components/learnPython";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LearnJs />
      <LearnPython />
      <BlogSection />
    </main>
  );
}
