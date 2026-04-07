import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface-container-low px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-container-lowest rounded-[2rem] shadow-[0_20px_40px_rgba(25,28,30,0.06)] p-10 md:p-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-on-surface mb-2">Let's Talk About Your Next Project</h2>
            <p className="text-on-surface-variant">Whether you have a new project or want to improve your current platform, I'm here to help.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="mono-label text-on-surface-variant ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-surface-container-highest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="mono-label text-on-surface-variant ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-surface-container-highest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="mono-label text-on-surface-variant ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="What type of project?"
                className="w-full bg-surface-container-highest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none"
              />
            </div>
            
            <div className="space-y-2">
              <label className="mono-label text-on-surface-variant ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Write your project details here..."
                className="w-full bg-surface-container-highest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none resize-none"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex justify-center items-center gap-3"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
