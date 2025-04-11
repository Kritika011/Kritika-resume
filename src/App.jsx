import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "/src/components/Button";
import MYProjects from './pages/MYProjects';
import MYHeaders from './pages/Headers';
import Certificates from './pages/Certificates';
import "./index.css"; 
import About from './pages/About';
import { Sun, Moon, Facebook, Twitter, Instagram, Linkedin, Github, Mail, UserX } from "lucide-react";
// Project Image 

import  profilePic  from "./image/dp.jpg";


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
    <div className={darkMode ? "w-full bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="container mx-auto p-6">
        {/* Theme Toggle Button */}
        <div className="flex justify-end">
          <Button onClick={toggleTheme} variant="outline" className={darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-black hover:bg-gray-300"}>
            {darkMode ? <Sun className="text-black" /> : <Moon className="text-black" />}
          </Button>
        </div>

        {/* Header */}
<MYHeaders />
<About />
<MYProjects />
<h2 className="text-2xl font-semibold mb-6">Certificates</h2>
<Certificates/>
  






{/* School life */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p>Bachelor of Computer Applications - Techno India Hooghly</p>
          <pre>o      Year :- 2022-2025</pre>
          <pre>o      Aggregate marks :- 8.48</pre>
          <pre>o      Percentage :- 77.3%</pre>
          <pre>o      SGPA :- 9.30, 8.30, 8.23, 8.38, 8.17           </pre>
          {/* <img src="" alt="Education Result" className="w-full rounded-lg mt-4" /> */}
          <br></br>
          <p>HIGHER SECONDARY EDUCATION - Debiswari Vidyaniketan</p>
          <pre>o      Year :- 2021-2022</pre>
          <pre>o      Aggregate Percentage :- 78%</pre>
          <pre>o      Percentage :- 82%</pre>
          <pre>o      Stream:- Science</pre>
          <pre>o      Math :- 87   </pre>
          <pre>       Physics :-60    </pre>  
          <pre>       Chemistry :-72     </pre>
          <pre>       English :- 91 </pre>
          <pre>       Bengali :- 84  </pre>

          <pre>       Computer Application :-76  </pre>
          <p>SECONDARY EDUCATION - Debiswari Vidyaniketan</p>
          <pre>o      Year :- 2019-2020</pre>
          <pre>o      Percentage :- 85.42%</pre>
          <pre>o      Math :-  95</pre>
          <pre>       English :-  81</pre>
        </section>

        {/* Contact Section */}
        <h2 className="text-2xl font-semibold mt-8">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <p>Email: pramanikkritika46@gmail.com</p>
            <p>Phone: +91 8583033636</p>
            <p>Address: Hooghly, West Bengal, india</p>
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
          <a href="https://www.facebook.com/kritika.pramanik.5"><Facebook /></a>
          <a href="https://www.instagram.com/kritika_rupai/?hl=en"><Instagram /></a>
          <a href="https://www.linkedin.com/in/kritika-pramanik-bb4254279/"><Linkedin /></a>
          <a href="https://github.com/Kritika011"><Github /></a>
          <a href="mailto:pramanikkritika46@gmail.com"><Mail /></a>
        </div>
        <p className="mt-4">&copy; 2025 Kritika Parmanik. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

