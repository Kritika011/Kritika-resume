import { motion } from "framer-motion";

import ambulance from "../image/ambulance.png";
import stick from "../image/stick.png";
import stopwatch from "../image/stopwatch.png";
import sparkquest from "../image/sparkquest.png";
import quiz from "../image/quiz.png";

// import { div } from "framer-motion/client";




const projects = [
  {
    title: "QuizSphere",
    description: "A dynamic quiz platform with real-time scoring and AI-based insights.",
    image: quiz,
  },
  {
    title: "ResQnow :- Emergency Ambulance Services",
    description: "A digital platform for fast and reliable emergency ambulance dispatching.",
    image: ambulance,
  },
  {
    title: "SparkQuest",
    description: "A gamified learning system built to motivate students through quiz-based challenges.",
    image: sparkquest,
  },
  {
    title: "Balling and Stick Game",
    description: "An IoT-based smart walking stick for elderly care with GPS and health monitoring.",
    image: stick,
  },
  {
    title: "Stopwatch App",
    description: "A productivity timer app using the Pomodoro technique to boost daily focus.",
    image: stopwatch,
  },
  
  
];


export default function MYProjects() {
  return (
 <div>
      <h2 className="text-2xl font-semibold">Experience & Projects</h2>
      {projects.map((projects, index) => (
  <div key={index} className="flex flex-col md:flex-row items-start justify-start gap-6 mt-6">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0"
    >
      <img src={projects.image} alt={projects.title} className="w-full md:w-[300px] h-auto object-cover rounded-lg" />
    </motion.div>
    <div className="flex-1 text-left">
      <h3 className="text-xl font-semibold">{projects.title}</h3>
      <p className="mt-2 text-base">{projects.description}</p>
    </div>
  </div>
))}


  </div>
  );
}