import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/jaxon-yon/' },
    { icon: Mail, label: 'Email', url: 'mailto:jaxonyon@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl mb-6">
            <span className="text-cyan-400 font-mono">03. </span>
            Get In Touch
          </h2>

          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for internship and co-op opportunities in robotics, automation, or
            embedded systems. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
                  >
                    <Icon size={24} />
                    <span className="font-mono">{link.label}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

          <a
            href="mailto:jaxonyon@gmail.com"
            className="inline-block px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors font-mono"
          >
            Say Hello
          </a>

          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm font-mono">
              Designed & Built by Jaxon Yon © 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}