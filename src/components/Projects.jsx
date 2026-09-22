import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiBriefcase } from "react-icons/fi";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-3xl p-6 md:p-8 glow-hover flex flex-col relative overflow-hidden"
    >
      {/* Featured ribbon */}
      {project.featured && (
        <div className="absolute top-0 right-0 text-[10px] tracking-wider uppercase bg-gradient-to-r from-accent to-cyan-400 text-black font-bold px-4 py-1 rounded-bl-2xl">
          Featured
        </div>
      )}

      {/* Header: number + meta + links */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 grid place-items-center rounded-2xl bg-accent/10 border border-accent/30 text-accent font-bruno">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-white/40">
              {project.category}
            </span>
            <span className="text-xs text-accent">{project.year}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 grid place-items-center rounded-xl glass hover:bg-accent hover:text-black transition"
              title="View Code"
            >
              <FiGithub />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 grid place-items-center rounded-xl glass hover:bg-accent hover:text-black transition"
              title="Visit Site"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      {/* Company + Role */}
      {(project.company || project.role) && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.company && (
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              <FiBriefcase className="text-accent" />
              {project.company}
            </span>
          )}
          {project.role && (
            <span className="text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
              {project.role}
            </span>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bruno mb-3 group-hover:text-gradient transition">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <ul className="space-y-2 mb-6 flex-1">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="text-sm text-white/60 flex items-start gap-2"
            >
              <span className="text-accent mt-0.5 shrink-0">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  // Sort: featured first
  const sorted = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <div className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-4"
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>
      <p className="text-center text-white/50 mb-16 text-sm md:text-base">
        Selected work from my 1.5+ years of building
      </p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {sorted.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/Pradyumna5777"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-accent/60 hover:text-accent transition"
        >
          <FiGithub /> See more on GitHub
        </a>
      </div>
    </div>
  );
}