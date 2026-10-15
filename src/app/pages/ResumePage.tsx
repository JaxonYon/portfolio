import { motion } from "motion/react";
import {
  Download,
  Mail,
  MapPin,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Wrench,
  Rocket,
} from "lucide-react";

export function ResumePage() {
  const education = [
    {
      degree: "Bachelor of Science with Diploma in Engineering",
      school: "Saint Mary's University",
      location: "Halifax, Nova Scotia",
      period: "Sept 2025 - May 2027",
      gpa: "4.18/4.30",
      highlights: [
        "Transferring to Dalhousie University, B.Eng. Mechanical (Sept 2027)",
      ],
    },
    {
      degree:
        "International Baccalaureate (IB) Diploma (Bilingual)",
      school: "Cole Harbour District High School",
      location: "Dartmouth, Nova Scotia",
      period: "Sept 2022 - Jul 2025",
      highlights: [],
    },
  ];

  const projects = [
    {
      title: "Fledgling — Rocket Flight Computer",
      status: "In progress",
      period: "2026",
      details: [
        "Building a flight data logger for a D12-powered rocket on ESP32-S3 Feather with BMP388 barometer and LSM6DSO32 IMU, written in C++; implementing on-board apogee detection before first flight",
        "Designed the avionics mounting in a scratch-built airframe",
      ],
    },
    {
      title: "Harmful Algal Bloom Early-Warning Buoy",
      status: "In progress",
      period: "2026",
      details: [
        "Designing an open-source monitoring buoy for Dartmouth lakes. Built a custom fluorometer (OPT101 photodetector, ADS1115 ADC, transistor-driven LED); achieved a statistically clear fluorescence detection over a water blank",
      ],
    },
    {
      title: "CloudToucher V1 — D-Class Model Rocket",
      period: "2026",
      details: [
        "Designed and built a D-class rocket in a two-person team, from concept and OpenRocket simulation through flight; 4 launches and recoveries with no major damage. Tuned stability margin (CG vs. CP) and thrust-to-weight in simulation before first flight",
        "Built the launch system: an E-class ignition controller with continuity check, safety switch and warning lights, and a collapsible launch rail",
      ],
    },
    {
      title: "3D-Printed Motorized Boat",
      period: "2025",
      details: [
        "Designed the hull and drivetrain in SolidWorks and printed in PLA as part of a three-person team; DC motor and paddle wheels, with electronics in a waterproof compartment",
      ],
    },
  ];

  const skills = [
    {
      category: "Technical",
      items: [
        "SolidWorks",
        "C++",
        "Python",
        "Arduino",
        "ESP32",
        "OpenRocket",
        "FDM 3D printing",
        "Soldering and circuit prototyping",
      ],
    },
    {
      category: "Languages",
      items: ["English and French (bilingual)"],
    },
    {
      category: "Security clearance",
      items: ["Secret"],
    },
  ];

  const experience = [
    {
      title: "Combat Engineer",
      company:
        "Canadian Armed Forces, Primary Reserve, 36 Combat Engineer Regiment",
      location: "Shearwater, Nova Scotia",
      period: "Nov 2023 - Present",
      responsibilities: [
        "Qualified sapper (DP1); constructed Medium Girder Bridge and Acrow panel bridges and assembled floating rafts and bridges as part of section- and troop-level teams",
        "Planned and executed explosive demolitions under strict safety, accountability and verification procedures",
        "Trained in defensive field fortifications, route and area search, mine awareness, and chainsaw operations",
      ],
    },
    {
      title: "Line Cook",
      company: "Boston Pizza",
      location: "Cole Harbour, Nova Scotia",
      period: "Oct 2024 - Present",
      responsibilities: [],
    },
    {
      title: "Team Member/Baker",
      company: "Tim Hortons",
      location: "Dartmouth, Nova Scotia",
      period: "Sept 2022 - Oct 2024",
      responsibilities: [],
    },
  ];

  const leadership = [
    {
      organization: "Enactus Saint Mary's",
      location: "Halifax, Nova Scotia",
      roles: [
        {
          title: "Project Manager, Gluten-Free Living",
          period: "Sept 2026 - Present",
          description:
            "Leading development of a web and mobile app that helps people with celiac disease claim the CRA medical expense tax credit for gluten-free food costs.",
        },
        {
          title: "Director of R&D, Gluten-Free Living",
          period: "Oct 2025 - May 2026",
        },
        {
          title: "Lead Developer, LocalLink",
          period: "Oct 2025 - May 2026",
          description:
            "Led a three-person team building an AI-powered trip-planning web platform from concept through deployment.",
        },
        {
          title: "Director of Research and Development, ReEquip",
          period: "Oct 2025 - May 2026",
          description:
            "Led materials and patent research to select recycled, non-petroleum plastics for low-cost youth sports equipment.",
        },
      ],
    },
    {
      organization: "SMU Engineering Society",
      location: "Halifax, Nova Scotia",
      roles: [
        {
          title: "VP Internal",
          period: "Sept 2026 - Present",
        },
      ],
    },
  ];

  const awards = [
    { title: "Frank E. Milne Scholarship", year: "2025, 2026" },
    { title: "James Ryan Engineering Scholarship", year: "2026" },
    { title: "Engineers Nova Scotia Future Engineer First Year Award", year: "2026" },
    {
      title: "Atlantic Engineering Competition — School Champion; 3rd of 17 teams, Atlantic Regional",
      year: "2026",
    },
    { title: "Lockheed Martin CyberQUEST — Two-time Provincial Champion", year: "2024, 2025" },
    { title: "Saint Mary's University Entrance Award", year: "2025" },
    { title: "Erich Burckhardt Foundation Award", year: "2025" },
    { title: "Boston Pizza International Scholarship", year: "2025" },
    { title: "Cole Harbour Foundation Scholarship", year: "2025" },
    { title: "Huestis Insurance Bursary", year: "2025" },
    { title: "Nova Scotia Teachers Union Bursary", year: "2025" },
    { title: "Sgt Paul Angus MacGillivary Bursary", year: "2025" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl sm:text-5xl mb-4">
                  <span className="text-cyan-400 font-mono">
                    /{" "}
                  </span>
                  Resume
                </h1>
                <div className="text-slate-100 text-2xl mb-4">
                  Jaxon Yon
                </div>
                <div className="text-slate-400">
                  Engineering Student
                </div>
              </div>
              <a
                href="/Jaxon-Yon-Resume.pdf"
                download="Jaxon-Yon-Resume.pdf"
                className="download-button px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-lg transition-colors font-mono flex items-center gap-2"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <span className="text-sm">
                  jaxonyon@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-sm">
                  Dartmouth, Nova Scotia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-cyan-400" />
                <a
                  href="https://www.linkedin.com/in/jaxon-yon/"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  www.linkedin.com/in/jaxon-yon/
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap
                className="text-cyan-400"
                size={24}
              />
              <h2 className="text-2xl text-slate-100">
                Education
              </h2>
            </div>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl text-slate-100 mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-cyan-400 mb-1">
                      {edu.school}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {edu.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 font-mono text-sm">
                      {edu.period}
                    </div>
                    {edu.gpa && (
                      <div className="text-slate-400 font-mono text-sm">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
                {edu.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-slate-400">
                    {edu.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-1">
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="text-cyan-400" size={24} />
              <h2 className="text-2xl text-slate-100">
                Projects
              </h2>
            </div>
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl text-slate-100 mb-1">
                      {project.title}
                    </h3>
                    {project.status && (
                      <div className="text-cyan-400 text-sm">
                        {project.status}
                      </div>
                    )}
                  </div>
                  <div className="text-slate-400 font-mono text-sm">
                    {project.period}
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-slate-400">
                  {project.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-400 mt-1">
                        ▹
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-cyan-400" size={24} />
              <h2 className="text-2xl text-slate-100">
                Skills
              </h2>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="sm:flex sm:gap-4"
                >
                  <div className="text-cyan-400 font-mono text-sm sm:w-44 sm:shrink-0 mb-2 sm:mb-0 sm:pt-1">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-cyan-400" size={24} />
              <h2 className="text-2xl text-slate-100">
                Work Experience
              </h2>
            </div>
            {experience.map((exp) => (
              <div
                key={exp.title}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl text-slate-100 mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-cyan-400 mb-1">
                      {exp.company}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {exp.location}
                    </div>
                  </div>
                  <div className="text-slate-400 font-mono text-sm">
                    {exp.period}
                  </div>
                </div>
                {exp.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-2 text-slate-400">
                    {exp.responsibilities.map(
                      (responsibility, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-1">
                            ▹
                          </span>
                          <span>{responsibility}</span>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Leadership */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-cyan-400" size={24} />
              <h2 className="text-2xl text-slate-100">
                Leadership
              </h2>
            </div>
            {leadership.map((org) => (
              <div
                key={org.organization}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-4"
              >
                <h3 className="text-xl text-slate-100 mb-1">
                  {org.organization}
                </h3>
                <div className="text-slate-400 text-sm">
                  {org.location}
                </div>
                <div className="mt-4 space-y-4">
                  {org.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex justify-between items-start gap-4">
                        <div className="text-cyan-400">
                          {role.title}
                        </div>
                        <div className="text-slate-400 font-mono text-sm whitespace-nowrap">
                          {role.period}
                        </div>
                      </div>
                      {role.description && (
                        <p className="mt-1 text-slate-400">
                          {role.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Awards & Honors */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={24} />
              <h2 className="text-2xl text-slate-100">
                Awards & Honors
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-slate-100">
                      {award.title}
                    </h3>
                    <span className="text-cyan-400 font-mono text-sm ml-2 whitespace-nowrap">
                      {award.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
