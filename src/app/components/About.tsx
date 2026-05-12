import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-12">
            <span className="text-cyan-400 font-mono">01. </span>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-400">
              <p>
                I'm a first year engineering student with a passion for creating intelligent systems
                that bridge the physical and digital worlds. My journey in engineering started with a
                fascination for robotics and has evolved into a comprehensive understanding of mechanical
                design, electronics, and software development.
              </p>
              <p>
                Currently pursuing my degree, I've gained hands-on experience in various projects ranging
                from autonomous robots to IoT systems. I'm particularly interested in robotics,
                automation, and the Internet of Things.
              </p>
              <p>
                When I'm not designing circuits or programming microcontrollers, you can find me
                working as a Combat Engineer in the Canadian Armed Forces, hanging out with friends, or biking in the woods.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Education</span>
                    <span className="text-cyan-400">B.Eng</span>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Expected Graduation</span>
                    <span className="text-cyan-400">2029</span>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">GPA</span>
                    <span className="text-cyan-400">4.15/4.3</span>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Focus Areas</span>
                    <span className="text-cyan-400 text-right">Robotics & AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
