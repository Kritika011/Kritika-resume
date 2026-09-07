import { Button } from "/src/components/Button";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kritika-resume/KRITIKA.pdf"; // Adjusted path for GitHub Pages
    link.setAttribute("download", "Kritika_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-2">
        I am a passionate Full Stack Developer with experience in creating web applications using modern technologies like React, Node.js, Express.js, MongoDB, PHP, MySQL, and AI integrations.
      </p>
      <Button
        onClick={handleDownload}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white"
      >
        Download Resume
      </Button>
    </section>
  );
}
