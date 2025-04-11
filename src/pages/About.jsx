import { Button } from "/src/components/Button";

export default function About() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-2">
        I am a passionate Full Stack Developer with experience in creating web applications using modern technologies like React, Node.js, Express.js, MongoDB, PHP, MySQL, and AI integrations.
      </p>

      {/* Download Button */}
      <a href="../resume.pdf" download>
        <Button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white">
          Download Resume
        </Button>
      </a>

      {/* Optional: View Button - opens in new tab */}
      {/* 
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button className="mt-4 ml-4 bg-green-500 hover:bg-green-700 text-white">
          View Resume
        </Button>
      </a> 
      */}
    </section>
  );
}
