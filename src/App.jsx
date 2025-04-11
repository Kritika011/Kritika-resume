import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "/src/components/Button";
// import { Card, CardContent } from "/src/components/card";
import "./index.css"; 
import { Sun, Moon, Facebook, Twitter, Instagram, Linkedin, Github, Mail, UserX } from "lucide-react";
// Project Image 

import  profilePic  from "./image/dp.jpg";
import ambulance from "./image/ambulance.png";
import stick from "./image/stick.png";
import stopwatch from "./image/stopwatch.png";
import sparkquest from "./image/sparkquest.png";
import quiz from "./image/quiz.png";

// Certificate image

import uxdesign from "./image/uxdesign.png";
import digitalmarketing from "./image/googledigital.png";
// import education from "./image/education.jpg";
import kgcss from "./image/kgcss.png";
import kgreact from "./image/kgreact.png";
import tihhtml from "./image/tihhtml.png";
import infosyspresent from "./image/infosyspresent.png";  
import infosyspython from "./image/infosyspython.png";


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
        style={{ width: "65vw", height: "35vw", objectFit: "cover", borderRadius: "1rem" }}
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

  {/* Project 2 - Emergency ambulance services */}
  <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
    {/* Animated Image */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0"
    >
      <img
        src={ambulance}
        alt="Banking Project"
        style={{ width: "65vw", height: "35vw", objectFit: "cover", borderRadius: "1rem" }}
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


{/* Project 3 - Stick */}
<div className="flex flex-col md:flex-row items-center gap-6 mt-8">
    {/* Animated Image */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0"
    >
      <img
        src={stick}
        alt="Balling and Stick"
        style={{ width: "65vw", height: "35vw", objectFit: "cover", borderRadius: "1rem" }}
      />
    </motion.div>

    {/* Project Description */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold">Ball and stick</h3>
      <p className="mt-2 text-base">
        Integrated digital banking platform for secure transactions, UPI support, and account management, built with a modern secure stack and scalable backend systems.
      </p>
    </div>
  </div>


  {/* Project 4 - SparkQuest */}
    <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
    {/* Animated Image */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0"
    >
      <img
        src={sparkquest}
        alt="Banking Project"
        style={{ width: "65vw", height: "35vw", objectFit: "cover", borderRadius: "1rem" }}
      />
    </motion.div>

    {/* Project Description */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold">SparkQuest SQ3</h3>
      <p className="mt-2 text-base">
        Integrated digital banking platform for secure transactions, UPI support, and account management, built with a modern secure stack and scalable backend systems.
      </p>
    </div>
  </div>

  {/* Project 5 - StopWatch */}
  <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
    {/* Animated Image */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0"
    >
      <img
        src={stopwatch}
        alt="StopWatch Project"
        style={{ width: "65vw", height: "35vw", objectFit: "cover", borderRadius: "1rem" }}
      />
    </motion.div>

    {/* Project Description */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold">StopWatch</h3>
      <p className="mt-2 text-base">
        Integrated digital banking platform for secure transactions, UPI support, and account management, built with a modern secure stack and scalable backend systems.
      </p>
    </div>
  </div>
</section>






      {/* </div>np */}


        {/* Certificates */}
        <section className="mt-8">
  <h2 className="text-2xl font-semibold mb-6">Certificates</h2>

  <div className="flex flex-col md:flex-row justify-between items-start gap-8">
    {/* Certificate 1 */}
    <div className="flex-1 flex flex-col items-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={uxdesign}
          alt="UX Design"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
        />
      </motion.div>
      <h3 className="text-xl font-semibold mt-4 text-center">Google UX Design</h3>
    </div>

    {/* Certificate 2 */}
    <div className="flex-1 flex flex-col items-center">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={digitalmarketing}
          alt="Digital Marketing"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
        />
      </motion.div>
      <h3 className="text-xl font-semibold mt-4 text-center">
        Google Certified Digital Marketing
      </h3>
    </div>
  </div>
</section>

<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-6 text-center">Certificates</h2>

  <div className="flex flex-row flex-wrap justify-center gap-6 ">
    {/* Certificate 1 */}
    <div className="flex flex-col items-center w-[300px]">
      <img
        src={uxdesign}
        alt="UX Design"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-md font-semibold mt-2 text-center">Google UX Design</h3>
    </div>

    {/* Certificate 2 */}
    <div className="flex flex-col items-center w-[300px] ml-6">
      <img
        src={digitalmarketing}
        alt="Digital Marketing"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-md font-semibold mt-2 text-center">Google Certified Digital Marketing</h3>
    </div>
  </div>

  <div className="flex flex-row flex-wrap justify-center gap-6">
    {/* Certificate 1 */}
    <div className="flex flex-col items-center w-[300px]">
      <img
        src={uxdesign}
        alt="UX Design"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-md font-semibold mt-2 text-center">Google UX Design</h3>
    </div>

    {/* Certificate 2 */}
    <div className="flex flex-col items-center w-[300px]">
      <img
        src={digitalmarketing}
        alt="Digital Marketing"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-md font-semibold mt-2 text-center">Google Certified Digital Marketing</h3>
    </div>
  </div>
</section>
<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-6 text-center">Certificates</h2>

  <div className="flex flex-row flex-wrap justify-center gap-6">
    {/* Certificate 1 */}
    <div className="flex flex-col items-center w-[300px]">
      <img
        src={uxdesign}
        alt="UX Design"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-md font-semibold mt-2 text-center">Google UX Design</h3>
    </div>

    {/* Certificate 2 */}
    <div className="flex flex-col items-center w-[300px]">
      <img
        src={digitalmarketing}
        alt="Digital Marketing"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-md font-semibold mt-2 text-center">Google Certified Digital Marketing</h3>
    </div>
  </div>
</section>






{/* School life */}
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

