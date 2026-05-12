import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    images?: string[];
    tags: string[];
    category: string;
    demo: string;
    year: string;
    role?: string;
    teamSize?: string;
    duration?: string;
    challenges?: string[];
    outcomes?: string[];
  } | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-slate-900 border border-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-400" />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-mono">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-sm font-mono flex items-center gap-2">
                  <Calendar size={14} />
                  {project.year}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl text-slate-100 mb-4">{project.title}</h2>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span className="font-mono text-sm">Live Demo</span>
                </a>
              </div>
            </div>

            {/* Main Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Additional Images */}
            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {project.images.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Project Details */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {project.role && (
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <User size={16} />
                    <span className="text-sm font-mono">Role</span>
                  </div>
                  <p className="text-slate-300">{project.role}</p>
                </div>
              )}
              {project.teamSize && (
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-cyan-400 mb-2 text-sm font-mono">Team Size</div>
                  <p className="text-slate-300">{project.teamSize}</p>
                </div>
              )}
              {project.duration && (
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-cyan-400 mb-2 text-sm font-mono">Duration</div>
                  <p className="text-slate-300">{project.duration}</p>
                </div>
              )}
            </div>

            {/* Full Description */}
            <div className="mb-8">
              <h3 className="text-xl text-slate-100 mb-4">Project Overview</h3>
              <p className="text-slate-400 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl text-slate-100 mb-4">Technical Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span className="text-slate-400">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl text-slate-100 mb-4">Results & Impact</h3>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span className="text-slate-400">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xl text-slate-100 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}