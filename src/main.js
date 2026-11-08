import './style.css';
import heroPortrait from './assets/hero-portrait.jpg';
import aboutVisualSvg from './assets/about-visual.svg';
import loomisScreenshot from './assets/loomis-screenshot.png';

/* Data Store */
const PORTFOLIO_DATA = {
  personal: {
    name: "Daksh Chaudhary",
    role: "Full-Stack Developer",
    university: "Manipal University Jaipur",
    intro: "I am a B.Tech Computer Science & Engineering undergraduate at Manipal University Jaipur. I build practical software applications and explore full-stack development, artificial intelligence, and algorithms.",
    email: "chaudharydaksh1710@gmail.com",
    location: "Jaipur, India",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  interests: [
    "Full-Stack Development",
    "Artificial Intelligence",
    "Data Structures & Algorithms",
    "Building Practical Software Applications"
  ],
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Manipal University Jaipur",
    years: "2025–2029",
    details: "Focusing on core computer science foundations, Data Structures & Algorithms, Object-Oriented Software Design, Web Technologies, and AI concepts."
  },
  currentlyLearning: {
    statement: "Currently exploring Artificial Intelligence, Machine Learning, and Generative AI.",
    topics: ["Artificial Intelligence", "Machine Learning", "Generative AI"]
  },
  certifications: [
    {
      id: "meta-fullstack",
      title: "Meta Full Stack Developer",
      subtitle: "Front-End & Back-End from Scratch",
      issuer: "Meta",
      issuedVia: "Coursera",
      date: "Aug 2026",
      credentialUrl: "https://coursera.org/verify/specialization/KFN4IT50MG0J",
      logo: `<svg viewBox="0 0 60 24" width="60" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 6C4.5 6 2 8.5 2 12C2 15.5 4.5 18 4.5 18" stroke="#0082FB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.5 6C4.5 6 7 3.5 10 3.5C13 3.5 15.5 6 15.5 6L20 12L15.5 18C15.5 18 13 20.5 10 20.5C7 20.5 4.5 18 4.5 18" stroke="#0082FB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 12L28 12M28 6L28 18" stroke="#0082FB" stroke-width="2.5" stroke-linecap="round"/>
        <text x="32" y="17" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0082FB" letter-spacing="-0.3">Meta</text>
      </svg>`
    },
    {
      id: "oracle-sql",
      title: "Oracle SQL",
      subtitle: "Database Foundations & Querying",
      issuer: "Oracle",
      issuedVia: null,
      date: null,
      credentialUrl: "/SQL-DakshChaudhary-oracle.pdf",
      logo: `<svg viewBox="0 0 72 24" width="72" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C74634" letter-spacing="-0.2">Oracle</text>
      </svg>`
    },
    {
      id: "oracle-plsql",
      title: "PL/SQL",
      subtitle: "Procedural Language for SQL",
      issuer: "Oracle",
      issuedVia: null,
      date: null,
      credentialUrl: "/Plsql-DakshChaudhary.pdf",
      logo: `<svg viewBox="0 0 72 24" width="72" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#C74634" letter-spacing="-0.2">Oracle</text>
      </svg>`
    }
  ],
  projects: [
    {
      id: "loomis",
      title: "Loomis — Student Job Prep Platform",
      category: "Full Stack",
      featured: true,
      description: "A student-focused placement preparation platform designed to help candidates prepare for interviews with structured study plans, DSA progress tracking, and mock practice questions.",
      tags: ["React", "Django", "MySQL", "REST APIs"],
      image: loomisScreenshot,
      githubUrl: "https://github.com/Dakshchaudhary1710/loomis",
      liveUrl: "https://loomis-omega.vercel.app"
    }
  ],
  skillGroups: [
    {
      category: "Programming",
      items: [
        {
          name: "C++",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#00599C" d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 14.5c-2.5 0-4.5-1.8-4.5-4.5s2-4.5 4.5-4.5c1.4 0 2.6.6 3.4 1.6l-1.5 1.2c-.4-.6-1.1-1-1.9-1-1.5 0-2.6 1.2-2.6 2.7s1.1 2.7 2.6 2.7c.8 0 1.5-.4 1.9-1l1.5 1.2c-.8 1-2 1.6-3.4 1.6zm7-3.5h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm3 0h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1z"/></svg>`
        },
        {
          name: "Java",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#5382A1" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`
        },
        {
          name: "JavaScript",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><text x="12" y="17" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#000">JS</text></svg>`
        },
        {
          name: "Python",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#3776AB" d="M11.9 2c-4.8 0-4.5 2.1-4.5 2.1v2.2h4.6v.7H5.6S2 6.5 2 11.3c0 4.8 3.1 4.6 3.1 4.6h1.8v-2.6s-.1-3.1 3.1-3.1h4.4s2.9.1 2.9-2.8V4.8S17.8 2 11.9 2zm-2.4 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"/><path fill="#FFD43B" d="M12.1 22c4.8 0 4.5-2.1 4.5-2.1v-2.2h-4.6v-.7h6.4s3.6.5 3.6-4.3c0-4.8-3.1-4.6-3.1-4.6h-1.8v2.6s.1 3.1-3.1 3.1h-4.4s-2.9-.1-2.9 2.8v2.6s-.4 2.8 5.4 2.8zm2.4-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/></svg>`
        }
      ]
    },
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#E34F26" d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0z"/><path fill="#EF652A" d="M12 22l7.1-2 1.6-18H12v20z"/><path fill="#FFF" d="M12 9.6H7.9l-.3-3.2H12V3.6H4.8l.1 1.2.8 9.6H12V9.6zm0 7.4l-4.2-1.1-.3-3.1H4.6l.5 6.2L12 20.9v-3.9z"/></svg>`
        },
        {
          name: "CSS",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#1572B6" d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0z"/><path fill="#33A9DC" d="M12 22l7.1-2 1.6-18H12v20z"/><path fill="#FFF" d="M12 9.6H8l-.2-2.4H12V4.8H5.2l.6 7.2H12V9.6zm0 7.4l-3.8-1-.2-2.6H5.5l.5 5.8 6 1.7v-3.9z"/></svg>`
        },
        {
          name: "React",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.5" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.5" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.5" transform="rotate(150 12 12)"/></svg>`
        }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        {
          name: "Django",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22"><rect width="24" height="24" rx="4" fill="#092E20"/><text x="12" y="17" font-size="14" font-family="serif" font-weight="bold" text-anchor="middle" fill="#44B78B">d</text></svg>`
        },
        {
          name: "MySQL",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#00618A" stroke-width="2"><path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3V6z"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/><text x="12" y="15" font-size="6" font-weight="bold" fill="#00618A" text-anchor="middle" stroke="none">SQL</text></svg>`
        },
        {
          name: "SQL",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
        }
      ]
    },
    {
      category: "Core",
      items: [
        {
          name: "Data Structures & Algorithms",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><line x1="12" y1="8" x2="6" y2="15"/><line x1="12" y1="8" x2="18" y2="15"/></svg>`
        },
        {
          name: "Object-Oriented Programming",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="8.5" y="14" width="7" height="7" rx="1.5"/><path d="M6.5 10v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"/><line x1="12" y1="14" x2="12" y2="12"/></svg>`
        },
        {
          name: "DBMS",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="6" rx="2"/><rect x="3" y="15" width="18" height="6" rx="2"/><line x1="7" y1="6" x2="7.01" y2="6"/><line x1="7" y1="18" x2="7.01" y2="18"/><line x1="12" y1="9" x2="12" y2="15"/></svg>`
        },
        {
          name: "Operating Systems",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="7 8 10 11 7 14"/><line x1="13" y1="14" x2="16" y2="14"/></svg>`
        },
        {
          name: "Computer Networks",
          icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/></svg>`
        }
      ]
    }
  ]
};

/* Render Navbar */
function renderNavbar() {
  return `
    <nav class="navbar">
      <div class="container navbar-container">
        <a href="#home" class="brand-logo">
          Daksh<span class="dot"></span>
        </a>
        <ul class="nav-links">
          <li><a href="#home" class="nav-link active">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#certifications" class="nav-link">Certifications</a></li>
          <li><a href="#education" class="nav-link">Education</a></li>
          <li><a href="#learning" class="nav-link">Currently Learning</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <a href="#contact" class="btn-nav">Get in touch</a>
        <button class="mobile-toggle" id="mobile-toggle-btn" aria-label="Toggle Navigation">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>
    <div class="mobile-drawer" id="mobile-drawer">
      <a href="#home" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#certifications" class="nav-link">Certifications</a>
      <a href="#education" class="nav-link">Education</a>
      <a href="#learning" class="nav-link">Currently Learning</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="#contact" class="btn-primary" style="text-align: center;">Get in touch</a>
    </div>
  `;
}

/* Render Hero Section */
function renderHero() {
  return `
    <section id="home" class="hero-section">
      <div class="hero-bg-glow"></div>
      <div class="container hero-grid">
        <div class="hero-content">
          <h1 class="hero-title">${PORTFOLIO_DATA.personal.name}</h1>
          <p class="hero-subtitle">${PORTFOLIO_DATA.personal.role}</p>
          <div class="hero-tagline-box">
            <h2 class="hero-tagline">Ideas are better when they work.</h2>
          </div>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              View Projects
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
           
          </div>
          <div class="hero-tech-strip">
            <p class="tech-strip-label">Core Technologies</p>
            <div class="tech-strip-icons">
              <div class="tech-icon-item">React</div>
              <div class="tech-icon-item">JavaScript</div>
              <div class="tech-icon-item">Python</div>
              <div class="tech-icon-item">C++</div>
              <div class="tech-icon-item">Java</div>
              <div class="tech-icon-item">Django</div>
              <div class="tech-icon-item">SQL</div>
            </div>
          </div>
        </div>
        <div class="hero-visual-wrapper">
          <img src="${heroPortrait}" alt="Daksh Chaudhary" class="hero-portrait-img" />
        </div>
      </div>
    </section>
  `;
}

/* Render About Me Section */
function renderAbout() {
  return `
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header about-section-header">
          <h2 class="section-title">About Me</h2>
        </div>
        <div class="about-grid">
          <div class="about-left">
            <p class="about-text">
              I build software to understand how it works — from the interface down to the data layer. My focus is full-stack development and data structures &amp; algorithms, with C++ as my primary language for problem-solving. I work on projects that connect frontend, backend, and databases, and I explore where AI fits in without overreaching. I learn by building, not by collecting technologies.
            </p>
            <p class="about-philosophy">Ideas are better when they work.</p>
          </div>
          <div class="about-right">
            <img src="${aboutVisualSvg}" alt="Software engineering workspace — full-stack development, DSA, and system architecture" />
          </div>
        </div>
      </div>
    </section>
  `;
}

/* Render Skills Section */
function renderSkills() {
  return `
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">My Skills</h2>
          <p class="section-subtitle">Core programming languages, web technologies, and computer science fundamentals.</p>
        </div>
        <div class="skills-card">
          ${PORTFOLIO_DATA.skillGroups.map(group => `
            <div class="skill-row">
              <div class="skill-row-header">
                <span class="skill-category-name">${group.category}</span>
                <span class="skill-colon">:</span>
              </div>
              <div class="skill-items-container">
                ${group.items.map(item => `
                  <div class="skill-item-badge">
                    <div class="skill-item-icon">${item.icon}</div>
                    <span class="skill-item-name">${item.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* Render Projects Section */
function renderProjects() {
  const loomis = PORTFOLIO_DATA.projects[0];
  return `
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Project</h2>
          <p class="section-subtitle">A practical software project designed and built for real-world placement preparation.</p>
        </div>

        <div class="projects-featured-container">
          <div class="project-card featured" style="grid-column: auto;">
            <div class="project-image-box">
              <img src="${loomis.image}" alt="${loomis.title}" />
            </div>
            <div class="project-content">
              <div>
                <span class="featured-badge">Primary Project</span>
                <h3 class="project-title">${loomis.title}</h3>
                <p class="project-description">${loomis.description}</p>
                <div class="project-tags">
                  ${loomis.tags.map(t => `<span class="badge-tag">${t}</span>`).join('')}
                </div>
              </div>
              <div class="project-footer">
                <a href="${loomis.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                  View Project
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="${loomis.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub Repository
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* Render Certifications Section */
function renderCertifications() {
  return `
    <section id="certifications" class="certifications-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Certifications</h2>
          <p class="section-subtitle">Verified credentials from industry-leading organizations.</p>
        </div>
        <div class="certifications-grid">
          ${PORTFOLIO_DATA.certifications.map(cert => `
            <div class="cert-card">
              <div class="cert-card-inner">
                <div class="cert-logo-row">
                  <div class="cert-logo">${cert.logo}</div>
                  ${cert.date ? `<span class="cert-date">${cert.date}</span>` : ''}
                </div>
                <div class="cert-body">
                  <h3 class="cert-title">${cert.title}</h3>
                  <p class="cert-subtitle-text">${cert.subtitle}</p>
                  <div class="cert-meta">
                    <span class="cert-issuer">${cert.issuer}${cert.issuedVia ? ` <span class="cert-via">via ${cert.issuedVia}</span>` : ''}</span>
                  </div>
                </div>
                <div class="cert-footer">
                  <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-link">
                    View Certificate
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* Render Education Section */
function renderEducation() {
  const edu = PORTFOLIO_DATA.education;
  return `
    <section id="education" class="education-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">Academic program and university background.</p>
        </div>
        <div class="education-card">
          <div class="education-header">
            <div>
              <span class="education-years">${edu.years}</span>
              <h3 class="education-degree">${edu.degree}</h3>
              <div class="education-institution">${edu.institution}</div>
            </div>
            <div class="education-icon-box">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
          </div>
          <p class="education-details">${edu.details}</p>
        </div>
      </div>
    </section>
  `;
}

/* Render Currently Learning Section */
function renderCurrentlyLearning() {
  const learning = PORTFOLIO_DATA.currentlyLearning;
  return `
    <section id="learning" class="learning-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Currently Learning</h2>
          <p class="section-subtitle">Areas of study and technology I am currently exploring.</p>
        </div>
        <div class="learning-card">
          <div class="learning-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </div>
          <h3 class="learning-statement font-serif">
            "${learning.statement}"
          </h3>
          <div class="learning-topics">
            ${learning.topics.map(t => `
              <span class="badge-tag" style="background-color: var(--color-white); border-color: var(--color-border); font-size: 0.85rem; padding: 0.4rem 0.9rem;">
                <span style="width: 6px; height: 6px; background-color: var(--color-accent); border-radius: 50%; display: inline-block;"></span>
                ${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

/* Render Contact Section */
function renderContact() {
  return `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-left">
            <h2 class="section-title">Let's Connect</h2>
            <p class="section-subtitle">
              Feel free to reach out regarding software projects, academic discussions, or tech collaborations.
            </p>
            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div class="contact-info-label">Email</div>
                  <div class="contact-info-value">${PORTFOLIO_DATA.personal.email}</div>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div class="contact-info-label">Location</div>
                  <div class="contact-info-value">${PORTFOLIO_DATA.personal.location}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-right">
            <div class="contact-form-card">
              <form id="contact-form">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Your Name</label>
                  <input type="text" id="contact-name" class="form-control" placeholder="e.g. Alex Smith" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-email">Your Email</label>
                  <input type="email" id="contact-email" class="form-control" placeholder="alex@example.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-message">Message</label>
                  <textarea id="contact-message" class="form-control" placeholder="How can I help you?" required></textarea>
                </div>
                <button type="submit" class="btn-primary" style="width: 100%;">
                  Send Message
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Wave transition -->
      <div class="wave-transition">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z" fill="#060607"/>
        </svg>
      </div>
    </section>
  `;
}

/* Render Footer */
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">${PORTFOLIO_DATA.personal.name}</div>
            <div class="footer-tagline">Manipal University Jaipur • B.Tech Computer Science</div>
          </div>
          <div class="footer-socials">
            <a href="${PORTFOLIO_DATA.personal.github}" target="_blank" rel="noopener" class="social-icon-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="${PORTFOLIO_DATA.personal.linkedin}" target="_blank" rel="noopener" class="social-icon-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:${PORTFOLIO_DATA.personal.email}" class="social-icon-link" aria-label="Email">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <div>&copy; ${new Date().getFullYear()} ${PORTFOLIO_DATA.personal.name}. All rights reserved.</div>
          <div>Undergraduate Developer Portfolio</div>
        </div>
      </div>
    </footer>
    <div class="toast-notification" id="toast-notification">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span id="toast-message">Message sent successfully!</span>
    </div>
  `;
}

/* App Initialization */
function initApp() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderCertifications()}
      ${renderEducation()}

      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  attachEventListeners();
}

/* Event Handler Bindings */
function attachEventListeners() {
  // Mobile drawer toggle
  const toggleBtn = document.querySelector('#mobile-toggle-btn');
  const drawer = document.querySelector('#mobile-drawer');
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  // Contact form submission
  const contactForm = document.querySelector('#contact-form');
  const toast = document.querySelector('#toast-notification');
  const toastMsg = document.querySelector('#toast-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#contact-name').value;
      if (toast && toastMsg) {
        toastMsg.textContent = `Thank you, ${name}! Your message has been sent.`;
        toast.classList.add('show');
        contactForm.reset();
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }
    });
  }

  // Navigation Active State Update on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* Run App */
initApp();
