import { motion } from "motion/react";
import { Code2, Palette, Database, Layout } from "lucide-react";

const skills = [
  {
    title: "React.js",
    description: "Building interactive and responsive user interfaces.",
    icon: Code2,
  },
  {
    title: "Tailwind CSS",
    description: "Modern and scalable design with pixel precision.",
    icon: Palette,
  },
  {
    title: "Fullstack Dev",
    description: "Efficient integration of servers and databases.",
    icon: Database,
  },
  {
    title: "UI/UX Design",
    description: "Transforming artistic visions into smart prototypes.",
    icon: Layout,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-container-low px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-on-surface">Technical Skillset</h2>
          <p className="text-on-surface-variant">Tools I use to turn ideas into digital reality.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] flex flex-col gap-6 hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <skill.icon size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{skill.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
