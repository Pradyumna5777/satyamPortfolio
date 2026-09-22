import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { socials } from "../data/portfolio";

const iconMap = { FaLinkedin, FaGithub, FaInstagram };

export default function Contact() {
  const items = [
    ...socials.map((s) => ({
      name: s.name,
      url: s.url,
      Icon: iconMap[s.icon],
    })),
    { name: "Email", url: "mailto:satyamkr.16362@gmail.com", Icon: FaEnvelope },
    { name: "Phone", url: "tel:+917667571530", Icon: FaPhone },
  ];

  return (
    <div className="py-24 md:py-32 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-4"
      >
        Get In <span className="text-gradient">Touch</span>
      </motion.h2>
      <p className="text-center text-white/60 mb-16 max-w-xl mx-auto text-sm md:text-base">
        Want to know more? Feel free to reach out — I'm always open to new
        opportunities, collaborations, or just a good conversation.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {items.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl p-5 md:p-6 flex flex-col items-center gap-3 hover:border-accent/60 hover:shadow-[0_0_40px_-10px_rgba(0,255,179,0.6)] transition-all"
          >
            <div className="w-14 h-14 grid place-items-center rounded-2xl bg-accent/10 border border-accent/30 text-accent text-2xl group-hover:bg-accent group-hover:text-black transition-colors">
              <item.Icon />
            </div>
            <span className="text-xs md:text-sm text-white/70 group-hover:text-accent transition">
              {item.name}
            </span>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-20 text-xs md:text-sm text-white/40">
        © {new Date().getFullYear()} Satyam Kumar Chaurasiya — Built with React &amp; Tailwind
      </div>
    </div>
  );
}