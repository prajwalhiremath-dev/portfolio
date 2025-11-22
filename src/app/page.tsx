import Hero from "@/components/Hero";
import About from "@/components/About";
import TechGrid from "@/components/TechGrid";
import ExperienceLog from "@/components/ExperienceLog";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-deep-black min-h-screen text-slate-50 selection:bg-neon-green/30 selection:text-neon-green overflow-x-hidden">
      <Hero />
      <About />
      <TechGrid />
      <ExperienceLog />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}