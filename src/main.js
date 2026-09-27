import './style.css';
import heroVisualSvg from './assets/hero-visual.svg';
import aboutVisualSvg from './assets/about-visual.svg';
import loomisPreviewSvg from './assets/loomis-preview.svg';
import railnexusPreviewSvg from './assets/railnexus-preview.svg';
import jalturnPreviewSvg from './assets/jalturn-preview.svg';
import taskflowPreviewSvg from './assets/taskflow-preview.svg';

/* Data Store */
const PORTFOLIO_DATA = {
  personal: {
    name: "Daksh Chaudhary",
    role: "Full-Stack Developer • Problem Solver • CS Student",
    intro: "I build web applications that are clean, useful, and make an impact. Currently exploring modern web technologies, Data Structures & Algorithms, and building product-driven software with purpose.",
    email: "dakshchaudhary.dev@gmail.com",
    location: "India",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  stats: [
    { number: "1+", label: "Years of Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Dedication to Craft" }
  ],
  projects: [
    {
      id: "loomis",
      title: "Loomis — Student Job Prep Platform",
      category: "Full Stack",
      featured: true,
      description: "A student-focused platform designed to prepare candidates for placements with AI-assisted mock tools, structured study plans, DSA progress tracking, and practice questions.",
      tags: ["React", "Django", "MySQL", "REST APIs"],
      image: loomisPreviewSvg,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "sih-railnexus",
      title: "SIH Rail-Nexus",
      category: "AI / Tools",
      featured: false,
      description: "Smart India Hackathon railway optimization system featuring real-time train tracking, AI track scheduling, and automated delay reduction analytics.",
      tags: ["React", "Python", "Django", "Analytics"],
      image: railnexusPreviewSvg,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "jalturn",
      title: "JalTurn — Water Telemetry",
      category: "Web Apps",
      featured: false,
      description: "Smart water recycling & telemetry platform that monitors IoT flow metrics, daily consumption trends, and water conservation statistics.",
      tags: ["React", "Node.js", "MongoDB", "IoT"],
      image: jalturnPreviewSvg,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "taskflow",
      title: "TaskFlow Workspace",
      category: "Full Stack",
      featured: false,
      description: "Real-time task management and Kanban board workspace supporting team collaboration, project status tracking, and automated workflow triggers.",
      tags: ["React", "Express", "MongoDB", "WebSockets"],
      image: taskflowPreviewSvg,
      githubUrl: "#",
      liveUrl: "#"
    }
  ],
  skills: [
    {
      category: "Frontend",
      icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      items: ["Django", "Node.js", "Express", "REST APIs"]
    },
    {
      category: "Languages",
      icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      items: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      category: "Database & Tools",
      icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Docker"]
    }
  ],
  experience: [
    {
      date: "2024 — Present",
      role: "Full-Stack Project Lead & Developer",
      organization: "Personal & Academic Projects",
      details: [
        "Architected Loomis student job-readiness platform using React, Django, and MySQL.",
        "Engineered RESTful API services and state management routines for seamless user workflows.",
        "Implemented clean editorial UI/UX components with strict responsive design standards."
      ]
    },
    {
      date: "2024",
      role: "Smart India Hackathon Participant (SIH Rail-Nexus)",
      organization: "Ministry of Railways Problem Statement",
      details: [
        "Developed Rail-Nexus railway scheduling analytics system aimed at reducing corridor delay.",
        "Collaborated on track throughput optimization models using Python algorithms & React UI."
      ]
    },
    {
      date: "2023 — Present",
      role: "B.Tech in Computer Science & Engineering",
      organization: "University Academic Program",
      details: [
        "Strong foundation in Data Structures, Object-Oriented Programming (C++/Java), and Web Systems.",
        "Consistently solved complex algorithmic challenges and built production-ready applications."
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
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
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
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="#experience" class="nav-link">Experience</a>
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
          <p class="hero-greeting">Hi, I'm</p>
          <h1 class="hero-title">${PORTFOLIO_DATA.personal.name}</h1>
          <p class="hero-subtitle">${PORTFOLIO_DATA.personal.role}</p>
          <p class="hero-description">${PORTFOLIO_DATA.personal.intro}</p>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              View Projects
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" class="btn-secondary">Contact Me</a>
          </div>
          <div class="hero-tech-strip">
            <p class="tech-strip-label">Technologies & Frameworks</p>
            <div class="tech-strip-icons">
              <div class="tech-icon-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
                React
              </div>
              <div class="tech-icon-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                JavaScript
              </div>
              <div class="tech-icon-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                Python
              </div>
              <div class="tech-icon-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                Java
              </div>
              <div class="tech-icon-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
                C++
              </div>
              <div class="tech-icon-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10v10H7z"/></svg>
                Django
              </div>
              <div class="tech-icon-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                MySQL
              </div>
            </div>
          </div>
        </div>
        <div class="hero-visual-wrapper">
          <img src="${heroVisualSvg}" alt="Editorial visual composition" class="hero-visual-card" />
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
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Turning ideas into real-world solutions through software.</p>
        </div>
        <div class="about-grid">
          <div class="about-left">
            <p class="about-text">
              I am a Full-Stack Developer with a passion for building scalable web applications and solving complex problems through clean code. I enjoy learning new technologies, working on challenging projects, and continuously refining my software engineering craft.
            </p>
            <div class="about-highlights">
              <div class="highlight-card">
                <div class="highlight-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <span>Web Development</span>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <span>Problem Solving</span>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <span>Continuous Learning</span>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <span>Team Collaboration</span>
              </div>
            </div>
          </div>
          <div class="about-right">
            <img src="${aboutVisualSvg}" alt="Workspace setup" style="border-radius: 14px; width: 100%; border: 1px solid var(--color-border);" />
          </div>
        </div>
        <div class="stats-strip">
          ${PORTFOLIO_DATA.stats.map(stat => `
            <div class="stat-item">
              <div class="stat-number">${stat.number}</div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* Render Projects Section */
function renderProjects() {
  return `
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Selected Projects</h2>
          <p class="section-subtitle">Some of the software projects and products I've built so far.</p>
        </div>
        
        <div class="projects-filter">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="Full Stack">Full Stack</button>
          <button class="filter-btn" data-filter="Web Apps">Web Apps</button>
          <button class="filter-btn" data-filter="AI / Tools">AI / Tools</button>
        </div>

        <div class="projects-grid" id="projects-grid">
          ${renderProjectCards('all')}
        </div>
      </div>
    </section>
  `;
}

/* Helper to render individual project cards */
function renderProjectCards(filterCategory) {
  const filtered = filterCategory === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filterCategory);

  return filtered.map(p => `
    <div class="project-card ${p.featured ? 'featured' : ''}" data-category="${p.category}">
      <div class="project-image-box">
        <img src="${p.image}" alt="${p.title}" />
      </div>
      <div class="project-content">
        <div>
          ${p.featured ? `<span class="featured-badge">Featured Project</span>` : ''}
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="badge-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-footer">
          <a href="${p.liveUrl}" class="project-link">
            View Details 
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render Skills Section */
function renderSkills() {
  return `
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">My Skills</h2>
          <p class="section-subtitle">Core technologies, frameworks, and engineering tools I work with.</p>
        </div>
        <div class="skills-grid">
          ${PORTFOLIO_DATA.skills.map(cat => `
            <div class="skill-category-card">
              <div class="category-header">
                <div class="category-icon">${cat.icon}</div>
                <h3 class="category-title">${cat.category}</h3>
              </div>
              <div class="skill-items-grid">
                ${cat.items.map(item => `
                  <div class="skill-item">
                    <span class="skill-name">${item}</span>
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

/* Render Experience Timeline Section */
function renderExperience() {
  return `
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Experience & Journey</h2>
          <p class="section-subtitle">My educational milestones, software projects, and learning journey.</p>
        </div>
        <div class="timeline">
          ${PORTFOLIO_DATA.experience.map(exp => `
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-card">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-role">${exp.role}</h3>
                <div class="timeline-org">${exp.organization}</div>
                <div class="timeline-details">
                  <ul>
                    ${exp.details.map(d => `<li>${d}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          `).join('')}
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
            <h2 class="section-title">Let's Work Together</h2>
            <p class="section-subtitle">
              I'm always open to discussing new opportunities, project collaborations, software engineering roles, or just a friendly tech conversation.
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
      
      <!-- Wave transition to deep navy footer -->
      <div class="wave-transition">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z" fill="#172033"/>
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
            <div class="footer-tagline">Build • Learn • Grow</div>
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
          <div>Designed with editorial precision.</div>
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
      ${renderProjects()}
      ${renderSkills()}
      ${renderExperience()}
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

  // Projects filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.querySelector('#projects-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      if (projectsGrid) {
        projectsGrid.innerHTML = renderProjectCards(cat);
      }
    });
  });

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
