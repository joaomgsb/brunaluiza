import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
