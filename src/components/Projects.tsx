import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Itqan E-commerce Platform",
    description: "A complete store management system with advanced payment gateways and conversion-focused design.",
    tags: ["NEXT.JS", "STRIPE"],
    image: "https://picsum.photos/seed/shop/1200/800",
  },
  {
    title: "Sama Data Management",
    description: "A powerful analytical tool helping companies understand their data through interactive charts.",
    tags: ["REACT", "TAILWIND"],
    image: "https://picsum.photos/seed/data/1200/800",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-lg">
            <h2 className="text-4xl font-extrabold text-on-surface mb-4">Selected Works</h2>
            <p className="text-on-surface-variant">Explore some of my latest work in web engineering and UI design.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all mono-label text-sm">
            View All
            <ArrowUpRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 mb-6 bg-surface-container-low border border-outline-variant/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-surface-variant text-on-surface-variant mono-label px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
