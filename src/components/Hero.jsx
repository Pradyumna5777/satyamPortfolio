import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import useTypewriter from "../hooks/useTypewriter";
import { personal, stats } from "../data/portfolio";

export default function Hero() {
  const typed = useTypewriter(["Creative", "UI/UX", "Frontend", "Backend", "MERN Stack"]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-28 pb-16">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl w-full">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {personal.experience} yrs experience · Available for work
          </div>

          {/* Headline */}
          <h1 className="font-gruppo text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            I am a{" "}
            <span className="text-gradient font-marker">{typed}</span>
            <span className="text-accent animate-pulse">|</span>
            <br />
            <span className="text-white/90">Web Developer</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-white/60 max-w-lg text-base md:text-lg leading-relaxed">
            {personal.role} crafting
            <span className="text-accent"> pixel-perfect</span>,
            <span className="text-accent"> high-performance</span> digital
            experiences from{" "}
            <span className="inline-flex items-center gap-1 text-white/80">
              <FiMapPin className="text-accent" /> {personal.location}
            </span>
            .
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-black font-semibold hover:scale-105 transition-transform shadow-lg shadow-accent/30"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-accent hover:text-accent transition"
            >
              <FiDownload /> Resume
            </a> */}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-10 mt-12">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bruno text-accent">
                  {s.num}
                </div>
                <div className="text-xs text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Rotating glow ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-accent/40 via-cyan-400/30 to-accent2/40 blur-2xl animate-pulse" />
          </div>

          {/* Profile photo */}
          <motion.img
            src="/images/sat2.png"
            alt={personal.name}
            className="relative w-64 md:w-80 lg:w-96 rounded-3xl border-2 border-accent/40 shadow-2xl object-cover"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 -left-2 md:top-10 md:-left-6 glass px-4 py-2 rounded-2xl text-xs md:text-sm"
          >
            ⚛️ React Expert
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-4 -right-2 md:bottom-10 md:-right-6 glass px-4 py-2 rounded-2xl text-xs md:text-sm"
          >
            🎨 UI/UX
          </motion.div>

          {/* Extra: MERN badge top-right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
            className="absolute top-1/2 -right-4 md:-right-10 glass px-3 py-2 rounded-2xl text-xs md:text-sm hidden sm:block"
          >
            🚀 MERN
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}