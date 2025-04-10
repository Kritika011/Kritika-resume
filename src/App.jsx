import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "/src/components/Button";
// import { Card, CardContent } from "/src/components/card";
import "./index.css"; // or "./globals.css" for Next.js

import { Sun, Moon, Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";
import  profilePic  from "./image/dp.jpg";
// import { fromJSON } from "postcss";
import quiz from "./image/quiz.png";
function Card({ children }) {
  return <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-800">{children}</div>;
}

// Card Content Component
function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const toggleTheme = () => setDarkMode(!darkMode);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", message: "" });

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Message Sent:", contact);
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="container mx-auto p-6">
        {/* Theme Toggle Button */}
        <div className="flex justify-end">
          <Button onClick={toggleTheme} variant="outline" className={darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-black hover:bg-gray-300"}>
            {darkMode ? <Sun className="text-black" /> : <Moon className="text-black" />}
          </Button>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
              Kritika Parmanick
            </motion.h1>
            <p className="text-2xl mt-2">Full Stack Developer | AI Enthusiast</p>
          </motion.div>
          <motion.img src={profilePic}  alt="Profile"  style={{ width: "300px", height: "300px", borderRadius: "50%", objectFit: "cover" }}  />
        </div>
{/* initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}  */}
        {/* About Me */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2">I am a passionate Full Stack Developer with experience in creating web applications using modern technologies like React, PHP, MySQL, and AI integrations.</p>
          <a href="/resume.pdf" download>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white">Download Resume</Button>
          </a>
        </section>

        {/* Experience & Projects */}
        <section className="mt-8">
  <h2 className="text-2xl font-semibold">Experience & Projects</h2>
  {/* Ensuring side-by-side layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
    <Card darkMode={darkMode}>
      <CardContent>
        <img src={quiz} alt="Project 1" style={{ width: "500px", height: "300px", objectFit: "fit" }}  />
        <h3 className="text-xl pink font-semibold mt-2">QuizSphere</h3>
        <p>A dynamic quiz platform with real-time scoring and AI-based insights.</p>
      </CardContent>
    </Card>

    <Card darkMode={darkMode}>
      <CardContent>
        <img src="./image/dp.jpg" alt="Project 2" className="w-full rounded-lg" />
        <h3 className="text-xl font-semibold mt-2">Online Banking System</h3>
        <p>Integrated digital banking solutions with secure transactions and UPI support.</p>
      </CardContent>
    </Card>
  </div>
</section>




<section className="mt-8">
  <h2 className="text-2xl font-semibold">Experience & Projects</h2>

  {/* Project 1 - QuizSphere */}
  <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
    {/* Animated Image */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0"
    >
      <img
        src={quiz}
        alt="QuizSphere Project"
        style={{ width: "500px", height: "300px", objectFit: "cover", borderRadius: "1rem" }}
      />
    </motion.div>

    {/* Project Description */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold">QuizSphere</h3>
      <p className="mt-2 text-base">
        A dynamic quiz platform with real-time scoring and AI-based insights. Built using React, PHP, MySQL, and Python integrations to offer personalized learning experiences.
      </p>
    </div>
  </div>

  {/* Project 2 - Online Banking System */}
  <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
    {/* Animated Image */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0"
    >
      <img
        src="./image/dp.jpg"
        alt="Banking Project"
        style={{ width: "500px", height: "300px", objectFit: "cover", borderRadius: "1rem" }}
      />
    </motion.div>

    {/* Project Description */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold">Online Banking System</h3>
      <p className="mt-2 text-base">
        Integrated digital banking platform for secure transactions, UPI support, and account management, built with a modern secure stack and scalable backend systems.
      </p>
    </div>
  </div>
</section>





<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4">Experience & Projects</h2>

  {/* Project 1 - QuizSphere */}
  <div className="flex flex-col md:flex-row md:items-start gap-6">
    {/* Project Image */}
    <motion.img
      src={quiz}
      alt="QuizSphere Project"
      className="w-full md:w-[500px] h-auto rounded-xl object-cover"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    />

    {/* Project Details */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold mt-2 md:mt-0">QuizSphere</h3>
      <p className="mt-2 text-base">
        A dynamic quiz platform with real-time scoring, personalized insights, and AI-powered analytics. Designed for seamless interaction between students, teachers, and admins.
      </p>
    </div>
  </div>
</section>

      {/* </div>np */}


        {/* Certificates */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Certificates</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardContent>
                <img src="/certificate1.jpg" alt="Certificate 1" className="w-full rounded-lg" />
                <h3 className="text-xl font-semibold mt-2">AI & ML Certification</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img src="/certificate2.jpg" alt="Certificate 2" className="w-full rounded-lg" />
                <h3 className="text-xl font-semibold mt-2">Full Stack Development</h3>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p>Bachelor of Computer Applications - Techno India Hooghly</p>
          <img src="/education.jpg" alt="Education Result" className="w-full rounded-lg mt-4" />
        </section>

        {/* Contact Section */}
        <h2 className="text-2xl font-semibold mt-8">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <p>Email: kritika@example.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Hooghly, West Bengal</p>
          </div>
          <div>
            <input name="name" placeholder="Your Name" className="w-full p-2 border rounded-lg mb-2" onChange={handleInputChange} />
            <input name="email" placeholder="Your Email" className="w-full p-2 border rounded-lg mb-2" onChange={handleInputChange} />
            <input name="phone" placeholder="Your Phone Number" className="w-full p-2 border rounded-lg mb-2" onChange={handleInputChange} />
            <textarea name="message" className="w-full p-2 border rounded-lg" placeholder="Write your message..." onChange={handleInputChange} />
            <Button className="mt-2 bg-green-500 hover:bg-green-700 text-white" onClick={handleSubmit}>Send</Button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-8">
        <div className="flex justify-center space-x-10 ">
          <a href=""><Facebook /></a>
          <Twitter />
          <Instagram />
          <Linkedin />
          <Github />
          <Mail />
        </div>
        <p className="mt-4">&copy; 2025 Kritika Parmanick. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

