import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Play,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const BASE = "/Kritika-resume";
const ASSET = `${import.meta.env.BASE_URL}assets/`;

const navItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

const experience = {
  company: "Fine Web Technology",
  role: "App Developer",
  period: "June 2025 — Present",
  description:
    "Building and maintaining application experiences across mobile and desktop environments, working with APIs, Firebase, WebView integrations, UI implementation and product-focused development.",
  stack: [
    "React Native",
    "Android Studio",
    "Expo Go",
    "API",
    "Figma",
    "Electron.js",
    "Firebase",
    "WebView",
    "Prompt Writing",
  ],
  apps: [
    {
      name: "AffiTube",
      type: "Short-video / income platform",
      description: "Watch reels with a multilevel income model.",
      link: "https://play.google.com/store/apps/details?id=com.affitube.abc9876767",
    },
    {
      name: "Winox App",
      type: "Gaming trading app",
      description: "Application development experience for a gaming/trading product.",
    },
    {
      name: "Earnigo App",
      type: "Shopping & bill payment",
      description: "Shopping and bill-payment application.",
      link: "https://play.google.com/store/apps/details?id=com.earnigo.fine084752368",
    },
  ],
};

const education = [
  {
    degree: "MCA — Computer Application",
    institution: "Techno College Hooghly",
    board: "M.A.K.A.U.T., West Bengal",
    period: "2025 — Present · Expected July 2027",
    score: "8.44 CGPA",
    current: true,
  },
  {
    degree: "BCA — Computer Application",
    institution: "Techno India Hooghly Campus",
    board: "M.A.K.A.U.T, West Bengal",
    period: "2022 — 2025 · Graduated",
    score: "8.50 CGPA / 85.0%",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Debiswari Vidya Niketan",
    board: "WBCHSE",
    period: "2021 — 2022",
    score: "82% · Aggregate 78.33%",
  },
  {
    degree: "Secondary Education",
    institution: "Debiswari Vidya Niketan",
    board: "WBBSE",
    period: "2019 — 2020",
    score: "85.42%",
  },
];

const projects = [
  {
    title: "AI Bug Explainer",
    category: "AI Project",
    period: "Python • FastAPI",
    description:
      "An AI-powered debugging assistant that analyzes programming errors and explains the problem, root cause, solution, corrected code, prevention tips, and complexity.",
    details:
      "AI Bug Explainer is a debugging assistant designed to make programming errors easier to understand. Users can provide an error or problematic code, and the system analyzes it using the Google Gemini API. It explains what went wrong, identifies the root cause, suggests a solution, provides corrected code, shares prevention tips, and discusses complexity where applicable.",
    tags: [
      "Python",
      "FastAPI",
      "Pydantic",
      "Google Gemini API",
    ],
    image: `${ASSET}bug.png`,
    accent: "AI debugging assistant",
    github: "https://github.com/Kritika011/ai-bug-explainer",
  },

  {
    title: "ResQnow",
    category: "Major Project",
    period: "Jan 2025 — Jun 2025",
    description:
      "Emergency ambulance service platform with OTP verification, live location tracking and a full-stack architecture.",
    details:
      "Led a team while designing and developing the core full-stack experience. The project combines a React interface, Node/Express backend and MongoDB data layer with location-aware emergency workflows.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Figma",
    ],
    image: `${ASSET}ambulance.png`,
    accent: "Emergency response",
    github: "https://emergency-ambulance-service.vercel.app/",
  },

  {
    title: "Quiz Sphere",
    category: "Minor Project",
    period: "Jul 2024 — Dec 2024",
    description:
      "Full-stack quiz platform developed as a team-lead project with PHP and MySQL.",
    details:
      "Designed and developed the quiz experience with a responsive frontend, PHP backend and MySQL database, supported by Figma-based interface planning.",
    tags: [
      "HTML",
      "CSS",
      "PHP",
      "MySQL",
      "Figma",
      "VS Code",
    ],
    image: `${ASSET}quiz.png`,
    accent: "Learning platform",
    github: "https://github.com/Kritika011/Quizsphere-Minor_Project",
  },
{
  title: "Microfinance App",
  category: "Mobile App",
  period: "React Native • Expo",
  description:
    "A mobile microfinance application designed to provide a structured digital experience for managing microfinance-related activities.",
  details:
    "A React Native mobile application built with Expo, featuring a modular application structure with reusable components, assets, constants, and screen-based navigation. The project demonstrates mobile application development, UI implementation, component-based architecture, and practical use of the React Native ecosystem.",
  tags: [
    "React Native",
    "Expo",
    "JavaScript",
    "Mobile Development",
    "UI/UX"
  ],
  image: `${ASSET}micro.png`,
  github: "https://github.com/Kritika011/microfinance-app"
},
  {
    title: "Spark Quest 3.0",
    category: "Techfest Website",
    period: "Web Project",
    description:
      "Responsive techfest website implemented from a provided UI design.",
    details:
      "Focused on responsive layout implementation and translating the visual design into a usable web experience across screen sizes.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
    ],
    image: `${ASSET}sparkquest.png`,
    accent: "Event experience",
    github: "https://github.com/Kritika011/sparkquest",
  },

  {
    title: "Ball Collection Game",
    category: "Game Project",
    period: "Python",
    description:
      "Interactive ball-collection game developed with Python and Pygame.",
    details:
      "Built as a hands-on programming project to practice game loops, input handling, collision logic and interactive UI.",
    tags: [
      "Python",
      "Pygame",
    ],
    image: `${ASSET}stick.png`,
    accent: "Interactive game",
    github: "https://github.com/Kritika011/Ball-Collection-game",
  },

  {
    title: "Portfolio Website",
    category: "Personal Project",
    period: "React",
    description:
      "Responsive personal portfolio designed to present projects, experience, skills and education.",
    details:
      "This portfolio is being rebuilt as a production-style React application with responsive navigation, theme switching, project details and accessible interaction patterns.",
    tags: [
      "React",
      "Vite",
      "CSS",
      "Git",
      "GitHub Pages",
    ],
    image: `${ASSET}image.png`,
    accent: "Personal brand",
    github: "https://github.com/Kritika011/Kritika-resume",
  },

  {
    title: "E-commerce Website Design",
    category: "UX Project",
    period: "Figma",
    description:
      "E-commerce interface concept created in Figma with a focus on clean user flows.",
    details:
      "A UI design exercise covering layout hierarchy, product presentation and user-oriented shopping flows.",
    tags: [
      "Figma",
      "UX Design",
      "UX",
    ],
    image: `${ASSET}ecom.png`,
    accent: "Product design",
    github: null,
  },
];

