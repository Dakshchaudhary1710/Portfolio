import './style.css';
import heroVisualSvg from './assets/hero-visual.svg';
import aboutVisualSvg from './assets/about-visual.svg';
import loomisPreviewSvg from './assets/loomis-preview.svg';

/* Data Store */
const PORTFOLIO_DATA = {
  personal: {
    name: "Daksh Chaudhary",
    role: "CS Undergraduate at Manipal University Jaipur • Developer",
    university: "Manipal University Jaipur",
    intro: "I am a B.Tech Computer Science & Engineering undergraduate at Manipal University Jaipur. I build practical software applications and explore full-stack development, artificial intelligence, and algorithms.",
    email: "dakshchaudhary.dev@gmail.com",
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
  projects: [
    {
      id: "loomis",
      title: "Loomis — Student Job Prep Platform",
      category: "Full Stack",
      featured: true,
      description: "A student-focused placement preparation platform designed to help candidates prepare for interviews with structured study plans, DSA progress tracking, and mock practice questions.",
      tags: ["React", "Django", "MySQL", "REST APIs"],
      image: loomisPreviewSvg,
      githubUrl: "#",
      liveUrl: "#"
    }
  ],
  skills: [
    { name: "C++", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "React", category: "Web & Frameworks" },
    { name: "Django", category: "Web & Frameworks" },
    { name: "SQL", category: "Web & Frameworks" },
    { name: "Git / GitHub", category: "Tools & Core" },
    { name: "Data Structures & Algorithms", category: "Tools & Core" }
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
          <p class="section-subtitle">B.Tech Computer Science & Engineering Student at Manipal University Jaipur.</p>
        </div>
        <div class="about-grid">
          <div class="about-left">
            <p class="about-text">
              I am a Computer Science undergraduate student at <strong>Manipal University Jaipur</strong> (2025–2029). I focus on building real, practical software applications while developing a strong foundation in core computer science principles and artificial intelligence.
            </p>
            <p class="about-text" style="margin-top: 1rem;">
              My key areas of interest include:
            </p>
            <div class="about-highlights" style="margin-top: 1.2rem;">
              ${PORTFOLIO_DATA.interests.map(interest => `
                <div class="highlight-card">
                  <div class="highlight-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>${interest}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="about-right">
            <img src="${aboutVisualSvg}" alt="Workspace setup" style="border-radius: 14px; width: 100%; border: 1px solid var(--color-border);" />
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
          <p class="section-subtitle">Core programming languages, web technologies, and software tools.</p>
        </div>
        <div class="skills-badge-grid">
          ${PORTFOLIO_DATA.skills.map(skill => `
            <div class="skill-badge-card">
              <div class="skill-badge-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <span class="skill-badge-name">${skill.name}</span>
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
                <a href="${loomis.liveUrl}" class="project-link">
                  View Project
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
                  <div class="contact-info-label">University / Location</div>
                  <div class="contact-info-value">${PORTFOLIO_DATA.personal.university}</div>
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
      ${renderEducation()}
      ${renderCurrentlyLearning()}
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
