import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { ImageWithFallback } from "../components/image/ImageWithFallback";
import { ProjectModal, hasDemo, demoLabel } from "../components/ProjectModal";

const localLinkLogo = "/images/local-link-logo.png";
const boatImage1 = "/images/boat-1.jpg";
const boatImage2 = "/images/boat-2.jpg";
const boatCad = "/images/boat-cad.png";
const legoBot1 = "/images/lego-bot-1.jpg";
const legoBot2 = "/images/lego-bot-2.jpg";
const reequipLogo = "/images/reequip-logo.png";
const rocketImage1 = "/images/rocket-1.jpg";
const rocketImage2 = "/images/rocket-2.jpg";
const ignitorImage = "/images/Ignitor.JPG";
const cloudToucherImage1 = "/images/cloudtoucher1.JPG";
const cloudToucherImage2 = "/images/cloudtoucher2.JPG";
const cloudToucherImage3 = "/images/cloudtoucher3.JPG";
const cloudToucherImage4 = "/images/cloudtoucher4.JPG";
const glutenFreeLivingImage = "/images/gluten-free-living.png";
const habBuoyRig = "/images/hab-buoy-rig.jpg";
const habBuoyChart = "/images/hab-buoy-run2-chart.png";
const fledglingRocket = "/images/fledgling-rocket.jpg";
const fledglingBreadboard = "/images/fledgling-breadboard.jpg";