const hackathons = [
  {
    name: "ad-campaign-openenv",
    status: "Participant",
    description:
      "Hackathon project exploring an ad-campaign environment. Participated in the OpenEnv AI Hackathon; not selected as a finalist.",
    github: "https://github.com/Kritika011/ad-optimization-env",
    official: "https://pytorch.org/event/openenv-ai-hackathon/",
  },
  {
    name: "FairCheckAI",
    status: "Hackathon Project",
    description:
      "An AI-focused project exploring fairness and responsible evaluation of AI-generated or data-driven decisions.",
    github: "https://github.com/Kritika011/faircheckai",
  },
];

const skills = {
  Programming: ["Python", "C", "PHP", "Node.js", "Express.js"],
  Frontend: ["HTML5", "CSS", "JavaScript", "React", "React Native"],
  "Data & Backend": ["MySQL", "MongoDB", "Firebase"],
  "UI / UX": ["Figma", "Canva"],
  "AI / Productivity": ["Prompt Engineering", "Claude", "Trae"],
  Tools: ["Git", "GitHub", "Android Studio", "Expo Go", "VS Code", "Electron.js"],
};

const certificates = [
  { name: "Google UX Design", issuer: "Coursera + Tata STRIVE / Grow With Google", image: `${ASSET}uxdesign.png` },
  { name: "Google Digital Marketing", issuer: "Google", image: `${ASSET}googledigital.png` },
  { name: "Python Certification", issuer: "Google / Learning Certification", image: `${ASSET}googlepython.png` },
  { name: "SQL Certification", issuer: "HackerRank", image: `${ASSET}hackerranksql.png` },
  { name: "Python Certification", issuer: "HackerRank", image: `${ASSET}hackerrankpython.png` },
  { name: "CSS Certification", issuer: "HackerRank", image: `${ASSET}hackerrankcss.png` },
  { name: "Python Certification", issuer: "Infosys", image: `${ASSET}infosyspython.png` },
  { name: "Presentation Certification", issuer: "Infosys", image: `${ASSET}infosyspresent.png` },
  { name: "React Certification", issuer: "KG", image: `${ASSET}kgreact.png` },
  { name: "NISM Certification", issuer: "NISM", image: `${ASSET}nism.png` },

];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ImageFrame({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`image-frame ${className}`}>
      {!failed ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="image-placeholder">
          <Layers3 size={28} />
          <span>Add image</span>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("kritika-theme") !== "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("kritika-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = selectedProject || selectedCertificate ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, selectedCertificate]);

  const projectCount = useMemo(() => projects.length, []);

  return (
    <div className="site-shell">
      <header className="navbar">
        <button className="brand" onClick={() => scrollToId("home")} aria-label="Go to home">
          KP<span>.</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }}>
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href={`${BASE}/resume.pdf`} target="_blank" rel="noreferrer">
            CV <Download size={15} />
          </a>
          <button className="menu-button icon-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="availability"><span /> Open to opportunities</div>
             <p className="hero-greeting">Hello, I'm</p>

