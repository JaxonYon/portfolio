import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { ImageWithFallback } from "../components/image/ImageWithFallback";
import { ProjectModal } from "../components/ProjectModal";

const localLinkLogo = "/images/local-link-logo.png";
const boatImage1 = "/images/boat-1.jpg";
const boatImage2 = "/images/boat-2.jpg";
const legoBot1 = "/images/lego-bot-1.jpg";
const legoBot2 = "/images/lego-bot-2.jpg";
const reequipLogo = "/images/reequip-logo.png";
const rocketImage1 = "/images/rocket-1.jpg";
const rocketImage2 = "/images/rocket-2.jpg";
const ignitorImage = "/images/Ignitor.jpg";
const cloudToucherImage1 = "/images/cloudtoucher1.jpg";
const cloudToucherImage2 = "/images/cloudtoucher2.jpg";
const cloudToucherImage3 = "/images/cloudtoucher3.jpg";
const cloudToucherImage4 = "/images/cloudtoucher4.jpg";


export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  const projects = [
    {
      title: "CloudTickler V1",
      description:
        "Designed and Built a fully functional D class Model Rocket. 4 Successful Launches and Recoveries",
      fullDescription:
        "A complete mechanical design project involving the creation of a functional rocket from concept to testing to launch, leading to 4 successful rocket launches and recoveries with no major damage.", 
      image: cloudToucherImage1,
      images: [cloudToucherImage2, cloudToucherImage3, cloudToucherImage4],
      tags: [
        "Mechanical Design",
        "Prototyping",
        "Rocketry"
      ],
      categories: ["Mechanical Design", "Rocketry"],
      demo: "https://youtube.com/shorts/citFdjzN0q0",
      year: "2026",
      role: "Mechanical & Electrical Engineer",
      teamSize: "2 members",
      duration: "1 month",
      challenges: [
        "Balancing weight to thrust ratios",
        "Getting accurate OpenRocket Simulations",
        "Stability calculations with center of mass and center of pressure",
      ],
      outcomes: [
        "4 Successful launches with zero major damage.",
        "Safe Recovery with zero injuries.",
        "Project demonstrated practical application of Engineering Design.",
      ],
    },
        {
      title: "3D Printed Motorized Boat",
      description:
        "Designed, 3D printed, and tested a fully functional motorized boat with propulsion system. Complete CAD design, iterative prototyping, and water testing to validate buoyancy, stability, and motor efficiency. Successfully demonstrated in pool testing scenarios.",
      fullDescription:
        "A complete mechanical design project involving the creation of a functional motorized boat from concept to testing. The entire hull and mechanical assembly were designed in CAD software and 3D printed using PLA material, with careful consideration for weight distribution, buoyancy, and structural integrity. The boat features a custom propulsion system with a DC motor and propeller assembly, controlled by a motor driver circuit. Extensive iterative design and testing were conducted to optimize the hull shape for stability and reduce drag. Water testing validated the design's seaworthiness, with successful propulsion and steering control. The electronics are housed in a waterproof compartment to protect sensitive components while maintaining accessibility for battery replacement and programming updates.",
      image: boatImage1,
      images: [boatImage1, boatImage2],
      tags: [
        "3D Printing",
        "CAD Design",
        "Arduino",
        "Mechanical Design",
        "Prototyping",
      ],
      categories: ["Mechanical Design", "Robotics"],
      demo: "https://youtube.com/shorts/citFdjzN0q0",
      year: "2025",
      role: "Mechanical & Electrical Engineer",
      teamSize: "3 members",
      duration: "1 month",
      challenges: [
        "Designing watertight hull structure that maintains buoyancy while carrying motor and battery weight",
        "Optimizing propeller placement and motor mount for maximum thrust efficiency",
        "Ensuring proper weight distribution to prevent tipping and maintain stability in water",
        "Protecting electronics from water damage while maintaining heat dissipation for motor driver",
        "Iterating through multiple hull designs to reduce drag and improve maneuverability",
        "Balancing structural strength of 3D printed parts with weight constraints",
      ],
      outcomes: [
        "Successfully completed floatation test runs with stable operation and responsive control",
        "Hull design maintained stability even with uneven weight distribution during testing",
        "Motor system provided sufficient thrust for both forward propulsion and directional control",
        "Project demonstrated practical application of CAD, 3D printing, and embedded systems integration",
      ],
    },
    {
      title: "LocalLink - AI Trip Planning Platform",
      description:
        "Lead developer of LocalLink, an AI-powered trip planning platform that helps users discover and plan personalized travel experiences. Managed a cross-functional team, integrated stakeholder feedback, and delivered a fully functional full-stack application with intelligent recommendations.",
      fullDescription:
        "LocalLink is a comprehensive trip planning platform that leverages artificial intelligence to provide personalized travel recommendations and itinerary planning. As the lead developer and project manager, I was responsible for the complete development lifecycle - from initial concept through deployment. The platform integrates multiple AI models for destination recommendations, activity suggestions, and budget optimization. Built with a modern tech stack including Python, Javascript, and cloud services,  I managed a team of 3 developers, coordinated with stakeholders for requirements gathering, conducted sprint planning, and ensured timely delivery of features while maintaining high code quality standards.",
      image: localLinkLogo,
      images: [
        "https://images.unsplash.com/photo-1761198879998-6bb91fd6797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwbGFubmluZyUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NjY0NjI2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHNvZnR3YXJlfGVufDF8fHx8MTc2NjU0NDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      tags: ["Python", "Javascript", "AI/ML", "MongoDB", "AWS"],
      category: "Software Development",
      demo: "https://locallinkcanada.com/",
      year: "2025",
      role: "Lead Developer & Project Manager",
      teamSize: "3 members",
      duration: "8 months",
      challenges: [
        "Integrating multiple AI APIs while maintaining low latency and high accuracy in recommendations",
        "Managing team coordination across different time zones and skill levels",
        "Balancing stakeholder feature requests with technical feasibility and project timelines",
        "Implementing real-time collaborative features with conflict resolution",
        "Optimizing database queries for complex travel data relationships",
        "Ensuring responsive design across mobile, tablet, and desktop platforms",
      ],
      outcomes: [],
    },
    {
      title: "ReEquip - Sustainable Sports Equipment R&D",
      description:
        "Director of Research & Development for ReEquip, leading materials research to identify optimal non-petroleum-based plastics for manufacturing sustainable sports equipment from recycled materials. Driving innovation to remove financial barriers preventing underprivileged youth from participating in sports.",
      fullDescription:
        "ReEquip is revolutionizing the sports industry by providing fully recycled sports equipment for underprivileged youth. As Director of Research & Development, I lead the materials science efforts to identify and validate non-petroleum-based plastics that can match or exceed the performance of traditional sports equipment. This role combines advanced materials research, patent analysis, prototype development, and cross-functional collaboration with Project Managers. The initiative directly addresses two critical global challenges: plastic waste pollution and youth access to sports. My work involves conducting comprehensive material property testing, compiling technical reports for stakeholders, performing patent landscape analysis to protect our innovations, and collaborating on prototype development to ensure products meet rigorous quality and safety standards while remaining affordable.",
      image: reequipLogo,
      images: [
        "https://images.unsplash.com/photo-1581166931041-b62d92d52852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcmlhbHMlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzY2NjcwNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1759868412016-8b7da190992a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xlZCUyMHBsYXN0aWMlMjBzcG9ydHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY2NjcwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      tags: [
        "Materials Science",
        "Research",
        "Sustainability",
        "Patent Analysis",
        "Prototyping",
      ],
      category: "Research & Development",
      demo: "#",
      year: "2025",
      role: "Director of Research & Development",
      teamSize: "Cross-functional collaboration",
      duration: "Ongoing",
      challenges: [
        "Identifying non-petroleum-based plastics with material properties matching traditional sports equipment performance standards",
        "Balancing cost-effectiveness with quality to ensure equipment remains affordable for underprivileged communities",
        "Conducting comprehensive material testing across varying environmental conditions and use cases",
        "Navigating complex patent landscape to protect innovative recycling processes and product designs",
        "Coordinating research findings with Project Managers to accelerate prototype development cycles",
        "Ensuring all materials meet safety regulations and certification requirements for youth sports equipment",
      ],
      outcomes: [
        "Successfully identified 5+ viable recycled plastic candidates meeting performance benchmarks",
        "Compiled and delivered 7+ montly technical reports providing actionable insights to stakeholders",
        "Collaborated on prototype iterations, achieving progressive improvements in durability and performance",
        "Contributing to ReEquip's mission to provide sustainable sports access to underserved youth communities",
      ],
    },
    {
      title: "Lego League Battle Bot",
      description:
        "Designed and built an autonomous robot using Lego, infrared sensors, and LEGO Mindstorms. Implemented control algorithm for smooth path tracking and obstacle avoidance using ultrasonic sensors. Undefeated in battle tests.",
      fullDescription:
        "This project involved the complete design and development of an autonomous LEGO SUMO robot from scratch. The robot uses an array of ultrasonic, infrared, and touch sensors to detect obstacles, opponents, and gaps on a table above the ground. A sophisticated algorithm was implemented to ensure smooth and accurate path tracking, an aggressive sumo strategy, self recovery and gap avoidance. The robot also features obstacle detection and avoidance capabilities using ultrasonic sensors, allowing it to navigate around unexpected obstacles while maintaining its attack. The mechanical chassis was iteratively designed and built out of LEGO. After extensive testing and parameter tuning, the robot came first in the league and was undefeated.",
      image: legoBot1,
      images: [legoBot1, legoBot2],
      tags: [
        "Lego",
        "Robotics",
        "Control Algorithms",
        "Sensors",
      ],
      categories: ["Robotics", "Mechanical Design"],
      demo: "#",
      year: "2024",
      role: "Lead Developer",
      teamSize: "4",
      duration: "3 months",
      challenges: [
        "Developing an effective attack algorithm while avoiding dangerous situations",
        "Minimizing sensor noise and false readings from ambient lighting conditions",
        "Created an Attack strategy to effectively push opponents off tables",
        "Implementing efficient power management for extended battery life",
      ],
      outcomes: [
        "Achieved perfect competiton results",
        "Robot successfully eliminated 5 opponents without human intervention",
        "Won!",
      ],
    },
    {
      title: "Rocket Launchpad",
      description:
        "Designed and built an easy to modify and store Rocket launchpad",
      fullDescription:
        "This project involved designing and building a launch rail and pad to launch model rockets from. This build used exclusively hardware store and household materials.",
      image: rocketImage1,
      images: [rocketImage1, rocketImage2],
      tags: ["Mechanical Design", "Prototyping", "Rocketry"],
      categories: ["Rocketry", "Mechanical Design"],
      demo: "https://youtu.be/a_mvPZzFEHo",
      year: "2026",
      role: "Builder",
      teamSize: "1",
      duration: "2 Hours",
      challenges: [
        "Shielding the plastic from the rocket motor.",
        "Keeping the rail easy to store and take apart",
      ],
      outcomes: [
        "Successful rocket launches",
        "Rocketry Society resources",
      ],
    },
    {
      title: "Rocket Motor Initiation Circuit",
      description:
        "Designed and built an electrical initiation circuit",
      fullDescription:
        "This project involved designing and building an electrical initiation circuit to start E class rocket motors. The project features safety switches and warning lights as required by the CAR. This involved prototyping with a breadboard before ordering and soldering the final components.",
      image: ignitorImage,
      images: [ignitorImage],
      tags: ["Electrical Design", "Prototyping", "Rocketry"],
      category: "Rocketry",
      demo: "https://youtu.be/a_mvPZzFEHo",
      year: "2026",
      role: "Builder",
      teamSize: "1",
      duration: "2 Hours",
      challenges: [
        "Designing continuity and safety indicators",
        "Soldering small electrical components",
      ],
      outcomes: [
        "Successful rocket launches",
        "Rocketry Society resources",
      ],
    },
  ];

  const categories = [
    "All",
    "Robotics",
    "Software Development",
    "Research & Development",
    "Mechanical Design",
    "Rocketry",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => {
          // Support both single category and multiple categories
          if (project.categories) {
            return project.categories.includes(selectedFilter);
          }
          return project.category === selectedFilter;
        });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl mb-4">
              <span className="text-cyan-400 font-mono">
                /{" "}
              </span>
              Projects
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl">
              A collection of my mechatronics projects spanning
              robotics, embedded systems, AI/ML, and
              electronics. Each project represents hands-on
              learning and problem-solving in engineering.
            </p>
          </div>

          {/* Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="text-cyan-400" size={20} />
              <span className="text-slate-400 font-mono">
                Filter by category:
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-lg font-mono transition-colors ${
                    selectedFilter === category
                      ? "bg-cyan-500 text-slate-950"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                onClick={() => setSelectedProject(project)}
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors z-10" />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-sm text-cyan-400 rounded-full text-sm font-mono">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-slate-100">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 ml-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-mono flex items-center gap-1">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}