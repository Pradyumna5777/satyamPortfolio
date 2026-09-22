import { motion } from "framer-motion";
import { FiBriefcase, FiDownload, FiCalendar } from "react-icons/fi";
import { experience, personal } from "../data/portfolio";


export default function Experience() {
  return (
    <div className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title mb-4"
      >
        My <span className="text-gradient">Experience</span>
      </motion.h2>
      <p className="text-center text-white/50 mb-16 text-sm md:text-base">
        1.5+ years of building &amp; designing for the web
      </p>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* Vertical gradient line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent" />

        <div className="space-y-12 md:space-y-16">
          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(0,255,179,0.8)] z-10">
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                </div>

                {/* Desktop spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 glass rounded-3xl p-6 md:p-8 glow-hover ${
                    isLeft ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Company row */}
                  {/* <div className="flex items-center gap-3 mb-4">
                    {exp.company === "Thermo Packers" && (
                      <img
                        src="/images/logo.jpeg"
                        alt="Thermo Packers"
                        className="w-10 h-10 rounded-xl object-contain border border-white/10 bg-white/5 p-1.5"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <FiBriefcase className="text-accent" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div> */}

                  {/* Role title */}
                  <h3 className="text-xl md:text-2xl font-bruno text-gradient mb-3">
                    {exp.role}
                  </h3>

                  {/* Meta row: period + type + duration */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                      <FiCalendar className="text-[10px]" />
                      {exp.period}
                    </span>

                    {exp.type && (
                      <span
                        className={`text-xs px-3 py-1 rounded-full border ${
                          exp.type === "Full-time"
                            ? "bg-accent2/10 border-accent2/40 text-accent2"
                            : "bg-white/5 border-white/15 text-white/60"
                        }`}
                      >
                        {exp.type}
                      </span>
                    )}

                    {exp.duration && (
                      <span className="text-xs text-white/40">
                        {exp.duration}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="text-sm text-white/60 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        {/* <a
  href={personal.resumeUrl}
  target="_blank"
  rel="noreferrer"
  download
  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-accent/60 hover:text-accent transition"
>
  <FiDownload />
  View Full Resume
</a> */}
      </motion.div>
    </div>
  );
}