<h1 className="hero-name">
  Kritika Pramanik
</h1>

<h2 className="hero-title">
  App Developer • AI & ML Learner • Full-Stack Developer
</h2>
              {/* <h1>
                Building useful products
                <span> with code, data & AI.</span>
              </h1> */}
              <p className="hero-text">
                App Developer with hands-on experience building mobile, web and full-stack applications. Currently exploring AI, machine learning and data-driven solutions while pursuing my MCA.
              </p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => scrollToId("projects")}>
                  Explore my work <ArrowUpRight size={17} />
                </button>
                <a className="button secondary" href={`${BASE}/resume.pdf`} target="_blank" rel="noreferrer">
                  View CV <Download size={17} />
                </a>
              </div>
              <div className="social-row">
                <a href="https://github.com/Kritika011" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href="https://www.linkedin.com/in/kritika-pramanik-bb4254279/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="mailto:pramikkritika46@gmail.com" aria-label="Email"><Mail /></a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />
            <ImageFrame src={`${ASSET}/Frame1.png`} alt="Kritika Pramanik" className="profile-image" />
            <div className="floating-card card-top">
              <Sparkles size={17} />
              <div><strong>AI + Apps</strong><span>Learning by building</span></div>
            </div>
            <div className="floating-card card-bottom">
              <Code2 size={17} />
              <div><strong>{projectCount}+ projects</strong><span>Web • Mobile • AI</span></div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section-pad section">
          <SectionHeading
            eyebrow="01 — About"
            title="A developer who likes to understand the whole product."
            description="My approach is to learn by building, and to build with a focus on the user experience."
          />
          <div className="about-grid">
            <div className="about-card large">
              <div className="about-icon"><Sparkles size={22} /></div>
              <h3>What I bring</h3>
              <p>
                I’m organised, efficient and hardworking, with a strong willingness to learn and accept new ideas.
                I enjoy turning designs and requirements into working products while continuously improving my technical depth.
              </p>
              <div className="mini-list">
                <span><CheckCircle2 size={16} /> Good listener & learner</span>
                <span><CheckCircle2 size={16} /> Clear communication</span>
                <span><CheckCircle2 size={16} /> Team leadership experience</span>
              </div>
            </div>
            <div className="stat-grid">
              <div className="stat-card"><strong>8.44</strong><span>MCA CGPA</span></div>
              <div className="stat-card"><strong>8.50</strong><span>BCA CGPA</span></div>
              <div className="stat-card"><strong>2025</strong><span>BCA graduation</span></div>
              <div className="stat-card"><strong>2025+</strong><span>App development</span></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad section tinted">
          <SectionHeading eyebrow="02 — Experience" title="Professional experience" description="Real product development experience, not just coursework." />
          <div className="experience-card">
            <div className="experience-main">
              <div className="timeline-dot"><BriefcaseBusiness size={19} /></div>
              <div>
                <div className="role-line">
                  <div><span className="eyebrow">June 2025 — Present</span><h3>{experience.role}</h3><p className="company">{experience.company}</p></div>
                  <span className="current-badge">Current</span>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="tag-list">{experience.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="app-list">
              {experience.apps.map((app) => (
                <div className="app-row" key={app.name}>
                  <div className="app-mark"><Play size={15} fill="currentColor" /></div>
                  <div><strong>{app.name}</strong><span>{app.type}</span><p>{app.description}</p></div>
                  {app.link && <a href={app.link} target="_blank" rel="noreferrer" aria-label={`Open ${app.name}`}><ExternalLink size={17} /></a>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-pad section">
          <SectionHeading eyebrow="03 — Education" title="Academic journey" description="A foundation in computer applications, followed by deeper postgraduate study." />
          <div className="education-list">
            {education.map((item, index) => (
              <motion.article className="education-card" key={item.degree} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <div className="education-icon"><GraduationCap size={20} /></div>
                <div className="education-content">
                  <div className="education-top"><span>{item.period}</span>{item.current && <b>In progress</b>}</div>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <small>{item.board}</small>
                </div>
                <strong className="score">{item.score}</strong>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad section tinted">
  <SectionHeading
    eyebrow="04 — Selected Work"
    title="Projects that show how I build."
    description="Open a project to see the problem, approach and technology choices."
  />

  <div className="project-grid">
    {projects.map((project, index) => (
      <motion.button
        className="project-card"
        key={project.title}
        onClick={() => setSelectedProject(project)}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (index % 3) * 0.07 }}
      >
        <ImageFrame
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-body">
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.period}</span>
          </div>

          <h3>
            {project.title}
            <ArrowUpRight size={18} />
          </h3>

          <p>{project.description}</p>

          <div className="tag-list">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </motion.button>
    ))}
  </div>
</section>

        <section id="skills" className="section-pad section">
          <SectionHeading eyebrow="05 — Skills" title="Tools I use to turn ideas into products." description="A practical stack across programming, frontend, backend, design and AI-assisted workflows." />
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-card" key={group}>
                <div className="skill-title"><Code2 size={18} /><h3>{group}</h3></div>
                <div className="skill-items">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad section tinted">
          <SectionHeading eyebrow="06 — Hackathons" title="I build beyond the classroom." description="Participation and experimental projects that push me toward AI and modern engineering." />
          <div className="hackathon-grid">
            {hackathons.map((hack) => (
              <article className="hack-card" key={hack.name}>
                <div className="hack-top"><Sparkles size={18} /><span>{hack.status}</span></div>
                <h3>{hack.name}</h3>
                <p>{hack.description}</p>
                <div className="hack-links">
                  <a href={hack.github} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>
                  {hack.official && <a href={hack.official} target="_blank" rel="noreferrer">Official event <ExternalLink size={15} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad section">
          <SectionHeading eyebrow="07 — Certifications" title="Continuous learning" description="Selected certifications and learning milestones." />
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <button className="certificate-card" key={certificate.name + certificate.issuer} onClick={() => setSelectedCertificate(certificate)}>
                <ImageFrame src={certificate.image} alt={certificate.name} className="certificate-image" />
                <div><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="contact-card">
            <div>
              <span className="eyebrow">08 — Contact</span>
              <h2>Let’s build something useful.</h2>
              <p>For internships, entry-level opportunities, app development work or collaboration, feel free to reach out.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:pramikkritika46@gmail.com">Email me <Mail size={17} /></a>
              <a className="button secondary" href="https://www.linkedin.com/in/kritika-pramanik-bb4254279/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={17} /></a>
            </div>
            <div className="contact-details">
              <span><Mail size={16} /> pramikkritika46@gmail.com</span>
              <span>Rishra, Hooghly, West Bengal</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Kritika Pramanik</span>
        <span>Designed & built with React</span>
        <a href="#home">Back to top ↑</a>
      </footer>

      <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={() => setSelectedProject(null)}
    >
      <motion.div
        className="modal project-modal"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={() => setSelectedProject(null)}
          aria-label="Close"
        >
          <X />
        </button>

        <ImageFrame
          src={selectedProject.image}
          alt={selectedProject.title}
          className="modal-image"
        />

        <div className="modal-content">
          <span className="eyebrow">
            {selectedProject.category} · {selectedProject.period}
          </span>

          <h2>{selectedProject.title}</h2>

          <p>{selectedProject.details}</p>

          <div className="tag-list">
            {selectedProject.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-project-btn"
            >
              <Github size={18} />
              View on GitHub
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}

        {selectedCertificate && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setSelectedCertificate(null)}>
            <motion.div className="modal certificate-modal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onMouseDown={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCertificate(null)} aria-label="Close"><X /></button>
              <ImageFrame src={selectedCertificate.image} alt={selectedCertificate.name} className="certificate-preview" />
              <div className="modal-content">
                <span className="eyebrow">{selectedCertificate.issuer}</span>
                <h2>{selectedCertificate.name}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;