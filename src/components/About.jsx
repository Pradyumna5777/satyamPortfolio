import { motion } from "framer-motion";
import { personal, highlights, stats } from "../data/portfolio";
import Scroll3DRotateImage from "./Scroll3DRotateImage";

export default function About() {
  return (
    <div className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title mb-4"
      >
        About <span className="text-gradient">Me</span>
      </motion.h2>
      <p className="text-center text-white/50 mb-16 text-sm md:text-base">
        A quick intro to who I am and what I do
      </p>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-5 gap-8 md:gap-12 items-center glass rounded-3xl p-6 md:p-12"
      >
        {/* Left: bio */}
        <div className="md:col-span-3 order-2 md:order-1">
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            As a passionate and{" "}
            <span className="text-accent font-semibold">UI/UX</span> and{" "}
            <span className="text-accent font-semibold">
              MERN-Stack Developer
            </span>{" "}
            with{" "}
            <span className="text-accent font-semibold">
              {personal.experience} years of experience
            </span>
            , I thrive on crafting captivating digital experiences. Armed with
            proficiency in <span className="text-accent">HTML, CSS,</span> and{" "}
            <span className="text-accent">JavaScript</span>, I weave intricate
            designs into functional and delightful user interfaces. Whether it’s
            a sleek landing page or a dynamic web application, I relish the
            end-to-end development process. My toolkit includes not only code
            but also an eye for detail — because pixel perfection matters. With{" "}
            <span className="text-accent">React.js</span> as my trusty sidekick,{" "}
            <span className="text-accent">Node.js</span> and{" "}
            <span className="text-accent">Express.js</span> as my backend
            powerhouses, I transform ideas into reality, ensuring seamless
            interactions and intuitive navigation. But it’s not just about
            pixels and lines of code; it’s about creating meaningful
            connections between users and technology. So, let’s embark on this
            journey together.
          </p>

          {/* Highlight chips */}
          <div className="flex flex-wrap gap-3 mt-8">
            {highlights.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full text-xs md:text-sm bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-black transition cursor-default"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Quick facts grid */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-bruno text-accent">
                  {s.num}
                </div>
                <div className="text-[10px] md:text-xs text-white/50 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
     <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
  <div className="relative">
    {/* Glow */}
    <div className="absolute inset-0 flex items-center justify-center -z-20">
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-accent/40 via-cyan-400/20 to-accent2/40 blur-3xl" />
    </div>

    <Scroll3DRotateImage
      src="/images/sat.png"
      alt={personal.name}
      maxRotation={25}
      perspective={1200}
      className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_25px_50px_rgba(0,255,179,0.35)]"
    />

    {/* Floating tech badges around the cutout */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute top-10 -left-4 glass px-3 py-2 rounded-2xl text-xs"
    >
      ⚛️ React
    </motion.div>

    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 3.5, repeat: Infinity }}
      className="absolute bottom-16 -right-4 glass px-3 py-2 rounded-2xl text-xs"
    >
      🎨 UI/UX
    </motion.div>

    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      className="absolute top-1/2 -right-8 glass px-3 py-2 rounded-2xl text-xs hidden sm:block"
    >
      🚀 MERN
    </motion.div>
  </div>
</div>
      </motion.div>

      {/* Marquee */}
     {/* Marquee — Two Rows, Opposite Directions */}
<div className="relative mt-20 overflow-hidden py-8 border-y border-white/10 space-y-4">
  {/* Top row — scroll left */}
  <div className="flex whitespace-nowrap animate-marquee">
    {[...Array(2)].map((_, dup) => (
      <div key={dup} className="flex items-center shrink-0">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-xl md:text-3xl font-grotesk px-6">
              Hi, I'm{" "}
              <span className="text-gradient font-semibold">
                {personal.firstName}.
              </span>{" "}
              Nice to meet you!
            </span>
            <span className="text-accent text-3xl">✦</span>
          </div>
        ))}
      </div>
    ))}
  </div>

  {/* Bottom row — scroll right (reverse direction) */}
  <div
    className="flex whitespace-nowrap animate-marquee"
    style={{ animationDirection: "reverse" }}
  >
    {[...Array(2)].map((_, dup) => (
      <div key={dup} className="flex items-center shrink-0">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-xl md:text-3xl font-grotesk px-6 text-white/40">
              Designer · Developer · Problem Solver
            </span>
            <span className="text-accent2 text-3xl">◆</span>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
    </div>
  );
}