export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  const projects = [
    {
      title: "Harmful Algal Bloom Early-Warning Buoy",
      description:
        "In progress: an open-source water-quality buoy to give early warning of harmful algal blooms in Dartmouth lakes, built around a custom low-cost fluorometer for phycocyanin, the pigment specific to cyanobacteria.",
      fullDescription:
        "Harmful algal blooms are a growing problem in Nova Scotia's freshwater lakes, and off-the-shelf monitoring is expensive. This project is a monitoring buoy for Lake Banook and Lake Micmac, built around a fluorometer I'm designing myself. It measures phycocyanin, the pigment produced by cyanobacteria, the organisms behind toxic blooms. Turbidity mixes up sediment and algae, and chlorophyll is present in all algae, harmless species included; phycocyanin is specific to cyanobacteria. On the bench rig, an ESP32-S3 drives the excitation LED, an optical filter separates the fluorescence from the excitation light, and an OPT101 photodetector reads it through a 16-bit ADS1115 ADC. The firmware pulses the LED and subtracts LED-off readings from LED-on readings to cancel out ambient light.",
      image: habBuoyRig,
      images: [habBuoyRig, habBuoyChart],
      tags: [
        "ESP32",
        "C++",
        "Embedded Systems",
        "Optics",
        "Analog Electronics",
        "Environmental Monitoring",
      ],
      category: "Research & Development",
      demo: "",
      year: "2026",
      role: "Designer & Builder",
      teamSize: "1",
      duration: "May 2026 - Present",
      challenges: [
        "Detecting microvolt-level fluorescence next to an LED that is far brighter",
        "Rejecting ambient light by pulsing the LED and subtracting dark readings in firmware",
        "A 60 Hz interference problem, traced to missing supply decoupling capacitors on the OPT101",
      ],
      outcomes: [
        "Clear fluorescence detection over a water blank: +155 µV and +179 µV for two samples against +29 µV for water (±1 SEM)",
        "Working bench fluorometer built from low-cost parts",
        "Next: a dilution series to show the signal tracks concentration, then validation against a reference instrument",
      ],
    },
    {
      title: "Fledgling - Rocket Flight Computer",
      description:
        "In progress: a flight data logger for a D12-powered rocket that records high-rate IMU and barometer data from just before liftoff through the flight.",
      fullDescription:
        "Fledgling is a flight computer built on an Adafruit Feather ESP32-S3, with an LSM6DSO32 IMU and a BMP388 barometer. The flight firmware is written from scratch in C++: it talks to both sensors at the register level, and the BMP388 pressure maths is written from the datasheet. On the pad it runs a 60-second countdown, checks that the rocket is nose-up before arming, then holds the last ~2.3 s of data in memory. Liftoff triggers on more than 3 g for 50 ms, or a 10 m barometric rise as a backup. It then records 120 s of accel and gyro data at about 780 Hz and pressure at 50 Hz to a dedicated 2 MB flash partition. A Python script pulls the log afterwards and verifies it with a checksum, and the board won't re-arm over a log that hasn't been downloaded. A piezo beeper signals each state, because there's no screen at the pad.",
      image: fledglingRocket,
      showWholeImage: true,
      images: [fledglingRocket, fledglingBreadboard],
      tags: [
        "ESP32-S3",
        "C++",
        "Embedded Systems",
        "Sensors",
        "Rocketry",
        "Python",
      ],
      categories: ["Rocketry"],
      demo: "",
      year: "2026",
      role: "Designer & Developer",
      teamSize: "1",
      duration: "Sept 2026 - Present",
      challenges: [
        "Keeping up with 780 Hz IMU data while flash writes block the processor; stress-tested the IMU buffer with simulated 100 ms stalls",
        "Capturing liftoff itself by keeping pre-trigger data in a buffer, so the log doesn't start after the motor has already lit",
        "Protecting the flight log from accidental erasure and making the board safe to arm at the pad without a laptop",
        "Fitting the avionics into a scratch-built airframe",
      ],
      outcomes: [
        "Flight logger firmware complete and bench-tested",
        "Moved from a breadboard prototype to a soldered protoboard, installed in the airframe",
        "Next: on-board apogee detection, then first flight",
      ],
    },
    {
      title: "CloudToucher V1",
      description:
        "Designed and built a fully functional D-class model rocket in a two-person team. 4 successful launches and recoveries.",
      fullDescription:
        "A complete design project taking a D-class model rocket from concept and OpenRocket simulation through to flight. Before the first launch, we tuned the stability margin (the distance between the centre of gravity and the centre of pressure) and the thrust-to-weight ratio in simulation. The rocket flew from the launch rail and ignition controller in the E-Class Rocket Launch System project, and completed 4 launches and recoveries with no major damage.",
      image: cloudToucherImage1,
      showWholeImage: true,
      images: [cloudToucherImage2, cloudToucherImage3, cloudToucherImage4],
      tags: [
        "Mechanical Design",
        "OpenRocket",
        "Prototyping",
        "Rocketry"
      ],
      categories: ["Mechanical Design", "Rocketry"],
      demo: "https://youtube.com/shorts/N4Sxm8ZpTCI",
      year: "2026",
      role: "Mechanical Engineer",
      teamSize: "2 members",
      duration: "1 month",
      challenges: [
        "Balancing the thrust-to-weight ratio",
        "Getting accurate OpenRocket simulations",
        "Tuning the stability margin between centre of gravity and centre of pressure",
      ],
      outcomes: [
        "4 successful launches and recoveries with no major damage",
        "Safe recovery with zero injuries",
      ],
    },
        {
      title: "3D Printed Motorized Boat",
      description:
        "Designed and 3D printed a working motorized boat in a three-person team, with the hull and drivetrain modelled in SolidWorks and printed in PLA.",
      fullDescription:
        "The hull and drivetrain were designed in SolidWorks and 3D printed in PLA, with careful attention to weight distribution, buoyancy and structural strength. A DC motor, driven by a motor driver circuit, turns the paddle wheels through a gear drive, and the electronics sit in a waterproof compartment that stays accessible for battery changes. In its water test the boat floated stably and drove under its own power with steering control.",
      image: boatImage1,
      images: [boatImage1, boatImage2, boatCad],
      tags: [
        "3D Printing",
        "SolidWorks",
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
        "Designing a watertight hull that stays buoyant while carrying the motor and battery",
        "Distributing weight to prevent tipping",
        "Keeping the electronics dry",
        "Balancing the strength of 3D printed parts against weight",
      ],
      outcomes: [
        "Floated stably and drove under its own power with steering control in its water test",
      ],
    },
    {
      title: "E-Class Rocket Launch System",
      description:
        "Designed and built a complete launch system for model rockets: an electrical ignition controller for up to E-class motors and a collapsible launch rail and pad.",
      fullDescription:
        "A complete ground launch system for model rocket launches. The ignition controller starts motors up to E-class and includes a continuity check, safety switch and warning lights as required by the Canadian Association of Rocketry (CAR). The circuit was prototyped on a breadboard before the final components were ordered and soldered. The launch rail and pad were built exclusively from hardware store and household materials, and designed to be easy to modify, take apart and store.",
      image: rocketImage1,
      showWholeImage: true,
      images: [rocketImage1, rocketImage2, ignitorImage],
      tags: [
        "Electrical Design",
        "Mechanical Design",
        "Prototyping",
        "Soldering",
        "Rocketry",
      ],
      categories: ["Rocketry", "Mechanical Design"],
      demo: "https://youtu.be/a_mvPZzFEHo",
      year: "2026",
      role: "Designer & Builder",
      teamSize: "1",
      challenges: [
        "Designing continuity and safety indicators to CAR requirements",
        "Soldering small electrical components",
        "Shielding the plastic rail components from the rocket motor exhaust",
        "Keeping the rail easy to store and take apart",
      ],
      outcomes: [
        "Successful rocket launches",
        "Became a shared Rocketry Society resource",
      ],
    },
    {
      title: "Gluten-Free Living - CRA Tax Credit App",
      description:
        "Web and mobile app that helps people with celiac disease claim the CRA Medical Expense Tax Credit for the extra cost of gluten-free food. Live at glutenfreeliving.ca.",
      fullDescription:
        "Canadians with celiac disease can claim the incremental cost of gluten-free food under the CRA Medical Expense Tax Credit, but doing it by hand means saving every receipt, finding a regular-product equivalent for each gluten-free item, and calculating the price difference. Gluten-Free Living automates that process. Users scan their grocery receipts, and the app uses Google Gemini to extract the gluten-free items, finds regular-product equivalents to calculate the incremental cost, adjusts for shared household consumption, and stores everything in a format ready for CRA reporting. The app is built as a React web app with a FastAPI backend and PostgreSQL database, and shares the same codebase with iOS and Android builds through Capacitor. Started as an Enactus Saint Mary's venture, where I was Director of R&D before taking over as Project Manager.",
      image: glutenFreeLivingImage,
      images: [],
      tags: [
        "React",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "AI/ML",
        "Capacitor",
      ],
      category: "Software Development",
      demo: "https://glutenfreeliving.ca/",
      year: "2025",
      role: "Project Manager (previously Director of R&D)",
      duration: "Oct 2025 - Present",
      challenges: [
        "Reliably extracting gluten-free items from receipts with inconsistent formats and abbreviations",
        "Matching each gluten-free product to a fair regular-product equivalent for the incremental cost",
        "Keeping records structured to meet CRA documentation requirements",
        "Shipping one codebase to web, iOS and Android",
      ],
      outcomes: [
        "Live at glutenfreeliving.ca and serving real users",
      ],
    },
    {
      title: "LocalLink - AI Trip Planning Platform",
      description:
        "Lead developer of LocalLink, an AI-powered trip planning platform that helps users discover and plan personalized travel experiences. Led a team of three developers, integrated stakeholder feedback, and delivered a fully functional full-stack application with intelligent recommendations.",
      fullDescription:
        "LocalLink is a comprehensive trip planning platform that leverages artificial intelligence to provide personalized travel recommendations and itinerary planning. As the lead developer and project manager, I was responsible for the complete development lifecycle - from initial concept through deployment. The platform integrates multiple AI models for destination recommendations, activity suggestions, and budget optimization. Built with a modern tech stack including Python, Javascript, and cloud services,  I managed a team of 3 developers, coordinated with stakeholders for requirements gathering, conducted sprint planning, and ensured timely delivery of features while maintaining high code quality standards.",
      image: localLinkLogo,
      images: [],
      tags: ["Python", "Javascript", "AI/ML"],
      category: "Software Development",
      demo: "https://locallinkcanada.com/",
      year: "2025",
      role: "Lead Developer & Project Manager",
      teamSize: "3 members",
      duration: "8 months",
      challenges: [
        "Integrating multiple AI APIs while maintaining low latency and high accuracy in recommendations",
        "Balancing stakeholder feature requests with technical feasibility and project timelines",
        "Optimizing database queries for complex travel data relationships",
        "Ensuring responsive design across mobile, tablet, and desktop platforms",
      ],
      outcomes: [
        "Deployed and live at locallinkcanada.com",
      ],
    },
    {
      title: "ReEquip - Sustainable Sports Equipment R&D",
      description:
        "Director of Research & Development for ReEquip, leading materials research to select non-petroleum-based recycled plastics for low-cost sports equipment, to remove the financial barriers keeping underprivileged youth out of sports.",
      fullDescription:
        "ReEquip set out to provide recycled sports equipment for underprivileged youth. As Director of Research & Development, I led the materials and patent research to select recycled, non-petroleum-based plastics suited to youth sports equipment, and compiled monthly technical reports for the team's Project Managers. The initiative addresses two problems at once: plastic waste and youth access to sports.",
      image: reequipLogo,
      images: [],
      tags: [
        "Materials Science",
        "Research",
        "Sustainability",
        "Patent Analysis",
      ],
      category: "Research & Development",
      demo: "",
      year: "2025",
      role: "Director of Research & Development",
      teamSize: "Cross-functional collaboration",
      duration: "Oct 2025 - May 2026",
      challenges: [
        "Identifying non-petroleum-based plastics with material properties suited to sports equipment",
        "Balancing cost-effectiveness with quality to keep equipment affordable for underprivileged communities",
        "Researching existing patents on recycled-plastic sports equipment",
        "Accounting for safety regulations and certification requirements for youth sports equipment",
      ],
      outcomes: [
        "Identified 5+ recycled plastic candidates for the product line",
        "Compiled and delivered 7+ monthly technical reports to stakeholders",
        "Contributed to ReEquip's mission to provide sustainable sports access to underserved youth communities",
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
      demo: "",
      year: "2024",
      role: "Lead Developer",
      teamSize: "4",
      duration: "3 months",
      challenges: [
        "Developing an effective attack algorithm while avoiding dangerous situations",
        "Minimizing sensor noise and false readings from ambient lighting conditions",
      ],
      outcomes: [
        "Undefeated, 1st place in the league; eliminated 5 opponents autonomously",
      ],
    },
  ];

  const categories = [
    "All",
    "Rocketry",
    "Robotics",
    "Software Development",
    "Research & Development",
    "Mechanical Design",
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
              A collection of my engineering projects spanning
              embedded systems, rocketry, environmental sensing,
              and software. Each project represents hands-on
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
                <div className="relative overflow-hidden h-48 bg-slate-950">
                  {/* For tall photos: a blurred copy fills the frame so the whole photo can be shown uncropped */}
                  {project.showWholeImage && (
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
                    />
                  )}
                  <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors z-10" />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className={`relative w-full h-full transition-transform duration-300 ${
                      project.showWholeImage
                        ? "object-contain group-hover:scale-105"
                        : "object-cover group-hover:scale-110"
                    }`}
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
                    {hasDemo(project.demo) && (
                      <div className="flex gap-2 ml-2">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          aria-label={demoLabel(project.demo)}
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    )}
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