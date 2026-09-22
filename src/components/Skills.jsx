import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const techIcons = {
  Figma: "/images/figma-icon.png",
  JavaScript: "/images/js.png",
  HTML: "/images/html-5.png",
  CSS: "/images/css-3.png",
  "Express.js": "/images/ex.png",
  "React.js": "/images/react-js-icon.png",
  MongoDB: "/images/mongo.png",
  "Node.js": "/images/node.png",
  TailwindCSS: "/images/tailwind-css-icon.png",
  "VS Code": "/images/visual-studio-code-icon.png",
};

const Pill = ({ label }) => (
  <span className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-black transition cursor-default">
    {label}
  </span>
);

export default function Skills() {
  return (
    <div className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-4"
      >
        My <span className="text-gradient">Skills</span>
      </motion.h2>
      <p className="text-center text-white/50 mb-16 text-sm md:text-base">
        Tools and technologies I work with daily
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Design Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 md:p-10 glow-hover"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 grid place-items-center rounded-2xl bg-accent/10 border border-accent/30">
              <img src="/images/a.png" alt="" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bruno text-gradient">
              {skills.design.title}
            </h3>
          </div>

          <p className="text-white/70 text-sm md:text-base mb-6">
            {skills.design.description}
          </p>

          <div className="mb-5">
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-3">
              Enjoy Designing
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.design.enjoys.map((i) => <Pill key={i} label={i} />)}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-3">
              Design Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.design.tools.map((i) => <Pill key={i} label={i} />)}
            </div>
          </div>
        </motion.div>

        {/* Dev Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass rounded-3xl p-6 md:p-10 glow-hover"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 grid place-items-center rounded-2xl bg-accent/10 border border-accent/30">
              <img src="/images/coding.png" alt="" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bruno text-gradient">
              {skills.dev.title}
            </h3>
          </div>

          <p className="text-white/70 text-sm md:text-base mb-6">
            I sculpt <span className="text-accent font-semibold">dreams</span> to
            life in the browser, molding ideas from scratch.
          </p>

          <div className="mb-5">
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-3">
              Languages &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.dev.languages.map((i) => <Pill key={i} label={i} />)}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-3">
              Dev Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.dev.devTools.map((i) => <Pill key={i} label={i} />)}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="mt-16 glass rounded-3xl p-8 md:p-12">
        <h4 className="text-center text-white/50 text-sm uppercase tracking-widest mb-8">
          Tech I Use
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
          {Object.entries(techIcons).map(([name, src], i) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.15, rotate: 4 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" },
              }}
              className="w-16 h-16 md:w-20 md:h-20 grid place-items-center glass rounded-2xl p-3"
              title={name}
            >
              <img src={src} alt={name} className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}