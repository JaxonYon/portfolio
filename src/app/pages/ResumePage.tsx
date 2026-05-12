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
} from "lucide-react";

export function ResumePage() {
  const handleDownloadPDF = () => {
    window.print();
  };

  const education = [
    {
      degree: "Bachelor of Science with Diploma in Engineering",
      school: "Saint Mary's University",
      location: "Halifax, Nova Scotia",
      period: "Aug 2025 - Jun 2027",
      gpa: "4.15/4.3",
      highlights: [],
    },
    {
      degree:
        "International Baccalaureate (IB) High School Diploma",
      school: "Cole Harbour District High School",
      location: "Dartmouth, Nova Scotia",
      period: "Oct 2022 - Jul 2025",
      score: "36",
      highlights: [],
    },
  ];

  const experience = [
    {
      title: "Combat Engineer",
      company: "Canadian Armed Forces, Primary Reserve Force",
      location: "Shearwater, Nova Scotia",
      period: "Nov 2023 - Present",
      responsibilities: [
        "Execute combat engineering tasks including construction of field defenses, bridges, and roadways to facilitate troop and equipment movement",
        "Maintain and operate combat engineering equipment including bulldozers and excavators, ensuring optimal functionality for deployment",
        "Contribute to construction and enhancement of defensive positions and shelters, improving security and survivability of personnel",
        "Participate in ongoing training exercises and courses, developing skills in combat engineering techniques, weapon proficiency, and military tactics",
      ],
    },
    {
      title: "Cook",
      company: "Boston Pizza",
      location: "Cole Harbour, Nova Scotia",
      period: "Oct 2024 - Present",
      responsibilities: [
        "Prepare and cook food items according to recipes and quality standards in a fast-paced kitchen environment",
        "Maintain food safety and sanitation standards, ensuring compliance with health regulations",
        "Coordinate with team members to ensure timely order completion during peak service hours",
        "Manage inventory and assist with food preparation and stock rotation",
      ],
    },
    {
      title: "Team Member/Baker",
      company: "Tim Hortons",
      location: "Dartmouth, Nova Scotia",
      period: "Sep 2022 - Oct 2024",
      responsibilities: [
        "Prepared baked goods and food items following company standards and recipes",
        "Provided customer service in a high-volume quick-service restaurant environment",
        "Maintained cleanliness and organization of work stations and food preparation areas",
        "Worked collaboratively with team members to ensure efficient service during peak hours",
      ],
    },
    {
      title: "Flyer Delivery",
      company: "The Chronicle Herald",
      location: "Dartmouth, Nova Scotia",
      period: "Feb 2022 - Nov 2022",
      responsibilities: [
        "Delivered promotional materials and newspapers to designated routes on schedule",
        "Managed route organization and maintained delivery accuracy and timeliness",
        "Demonstrated reliability and time management skills in independent work environment",
      ],
    },
  ];

  const volunteer = [
    {
      title: "Head Developer",
      organization: "LocalLink",
      location: "Halifax, Nova Scotia",
      period: "Oct 2025 - Present",
      description:
        "Leading a cross-functional team of eight in the architectural design and end-to-end development of a sophisticated AI-powered trip planning platform.",
    },
    {
      title: "Director of Research & Development",
      organization: "ReEquip",
      location: "Halifax, Nova Scotia",
      period: "Oct 2025 - Present",
      description:
        "Directing the R&D lifecycle for sustainable sports technology by conducting patent studies and technical research to prototype high-performance equipment from fully recycled materials.",
    },
    {
      title: "Director of Research & Development",
      organization: "Gluten-Free Living",
      location: "Halifax, Nova Scotia",
      period: "Oct 2025 - Present",
      description:
        "Creating a web and mobile app to help the gluten-free community redeem Canadian Revenue Agency Tax Credits.",
    },
    {
      title: "Member",
      organization: "CHDHS Prom Committee",
      location: "Dartmouth, Nova Scotia",
      period: "2024 - 2025",
      description: "",
    },
    {
      title: "Vice President/Member",
      organization: "CHDHS Student Council",
      location: "Dartmouth, Nova Scotia",
      period: "2022 - 2025",
      description: "",
    },
  ];

  const skills = {
    Programming: ["Python", "C/C++", "JavaScript"],
    "CAD/Design": ["SolidWorks", "3D Printing"],
    "Embedded Systems": ["Arduino", "LEGO Mindstorms"],
    Cybersecurity: [
      "CTF Competitions",
      "Network Security",
      "Penetration Testing",
    ],
  };

  const awards = [
    {
      title: "Atlantic Engineering Competition School Champions, Regional Bronze",
      year: "2025",
      description:
        "Designed, Tested, and Produced a reliable and effective catapult from limited supplies, leading to first place and qualifying for the Regional Championship. Selected to compete after winning at the university level; placed 3rd out of 17 teams across the Atlantic provinces. Developed a creative engineering solution to a surprise prompt, testing the ability to maintain performance and accuracy under a short deadline.",
    },
    {
      title:
        "Lockheed Martin CyberQUEST - Two-Time Provincial Champion",
      year: "2024, 2025",
      description:
        "Provincial champion in annual high school cyber competition featuring CTF challenges created by Lockheed Martin cybersecurity engineers, including intrusion scenarios, steganography, reverse engineering, OS hacks, packet capture, web exploits, and social engineering",
    },

    {
      title: "Frank E. Milne Scholarship",
      year: "2025",
      description:
        "Prestigious scholarship awarded for extreme academic merit in STEM fields, limited to 50 students",
    },
    {
      title: "Boston Pizza International Scholarship",
      year: "2025",
      description:
        "Merit-based scholarship recognizing academic achievement and community involvement",
    },
    {
      title: "Saint Mary's University Entrance Award",
      year: "2025",
      description:
        "Entrance scholarship awarded for academic excellence",
    },
    {
      title: "The Erich Burckhardt Foundation Award",
      year: "2025",
      description:
        "Award recognizing outstanding student achievement",
    },
    {
      title: "Cole Harbour Foundation Scholarship",
      year: "2025",
      description:
        "Community scholarship supporting post-secondary education",
    },
    {
      title: "Huestis Insurance Bursary",
      year: "2025",
      description:
        "Bursary supporting students pursuing higher education",
    },
    {
      title: "Nova Scotia Teacher's Union Bursary",
      year: "2025",
      description: "Financial support award from the NSTU",
    },
    {
      title: "Duke of Edinburgh Award - Bronze",
      year: "2021",
      description:
        "Achieved Bronze level certification through community service, skill development, physical recreation, and adventurous journey",
    },
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
              <button
                className="download-button px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-lg transition-colors font-mono flex items-center gap-2"
                onClick={handleDownloadPDF}
              >
                <Download size={20} />
                Download PDF
              </button>
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
                    {edu.score && (
                      <div className="text-slate-400 font-mono text-sm">
                        Score: {edu.score}
                      </div>
                    )}
                  </div>
                </div>
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
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-cyan-400" size={24} />
              <h2 className="text-2xl text-slate-100">
                Experience
              </h2>
            </div>
            {experience.map((exp) => (
              <div
                key={exp.title}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-4"
              >
                <div className="flex justify-between items-start mb-2">
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
              </div>
            ))}
          </section>

          {/* Volunteer */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-cyan-400" size={24} />
              <h2 className="text-2xl text-slate-100">
                Volunteer Experience
              </h2>
            </div>
            {volunteer.map((vol, index) => (
              <div
                key={`${vol.title}-${vol.organization}-${index}`}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl text-slate-100 mb-1">
                      {vol.title}
                    </h3>
                    <div className="text-cyan-400 mb-1">
                      {vol.organization}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {vol.location}
                    </div>
                  </div>
                  <div className="text-slate-400 font-mono text-sm">
                    {vol.period}
                  </div>
                </div>
                <p className="mt-4 text-slate-400">
                  {vol.description}
                </p>
              </div>
            ))}
          </section>

          {/* Awards & Honors */}
          <section className="mb-12">
            <h2 className="text-2xl text-slate-100 mb-6">
              Awards & Honors
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-slate-100">
                      {award.title}
                    </h3>
                    <span className="text-cyan-400 font-mono text-sm ml-2 whitespace-nowrap">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}