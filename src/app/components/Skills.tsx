import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Cpu, Wrench, Code, Zap, Brain, Cog } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      icon: Cpu,
      title: 'Embedded Systems',
      skills: ['Arduino'],
    },
    {
      icon: Wrench,
      title: 'Mechanical Design',
      skills: ['SolidWorks', '3D Printing'],
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'C/C++', 'JavaScript', 'Git'],
    },
    {
      icon: Zap,
      title: 'Electronics',
      skills: ['Soldering', 'Circuit Analysis'],
    },
    {
      icon: Brain,
      title: 'AI & ML',
      skills: ['AI integration'],
    },
    {
      icon: Cog,
      title: 'Control Systems',
      skills: ['Python and AHK Automation'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-12">
            <span className="text-cyan-400 font-mono">02. </span>
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-slate-100">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
