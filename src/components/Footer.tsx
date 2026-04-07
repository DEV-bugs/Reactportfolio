export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant/10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-black tracking-tighter text-primary">
          TechCurator
        </div>
        
        <p className="text-on-surface-variant text-sm">
          © 2024 All rights reserved.
        </p>
        
        <div className="flex gap-6 items-center">
          {["LinkedIn", "GitHub", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-on-surface-variant hover:text-primary text-sm font-bold transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
