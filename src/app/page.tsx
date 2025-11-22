import Hero from "@/components/Hero";
import TechGrid from "@/components/TechGrid";
import ExperienceLog from "@/components/ExperienceLog";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-deep-black min-h-screen text-slate-50 selection:bg-neon-green/30 selection:text-neon-green">
      <Hero />
      <TechGrid />
      <ExperienceLog />
      <Projects />
      <Footer />
    </main>
  );
}
