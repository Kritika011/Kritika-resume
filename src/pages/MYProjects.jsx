import { motion } from "framer-motion";

/* =======================
   IMAGES
======================= */
import ambulance from "../image/ambulance.png";
import stick from "../image/stick.png";
import stopwatch from "../image/stopwatch.png";
import sparkquest from "../assets/sparkquest.png";
import quiz from "../image/quiz.png";

// Company mobile screenshots
import companySS1 from "../image/quiz.png";
import companySS2 from "../image/quiz.png";
import companySS3 from "../image/quiz.png";

/* =======================
   PERSONAL PROJECTS
======================= */
const projects = [
  {
    title: "QuizSphere",
    description:
      "A dynamic quiz platform with real-time scoring and AI-based insights.",
    image: quiz,
  },
  {
    title: "ResQnow – Emergency Ambulance Service",
    description:
      "Fast and reliable emergency ambulance dispatching platform.",
    image: ambulance,
  },
  {
    title: "SparkQuest",
    description:
      "Gamified learning system motivating students with challenges.",
    image: sparkquest,
  },
  {
    title: "Smart Walking Stick",
    description:
      "IoT-based walking stick with GPS & health monitoring for elderly care.",
    image: stick,
  },
  {
    title: "Pomodoro Stopwatch",
    description:
      "Productivity-focused timer app to improve daily concentration.",
    image: stopwatch,
  },
];

/* =======================
   EXPERIENCE PROJECTS
======================= */
const experienceProjects = [
  {
    title: "Healthcare Appointment App",
    description:
      "Mobile app for booking doctor appointments with real-time availability, notifications, and patient history.",
    screenshots: [companySS1, companySS2, companySS3],
    link: "https://example.com",
  },
  {
    title: "School Management System",
    description:
      "Student & teacher management system with attendance, roles, and dashboards.",
    screenshots: [companySS2, companySS3, companySS1],
    link: "https://example.com",
  },
];

export default function MYProjects() {
  return (
    <div className="space-y-24">

      {/* ================= EXPERIENCE ================= */}
      <section>
        <h2 className="text-4xl font-bold mb-10">
          Experience
        </h2>

        {/* Company Info */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800
                        border border-gray-700 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold">
            Fine Web Technology
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            App Developer • June 2025 – Present
          </p>

          <p className="mt-4 text-gray-300 max-w-3xl leading-relaxed">
            Building scalable mobile and web applications with modern UI,
            performance optimization, and backend integrations.
          </p>

          <div className="mt-6">
            <p className="font-medium mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {[
                "React Native",
                "Expo",
                "JavaScript",
                "TypeScript",
                "Firebase",
                "Node.js",
                "MongoDB",
                "REST APIs",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Projects */}
        <div className="space-y-14">
          {experienceProjects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-10
                         bg-gray-900 border border-gray-800
                         rounded-2xl p-8"
            >
              {/* Left Content */}
              <div>
                <span className="text-xs text-blue-400 uppercase tracking-wide">
                  Company Project
                </span>

                <h3 className="text-2xl font-semibold mt-3">
                  {proj.title}
                </h3>

                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  {proj.description}
                </p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>

              {/* Mobile Screenshots */}
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                {proj.screenshots.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt="App Screen"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="h-72 rounded-xl
                               border border-gray-700
                               shadow-lg"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PERSONAL PROJECTS ================= */}
      <section>
        <h2 className="text-4xl font-bold mb-10">
          Personal Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-800
                         rounded-2xl p-6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain mb-5"
              />

              <span className="text-xs text-green-400 uppercase tracking-wide">
                Personal Project
              </span>

              <h3 className="text-lg font-semibold mt-2">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
