import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
            <CustomCursor /> {/* Add the cursor component here */}
      <Navbar />
      <main className="relative z-10">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
                <section id="experience"><Experience /></section>  {/* NEW */}
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-accent2/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>
    </div>
  );
}