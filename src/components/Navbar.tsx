import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="glass-nav px-6 md:px-12 py-4 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter text-primary">
        TechCurator
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {["Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-bold"
      >
        Download CV
      </motion.button>
    </nav>
  );
}
