import { motion } from "motion/react";
import { Terminal, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 pt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-2 bg-tertiary-fixed text-tertiary px-4 py-1.5 rounded-full">
            <Terminal size={14} />
            <span className="mono-label">Available for Hire</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter">
            Crafting <span className="text-primary italic">Digital</span> Experiences with Precision
          </h1>
          
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            I'm a full-stack developer specialized in building high-performance web applications. 
            Focused on aesthetics, performance, and seamless user experiences.
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="btn-primary flex items-center gap-2">
              Start a Project
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              View Work
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tertiary-fixed/30 rounded-full blur-3xl" />
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square max-w-md mx-auto">
            <img 
              src="https://picsum.photos/seed/tech/800/800" 
              alt="Professional Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
              <Terminal size={20} />
            </div>
            <div>
              <p className="mono-label text-[10px] text-on-surface-variant">Frontend Expert</p>
              <p className="text-xs font-bold">React & Next.js</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
