/**
 * ===================================================================
 * MARIEM MOHAMED - PROFESSIONAL PORTFOLIO LOGIC
 * Features:
 * - Full Dynamic Data & LocalStorage CMS for EVERY Section
 * - Project Showcase with Details Modal & Tech Stack
 * - Admin Authentication & CRUD for Projects, Certs, Hero, About, Exp, Edu, Skills, Contact
 * - Particle Canvas Background & Typing Effect
 * ===================================================================
 */

// ================= DEFAULT DATA =================

const defaultHero = {
  statusText: "Available for Web Projects & Frontend Roles",
  heading: "Mariem Mohamed",
  bio: "Frontend Web Developer specializing in <strong>Angular, TypeScript, and modern JavaScript (ES6+)</strong>. Fourth-year Information Technology student at Assiut International Technological University (AITU) and <strong>DEPI Angular Scholar</strong>. Experienced in building responsive web applications and corporate websites with sleek UI/UX design.",
  typing: [
    "Frontend Web Developer",
    "Angular & TypeScript Specialist",
    "UI/UX & Figma Designer",
    "IT Engineering Student"
  ]
};

const defaultAbout = {
  p1: "I'm <strong>Mariem Mohamed Mahmoud</strong>, a passionate Frontend Web Developer and UI/UX enthusiast currently in my fourth year studying Information Technology at Assiut International Technological University (AITU).",
  p2: "I specialize in architecting scalable Single Page Applications (SPAs) with <strong>Angular, TypeScript, and RxJS</strong>, while leveraging modern design tools like Figma to transform complex requirements into intuitive, fluid digital experiences.",
  p3: "With real-world experience building the official company website and web applications at <strong>Kernel Panic</strong>, as well as intensive training in the <strong>Digital Egypt Pioneers Initiative (DEPI)</strong>, I focus on clean component architectures, robust state management, and high-performance cross-device compatibility.",
  stat1Num: "4+", stat1Label: "Years Learning Tech",
  stat2Num: "7+", stat2Label: "Projects Delivered",
  stat3Num: "DEPI", stat3Label: "Angular Scholar",
  stat4Num: "100%", stat4Label: "Dedication & Quality"
};

const defaultExperience = [
  {
    id: "exp-kernelpanic",
    role: "Frontend Web Developer",
    company: "Kernel Panic IT Team",
    date: "2026",
    bullets: [
      "Designed and built the official company website using HTML5, CSS3, and modern JavaScript with fast loading times and full responsiveness.",
      "Collaborated in an agile team to build client and internal web applications, translating Figma wireframes into modular, reusable frontend components.",
      "Applied modern web standards, code reviews and Git version control in a collaborative workflow."
    ]
  },
  {
    id: "exp-depi",
    role: "Angular Frontend Developer Fellow",
    company: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
    date: "2025 / 2026",
    bullets: [
      "Completed intensive government-sponsored training focused on enterprise-scale Single Page Applications (SPAs) with Angular & TypeScript.",
      "Mastered reactive programming with RxJS, modular component-based architecture, client-side routing, and RESTful API integrations.",
      "Built practical e-commerce and management web applications adhering to clean coding standards."
    ]
  },
  {
    id: "exp-ischool",
    role: "Instructor",
    company: "iSchool, 2026 Intake",
    date: "2026",
    bullets: [
      "Taught and mentored students in iSchool's 2026 intake, supporting the next generation of tech leaders."
    ]
  }
];

const defaultEducation = [
  {
    id: "edu-aitu",
    degree: "Bachelor of Information Technology",
    institution: "Assiut International Technological University (AITU)",
    date: "2023 – 2027 (Expected)",
    description: "Specializing in Software Development, Web Architectures, Database Management Systems, Network Engineering, and Algorithms."
  },
  {
    id: "edu-itec",
    degree: "High School Diploma in IT",
    institution: "Integrated Technical Education Cluster (ITEC Assiut)",
    date: "2019 – 2022",
    description: "Practical foundations in computer systems, programming fundamentals, networking basics, alongside intensive German language studies."
  }
];

const defaultSkills = [
  {
    id: "skill-frontend",
    title: "Frontend Development",
    icon: "fa-laptop-code",
    pills: ["Angular", "TypeScript", "JavaScript (ES6+)", "RxJS", "HTML5", "CSS3", "Responsive Design", "Bootstrap", "Tailwind CSS"],
    featured: ["Angular", "TypeScript", "JavaScript (ES6+)"]
  },
  {
    id: "skill-uiux",
    title: "UI / UX Design",
    icon: "fa-paint-brush",
    pills: ["Figma", "Wireframing", "Interactive Prototyping", "User Research", "Design Systems", "Mobile-First UI"],
    featured: ["Figma"]
  },
  {
    id: "skill-tools",
    title: "Tools & Core CS",
    icon: "fa-tools",
    pills: ["Git & GitHub", "RESTful APIs", "VS Code", "Postman", "SQLite / SQL", "C# & OOP", "C++", "Embedded Systems"],
    featured: ["Git & GitHub"]
  },
  {
    id: "skill-soft",
    title: "Professional Skills",
    icon: "fa-users-cog",
    pills: ["Problem Solving", "Agile Collaboration", "Continuous Learning", "Code Reviews", "Effective Communication"],
    featured: []
  }
];

const defaultProjects = [
  {
    id: "proj-pharmacy",
    title: "Pharmacy Store Web Application (MediStore)",
    category: "Angular & Web App",
    filter: "angular",
    image: "img/medistore.png",
    shortDesc: "Interactive pharmaceutical e-commerce & inventory platform with medicine ordering and cart management.",
    overview: "A comprehensive digital pharmacy platform developed with Angular and TypeScript. Enables customers to explore medicine categories (Anti-Biotics, Tablets, Eye Care, First Aid, etc.), search through an extensive catalog with smart keyword filters, manage real-time shopping cart states, and submit orders smoothly. Built using Angular reactive forms for rigorous validation and responsive layouts optimized across mobile and desktop devices.",
    techStack: ["Angular", "TypeScript", "HTML5", "CSS3", "REST APIs", "RxJS", "Responsive UI"],
    liveUrl: "https://pharmacy-store-one.vercel.app/",
    githubUrl: "https://github.com/Mariem184"
  },
  {
    id: "proj-kernelpanic",
    title: "Kernel Panic IT Team Website",
    category: "Corporate & Tech",
    filter: "client",
    image: "img/kernel-panic.png",
    shortDesc: "Official high-performance company website for Kernel Panic cybersecurity & software team.",
    overview: "Designed and engineered the official landing and corporate website for the Kernel Panic IT team. Showcases specialized services in cybersecurity, networking, software engineering, and corporate technical training. Focused on futuristic dark aesthetics, optimized load times, interactive SVG/canvas elements, SEO best practices, and 100% responsiveness on smartphones and large screens.",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "UI/UX Design", "Figma", "Responsive Web"],
    liveUrl: "https://mariem184.github.io/Portfolio",
    githubUrl: "https://github.com/Mariem184"
  },
  {
    id: "proj-nook",
    title: "Nook — Co-Working Space Platform",
    category: "Angular & Booking",
    filter: "angular",
    image: "img/webuni.png",
    shortDesc: "Modern workspace reservation & co-working hub booking application.",
    overview: "A specialized workspace reservation platform tailored for modern co-working hubs and shared offices. Features desk and meeting room scheduling, real-time availability checks, flexible time slots, amenities showcases, and an intuitive booking workflow that makes reserving a desk effortless and fast.",
    techStack: ["Angular", "TypeScript", "HTML5", "CSS3", "JavaScript", "UI/UX Prototyping"],
    liveUrl: "",
    githubUrl: "https://github.com/Mariem184"
  },
  {
    id: "proj-mobiliya",
    title: "Mobiliya — Furniture E-Commerce",
    category: "E-Commerce",
    filter: "ecommerce",
    image: "img/Mobiliay.png",
    shortDesc: "Modern furniture e-commerce platform blending style, comfort, and interactive shopping.",
    overview: "An online furniture shopping destination featuring modern and classic home collections. Features interactive product catalogs, multi-criteria category filtering (Chairs, Cabinets, Tables), responsive navigation, shopping cart previews, and elegant micro-interactions designed to elevate the user shopping experience.",
    techStack: ["HTML5", "CSS3", "JavaScript", "E-Commerce UI", "Responsive Design"],
    liveUrl: "https://mobiliya-mocha.vercel.app/",
    githubUrl: "https://github.com/Mariem184"
  },
  {
    id: "proj-globaly",
    title: "Globaly — Corporate Business Platform",
    category: "Corporate Website",
    filter: "client",
    image: "img/Globaly.png",
    shortDesc: "Full cycle business management and consulting corporate web platform.",
    overview: "A modern corporate web platform developed for business consulting and financial advisory firms. Highlights corporate services, case studies, client reviews, interactive contact elements, and social media integration with responsive grid layouts.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Web Design"],
    liveUrl: "https://mariem184.github.io/Globaly/",
    githubUrl: "https://github.com/Mariem184/Globaly"
  },
  {
    id: "proj-angora",
    title: "Angora — Creative Agency Landing Page",
    category: "Agency Landing Page",
    filter: "client",
    image: "img/Angora.png",
    shortDesc: "High-impact creative agency landing page with modern visual storytelling.",
    overview: "A visually striking landing page built for creative agencies and branding studios. Includes a full-screen hero section, project portfolio showcase grids, team presentations, smooth scrolling navigation, and refined typography.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    liveUrl: "https://mariem184.github.io/Angora/",
    githubUrl: "https://github.com/Mariem184/Angora"
  },
  {
    id: "proj-egc",
    title: "EGC University System Website",
    category: "Educational Portal",
    filter: "client",
    image: "img/EGC.png",
    shortDesc: "Academic management portal for Egyptian Germany College (AITU).",
    overview: "A web-based university platform built for academic department management, student news feeds, campus events, and admissions information for Egyptian Germany College affiliated with Misr International Technological University.",
    techStack: ["HTML5", "CSS3", "JavaScript", "SQL", "Database Integration"],
    liveUrl: "https://agnefits.github.io/EGC-Website.eg/",
    githubUrl: "https://github.com/Mariem184"
  }
];

const defaultCertificates = [
  {
    id: "cert-depi",
    title: "Angular Frontend Development Track",
    issuer: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
    category: "Angular & Frontend",
    image: "img/nti.png",
    description: "Intensive training in building enterprise-scale Single Page Applications (SPAs) with Angular, TypeScript, RxJS, RESTful API integration, and modular component architecture."
  },
  {
    id: "cert-nti",
    title: "Web Design Specialization",
    issuer: "National Telecommunication Institute (NTI)",
    category: "Web Design",
    image: "img/nti.png",
    description: "Mastering modern web design principles, semantic HTML5, CSS3, responsive layouts, and interactive user interfaces."
  },
  {
    id: "cert-iti-html",
    title: "HTML5 & CSS3 Specialist",
    issuer: "Information Technology Institute (ITI)",
    category: "Frontend Core",
    image: "img/html & css.jpg",
    description: "Advanced CSS styling, Flexbox, CSS Grid layouts, media queries, and cross-browser responsive design."
  },
  {
    id: "cert-iti-db",
    title: "Database Fundamentals",
    issuer: "Information Technology Institute (ITI)",
    category: "Databases",
    image: "img/Database.jpg",
    description: "Relational database concepts, SQL querying, schema normalization, and data manipulation."
  },
  {
    id: "cert-cisco",
    title: "English for IT 1 & 2 (CEFR B2)",
    issuer: "Cisco Networking Academy",
    category: "Communication",
    image: "img/nti.png",
    description: "Professional technical English proficiency for software engineering, international tech documentation, and team communications."
  },
  {
    id: "cert-itida",
    title: "Innovation & Entrepreneurship",
    issuer: "ITIDA (InnovEgypt)",
    category: "Innovation",
    image: "img/innovegypt.jpeg",
    description: "Startup ideation, business model generation, design thinking, and innovative tech venture development."
  },
  {
    id: "cert-ischool",
    title: "Certificate of Completion, Instructor",
    issuer: "iSchool (2026 Intake)",
    category: "Instruction & Mentorship",
    image: "img/nti.png",
    description: "Certified Instructor for mentoring students in iSchool's 2026 intake, supporting the next generation of tech leaders."
  }
];

const defaultContact = {
  email: "mar780032@gmail.com",
  phone: "+20 102 421 3553",
  location: "Assiut, Egypt",
  github: "https://github.com/Mariem184"
};

// ================= STORAGE HELPERS =================
const STORAGE_KEYS = {
  HERO: "mariem_portfolio_hero_v2",
  ABOUT: "mariem_portfolio_about_v2",
  EXP: "mariem_portfolio_exp_v2",
  EDU: "mariem_portfolio_edu_v2",
  SKILLS: "mariem_portfolio_skills_v2",
  PROJECTS: "mariem_portfolio_projects_v2",
  CERTS: "mariem_portfolio_certs_v3",
  CONTACT: "mariem_portfolio_contact_v2",
  AUTH: "mariem_portfolio_admin_logged"
};

function getStoredItem(key, fallback) {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
}

function saveItem(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ================= ADMIN AUTH =================
function isAdminLoggedIn() {
  return sessionStorage.getItem(STORAGE_KEYS.AUTH) === "true";
}

function setAdminSession(isLoggedIn) {
  if (isLoggedIn) {
    sessionStorage.setItem(STORAGE_KEYS.AUTH, "true");
    document.body.classList.add("is-admin");
    const adminBar = document.getElementById("adminStatusBar");
    if (adminBar) adminBar.classList.add("active");
  } else {
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    document.body.classList.remove("is-admin");
    const adminBar = document.getElementById("adminStatusBar");
    if (adminBar) adminBar.classList.remove("active");
  }
}

// ================= TOAST NOTIFICATION =================
function showToast(message, icon = "fa-check-circle") {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ================= RENDERING FUNCTIONS =================

// 1. Render Hero
function renderHero() {
  const hero = getStoredItem(STORAGE_KEYS.HERO, defaultHero);
  const statusEl = document.getElementById("heroStatusText");
  if (statusEl) statusEl.textContent = hero.statusText;
  const bioEl = document.getElementById("heroBio");
  if (bioEl) bioEl.innerHTML = hero.bio;
}

// 2. Render About
function renderAbout() {
  const about = getStoredItem(STORAGE_KEYS.ABOUT, defaultAbout);
  const p1 = document.getElementById("aboutP1");
  const p2 = document.getElementById("aboutP2");
  const p3 = document.getElementById("aboutP3");
  if (p1) p1.innerHTML = about.p1;
  if (p2) p2.innerHTML = about.p2;
  if (p3) p3.innerHTML = about.p3;

  const s1N = document.getElementById("stat1Num");
  const s1L = document.getElementById("stat1Label");
  const s2N = document.getElementById("stat2Num");
  const s2L = document.getElementById("stat2Label");
  const s3N = document.getElementById("stat3Num");
  const s3L = document.getElementById("stat3Label");
  const s4N = document.getElementById("stat4Num");
  const s4L = document.getElementById("stat4Label");

  if (s1N) s1N.textContent = about.stat1Num;
  if (s1L) s1L.textContent = about.stat1Label;
  if (s2N) s2N.textContent = about.stat2Num;
  if (s2L) s2L.textContent = about.stat2Label;
  if (s3N) s3N.textContent = about.stat3Num;
  if (s3L) s3L.textContent = about.stat3Label;
  if (s4N) s4N.textContent = about.stat4Num;
  if (s4L) s4L.textContent = about.stat4Label;
}

// 3. Render Experience
function renderExperience() {
  const container = document.getElementById("experienceList");
  if (!container) return;
  const expList = getStoredItem(STORAGE_KEYS.EXP, defaultExperience);
  container.innerHTML = "";

  expList.forEach(exp => {
    const card = document.createElement("div");
    card.className = "experience-card";
    const bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join("");
    
    card.innerHTML = `
      <div class="exp-header">
        <div>
          <h3 class="exp-role">${exp.role}</h3>
          <div class="exp-company"><i class="fas fa-briefcase"></i> ${exp.company}</div>
        </div>
        <span class="exp-date">${exp.date}</span>
      </div>
      <ul class="exp-bullets">
        ${bulletsHtml}
      </ul>
      <div class="card-header-with-actions">
        <div class="card-admin-actions">
          <button class="card-admin-btn edit" onclick="openEditExpModal('${exp.id}')"><i class="fas fa-edit"></i> Edit</button>
          <button class="card-admin-btn delete" onclick="deleteExp('${exp.id}')"><i class="fas fa-trash"></i> Delete</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 4. Render Education
function renderEducation() {
  const container = document.getElementById("educationList");
  if (!container) return;
  const eduList = getStoredItem(STORAGE_KEYS.EDU, defaultEducation);
  container.innerHTML = "";

  eduList.forEach(edu => {
    const card = document.createElement("div");
    card.className = "edu-card";
    card.innerHTML = `
      <div class="edu-icon-wrap"><i class="fas fa-university"></i></div>
      <h3>${edu.degree}</h3>
      <div class="edu-institution">${edu.institution}</div>
      <span class="edu-badge-date"><i class="far fa-calendar-alt"></i> ${edu.date}</span>
      <p>${edu.description}</p>
      <div class="card-header-with-actions" style="margin-top: auto;">
        <div class="card-admin-actions">
          <button class="card-admin-btn edit" onclick="openEditEduModal('${edu.id}')"><i class="fas fa-edit"></i> Edit</button>
          <button class="card-admin-btn delete" onclick="deleteEdu('${edu.id}')"><i class="fas fa-trash"></i> Delete</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 5. Render Skills
function renderSkills() {
  const container = document.getElementById("skillsList");
  if (!container) return;
  const skillsList = getStoredItem(STORAGE_KEYS.SKILLS, defaultSkills);
  container.innerHTML = "";

  skillsList.forEach(cat => {
    const card = document.createElement("div");
    card.className = "skill-category-card";
    const pillsHtml = cat.pills.map(p => {
      const isFeatured = (cat.featured || []).includes(p);
      return `<span class="skill-pill ${isFeatured ? 'featured' : ''}">${p}</span>`;
    }).join("");

    card.innerHTML = `
      <div class="skill-cat-header">
        <i class="fas ${cat.icon || 'fa-code'}"></i>
        <h3>${cat.title}</h3>
      </div>
      <div class="skill-pills-wrap">
        ${pillsHtml}
      </div>
      <div class="card-header-with-actions">
        <div class="card-admin-actions">
          <button class="card-admin-btn edit" onclick="openEditSkillModal('${cat.id}')"><i class="fas fa-edit"></i> Edit</button>
          <button class="card-admin-btn delete" onclick="deleteSkill('${cat.id}')"><i class="fas fa-trash"></i> Delete</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 6. Render Contact Info
function renderContact() {
  const contact = getStoredItem(STORAGE_KEYS.CONTACT, defaultContact);
  const emailEl = document.getElementById("contactEmailText");
  const phoneEl = document.getElementById("contactPhoneText");
  const locEl = document.getElementById("contactLocText");
  const githubEl = document.getElementById("contactGithubLink");

  if (emailEl) {
    emailEl.textContent = contact.email;
    emailEl.href = `mailto:${contact.email}`;
  }
  if (phoneEl) {
    phoneEl.textContent = contact.phone;
    phoneEl.href = `tel:${contact.phone.replace(/\s+/g, '')}`;
  }
  if (locEl) locEl.textContent = contact.location;
  if (githubEl) {
    githubEl.textContent = contact.github.replace("https://", "");
    githubEl.href = contact.github;
  }
}

// 7. Render Projects
function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  
  const projects = getStoredItem(STORAGE_KEYS.PROJECTS, defaultProjects);
  let filtered = projects;
  if (filter !== "all") {
    filtered = projects.filter(p => p.filter === filter || (filter === "angular" && p.techStack.some(t => t.toLowerCase().includes("angular"))));
  }
  
  grid.innerHTML = "";
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">No projects found in this category.</div>`;
    return;
  }
  
  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);
    
    const tagsHtml = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join("");
    
    card.innerHTML = `
      <div class="project-thumb">
        <img src="${project.image}" alt="${project.title}" onerror="this.src='img/img.png';">
        <span class="project-overlay-badge">${project.category || "Project"}</span>
        <div class="project-hover-hint">
          <span><i class="fas fa-eye"></i> Quick Details</span>
        </div>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.shortDesc || project.overview.slice(0, 110) + '...'}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <div class="project-card-footer">
          <button class="btn-card-details" onclick="openProjectModal('${project.id}')">
            <span>View Full Details</span> <i class="fas fa-arrow-right"></i>
          </button>
          <div class="card-admin-actions" onclick="event.stopPropagation();">
            <button class="card-admin-btn edit" onclick="openEditProjectModal('${project.id}')" title="Edit Project"><i class="fas fa-edit"></i> Edit</button>
            <button class="card-admin-btn delete" onclick="deleteProject('${project.id}')" title="Delete Project"><i class="fas fa-trash"></i> Delete</button>
          </div>
        </div>
      </div>
    `;
    
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-admin-actions")) return;
      openProjectModal(project.id);
    });
    
    grid.appendChild(card);
  });
}

// 8. Render Certificates
function renderCertificates() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;
  
  const certs = getStoredItem(STORAGE_KEYS.CERTS, defaultCertificates);
  grid.innerHTML = "";
  
  certs.forEach(cert => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.setAttribute("data-id", cert.id);
    
    card.innerHTML = `
      <div class="cert-img-box" onclick="openLightbox('${cert.image}', '${cert.title}')">
        <img src="${cert.image}" alt="${cert.title}" onerror="this.src='img/nti.png';">
        <div class="cert-view-overlay">
          <span><i class="fas fa-search-plus"></i> View Full Size</span>
        </div>
      </div>
      <div class="cert-details">
        <span class="cert-issuer-badge">${cert.issuer}</span>
        <h3>${cert.title}</h3>
        <p>${cert.description}</p>
        <div class="cert-footer-actions">
          <button class="btn-card-details" onclick="openLightbox('${cert.image}', '${cert.title}')">
            <i class="fas fa-expand"></i> Preview
          </button>
          <div class="card-admin-actions" onclick="event.stopPropagation();">
            <button class="card-admin-btn edit" onclick="openEditCertModal('${cert.id}')"><i class="fas fa-edit"></i> Edit</button>
            <button class="card-admin-btn delete" onclick="deleteCert('${cert.id}')"><i class="fas fa-trash"></i> Delete</button>
          </div>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ================= PROJECT DETAILS MODAL =================
function openProjectModal(id) {
  const projects = getStoredItem(STORAGE_KEYS.PROJECTS, defaultProjects);
  const project = projects.find(p => p.id === id);
  if (!project) return;
  
  const modal = document.getElementById("projectDetailsModal");
  if (!modal) return;
  
  document.getElementById("modalProjectImage").src = project.image;
  document.getElementById("modalProjectCategory").textContent = project.category || "Web Project";
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectOverview").textContent = project.overview || project.shortDesc;
  
  const techContainer = document.getElementById("modalProjectTech");
  techContainer.innerHTML = project.techStack.map(tech => `
    <span class="modal-tech-pill"><i class="fas fa-code"></i> ${tech}</span>
  `).join("");
  
  const liveBtn = document.getElementById("modalProjectLiveBtn");
  if (project.liveUrl && project.liveUrl !== "#" && project.liveUrl.trim() !== "") {
    liveBtn.href = project.liveUrl;
    liveBtn.style.display = "inline-flex";
  } else {
    liveBtn.style.display = "none";
  }
  
  const githubBtn = document.getElementById("modalProjectGithubBtn");
  if (project.githubUrl && project.githubUrl.trim() !== "") {
    githubBtn.href = project.githubUrl;
    githubBtn.style.display = "inline-flex";
  } else {
    githubBtn.style.display = "none";
  }
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ================= LIGHTBOX MODAL =================
function openLightbox(imgSrc, title = "") {
  const modal = document.getElementById("imageLightboxModal");
  if (!modal) return;
  document.getElementById("lightboxImage").src = imgSrc;
  document.getElementById("lightboxTitle").textContent = title;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  document.body.style.overflow = "";
  
  if (window.location.hash.toLowerCase().includes("login") || window.location.hash.toLowerCase().includes("admin")) {
    try {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    } catch (e) {}
  }
}

// Open Admin Login Modal Globally
window.openAdminLoginModal = function() {
  if (isAdminLoggedIn()) {
    showToast("You are already logged in as Admin!", "fa-user-check");
    return;
  }
  const modal = document.getElementById("adminLoginModal");
  if (modal) {
    const loginForm = document.getElementById("adminLoginForm");
    if (loginForm) loginForm.reset();
    const alertBox = document.getElementById("authAlert");
    if (alertBox) alertBox.style.display = "none";
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const input = document.getElementById("adminUsername");
      if (input) input.focus();
    }, 200);
  }
};

// Check URL for "login" or "admin" to trigger Login Modal
function checkUrlForLogin() {
  const hash = (window.location.hash || "").toLowerCase();
  const search = (window.location.search || "").toLowerCase();
  const href = (window.location.href || "").toLowerCase();
  
  if (hash.includes("login") || hash.includes("admin") || search.includes("login") || search.includes("admin") || href.endsWith("/login") || href.endsWith("#login")) {
    window.openAdminLoginModal();
  }
}

window.addEventListener("hashchange", checkUrlForLogin);
window.addEventListener("popstate", checkUrlForLogin);

// ================= ADMIN ACTIONS FOR ALL SECTIONS =================

// --- 1. HERO SECTION ---
window.openEditHeroModal = function() {
  const hero = getStoredItem(STORAGE_KEYS.HERO, defaultHero);
  document.getElementById("heroFormStatus").value = hero.statusText;
  document.getElementById("heroFormBio").value = hero.bio;
  document.getElementById("heroFormTyping").value = (hero.typing || []).join(", ");
  document.getElementById("heroFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

// --- 2. ABOUT SECTION ---
window.openEditAboutModal = function() {
  const about = getStoredItem(STORAGE_KEYS.ABOUT, defaultAbout);
  document.getElementById("aboutFormP1").value = about.p1;
  document.getElementById("aboutFormP2").value = about.p2;
  document.getElementById("aboutFormP3").value = about.p3;
  document.getElementById("aboutFormStat1Num").value = about.stat1Num;
  document.getElementById("aboutFormStat1Label").value = about.stat1Label;
  document.getElementById("aboutFormStat2Num").value = about.stat2Num;
  document.getElementById("aboutFormStat2Label").value = about.stat2Label;
  document.getElementById("aboutFormStat3Num").value = about.stat3Num;
  document.getElementById("aboutFormStat3Label").value = about.stat3Label;
  document.getElementById("aboutFormStat4Num").value = about.stat4Num;
  document.getElementById("aboutFormStat4Label").value = about.stat4Label;
  document.getElementById("aboutFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

// --- 3. EXPERIENCE SECTION ---
window.openAddExpModal = function() {
  document.getElementById("expFormTitle").textContent = "Add New Experience";
  document.getElementById("editExpId").value = "";
  document.getElementById("expForm").reset();
  document.getElementById("expFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.openEditExpModal = function(id) {
  const expList = getStoredItem(STORAGE_KEYS.EXP, defaultExperience);
  const exp = expList.find(e => e.id === id);
  if (!exp) return;
  document.getElementById("expFormTitle").textContent = "Edit Experience";
  document.getElementById("editExpId").value = exp.id;
  document.getElementById("expRole").value = exp.role;
  document.getElementById("expCompany").value = exp.company;
  document.getElementById("expDate").value = exp.date;
  document.getElementById("expBullets").value = exp.bullets.join("\n");
  document.getElementById("expFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.deleteExp = function(id) {
  if (!confirm("Are you sure you want to delete this experience entry?")) return;
  let expList = getStoredItem(STORAGE_KEYS.EXP, defaultExperience);
  expList = expList.filter(e => e.id !== id);
  saveItem(STORAGE_KEYS.EXP, expList);
  renderExperience();
  showToast("Experience deleted successfully", "fa-trash");
};

// --- 4. EDUCATION SECTION ---
window.openAddEduModal = function() {
  document.getElementById("eduFormTitle").textContent = "Add New Education";
  document.getElementById("editEduId").value = "";
  document.getElementById("eduForm").reset();
  document.getElementById("eduFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.openEditEduModal = function(id) {
  const eduList = getStoredItem(STORAGE_KEYS.EDU, defaultEducation);
  const edu = eduList.find(e => e.id === id);
  if (!edu) return;
  document.getElementById("eduFormTitle").textContent = "Edit Education";
  document.getElementById("editEduId").value = edu.id;
  document.getElementById("eduDegree").value = edu.degree;
  document.getElementById("eduInstitution").value = edu.institution;
  document.getElementById("eduDate").value = edu.date;
  document.getElementById("eduDesc").value = edu.description;
  document.getElementById("eduFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.deleteEdu = function(id) {
  if (!confirm("Are you sure you want to delete this education entry?")) return;
  let eduList = getStoredItem(STORAGE_KEYS.EDU, defaultEducation);
  eduList = eduList.filter(e => e.id !== id);
  saveItem(STORAGE_KEYS.EDU, eduList);
  renderEducation();
  showToast("Education deleted successfully", "fa-trash");
};

// --- 5. SKILLS SECTION ---
window.openAddSkillModal = function() {
  document.getElementById("skillFormTitle").textContent = "Add Skill Category";
  document.getElementById("editSkillId").value = "";
  document.getElementById("skillForm").reset();
  document.getElementById("skillFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.openEditSkillModal = function(id) {
  const skills = getStoredItem(STORAGE_KEYS.SKILLS, defaultSkills);
  const skill = skills.find(s => s.id === id);
  if (!skill) return;
  document.getElementById("skillFormTitle").textContent = "Edit Skill Category";
  document.getElementById("editSkillId").value = skill.id;
  document.getElementById("skillTitle").value = skill.title;
  document.getElementById("skillIcon").value = skill.icon || "fa-laptop-code";
  document.getElementById("skillPills").value = skill.pills.join(", ");
  document.getElementById("skillFeatured").value = (skill.featured || []).join(", ");
  document.getElementById("skillFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.deleteSkill = function(id) {
  if (!confirm("Are you sure you want to delete this skill category?")) return;
  let skills = getStoredItem(STORAGE_KEYS.SKILLS, defaultSkills);
  skills = skills.filter(s => s.id !== id);
  saveItem(STORAGE_KEYS.SKILLS, skills);
  renderSkills();
  showToast("Skill category deleted", "fa-trash");
};

// --- 6. CONTACT SECTION ---
window.openEditContactModal = function() {
  const contact = getStoredItem(STORAGE_KEYS.CONTACT, defaultContact);
  document.getElementById("contactFormEmail").value = contact.email;
  document.getElementById("contactFormPhone").value = contact.phone;
  document.getElementById("contactFormLocation").value = contact.location;
  document.getElementById("contactFormGithub").value = contact.github;
  document.getElementById("contactFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

// --- 7. PROJECTS ---
window.deleteProject = function(id) {
  if (!confirm("Are you sure you want to delete this project?")) return;
  let projects = getStoredItem(STORAGE_KEYS.PROJECTS, defaultProjects);
  projects = projects.filter(p => p.id !== id);
  saveItem(STORAGE_KEYS.PROJECTS, projects);
  renderProjects();
  showToast("Project deleted successfully", "fa-trash");
};

window.openAddProjectModal = function() {
  document.getElementById("projectFormTitle").textContent = "Add New Project";
  document.getElementById("editProjectId").value = "";
  document.getElementById("projectForm").reset();
  document.getElementById("projImgPreview").style.display = "none";
  document.getElementById("projectFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.openEditProjectModal = function(id) {
  const projects = getStoredItem(STORAGE_KEYS.PROJECTS, defaultProjects);
  const project = projects.find(p => p.id === id);
  if (!project) return;
  
  document.getElementById("projectFormTitle").textContent = "Edit Project";
  document.getElementById("editProjectId").value = project.id;
  document.getElementById("projTitle").value = project.title;
  document.getElementById("projCategory").value = project.category;
  document.getElementById("projFilter").value = project.filter || "all";
  document.getElementById("projShortDesc").value = project.shortDesc || "";
  document.getElementById("projOverview").value = project.overview || "";
  document.getElementById("projTechStack").value = project.techStack.join(", ");
  document.getElementById("projImageUrl").value = project.image;
  document.getElementById("projLiveUrl").value = project.liveUrl || "";
  document.getElementById("projGithubUrl").value = project.githubUrl || "";
  
  const preview = document.getElementById("projImgPreview");
  preview.src = project.image;
  preview.style.display = "block";
  
  document.getElementById("projectFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

// --- 8. CERTIFICATES ---
window.deleteCert = function(id) {
  if (!confirm("Are you sure you want to delete this certificate?")) return;
  let certs = getStoredItem(STORAGE_KEYS.CERTS, defaultCertificates);
  certs = certs.filter(c => c.id !== id);
  saveItem(STORAGE_KEYS.CERTS, certs);
  renderCertificates();
  showToast("Certificate deleted successfully", "fa-trash");
};

window.openAddCertModal = function() {
  document.getElementById("certFormTitle").textContent = "Add New Certificate";
  document.getElementById("editCertId").value = "";
  document.getElementById("certForm").reset();
  document.getElementById("certImgPreview").style.display = "none";
  document.getElementById("certFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.openEditCertModal = function(id) {
  const certs = getStoredItem(STORAGE_KEYS.CERTS, defaultCertificates);
  const cert = certs.find(c => c.id === id);
  if (!cert) return;
  
  document.getElementById("certFormTitle").textContent = "Edit Certificate";
  document.getElementById("editCertId").value = cert.id;
  document.getElementById("certTitle").value = cert.title;
  document.getElementById("certIssuer").value = cert.issuer;
  document.getElementById("certDesc").value = cert.description;
  document.getElementById("certImageUrl").value = cert.image;
  
  const preview = document.getElementById("certImgPreview");
  preview.src = cert.image;
  preview.style.display = "block";
  
  document.getElementById("certFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

// Reset All Portfolio Data to Defaults
window.resetPortfolioData = function() {
  if (!confirm("Reset all sections, projects and certificates back to original defaults?")) return;
  localStorage.setItem(STORAGE_KEYS.HERO, JSON.stringify(defaultHero));
  localStorage.setItem(STORAGE_KEYS.ABOUT, JSON.stringify(defaultAbout));
  localStorage.setItem(STORAGE_KEYS.EXP, JSON.stringify(defaultExperience));
  localStorage.setItem(STORAGE_KEYS.EDU, JSON.stringify(defaultEducation));
  localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(defaultSkills));
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(defaultProjects));
  localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(defaultCertificates));
  localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(defaultContact));
  
  renderHero();
  renderAbout();
  renderExperience();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderContact();
  showToast("All sections reset to defaults", "fa-undo");
};

// ================= INITIALIZE ON DOM LOAD =================
document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Initial Renders for All Sections
  renderHero();
  renderAbout();
  renderExperience();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderContact();
  
  // 2. Check Admin Session
  if (isAdminLoggedIn()) {
    setAdminSession(true);
  }
  
  // 3. Check URL for login (e.g. #login, ?login)
  checkUrlForLogin();
  
  // 4. Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
  });
  
  // 5. Navigation Links & Active Underline Handling
  const mobileToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const allNavAnchors = document.querySelectorAll(".nav-links a");
  
  if (allNavAnchors.length > 0) {
    allNavAnchors.forEach(link => {
      link.addEventListener("click", function () {
        if (mobileToggle) mobileToggle.classList.remove("is-active");
        if (navLinks) navLinks.classList.remove("active");
        
        allNavAnchors.forEach(a => a.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("is-active");
      navLinks.classList.toggle("active");
    });
  }

  // ScrollSpy: Automatically update active nav link as user scrolls
  const allSections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    allSections.forEach(sec => {
      const secTop = sec.offsetTop - 140;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    if (currentSectionId) {
      allNavAnchors.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${currentSectionId}`) {
          a.classList.add("active");
        }
      });
    } else if (scrollPos < 100) {
      allNavAnchors.forEach(a => a.classList.remove("active"));
      const homeLink = document.querySelector('.nav-links a[href="#home"]');
      if (homeLink) homeLink.classList.add("active");
    }
  });
  
  // 6. Typing Animation
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    const heroData = getStoredItem(STORAGE_KEYS.HERO, defaultHero);
    const phrases = heroData.typing && heroData.typing.length > 0 ? heroData.typing : defaultHero.typing;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeLoop() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let speed = isDeleting ? 40 : 90;
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
      }
      
      setTimeout(typeLoop, speed);
    }
    typeLoop();
  }
  
  // 7. Project Filters
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const filterValue = this.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });
  
  // 8. Modal Close Triggers
  document.querySelectorAll(".modal-close-btn, .modal-close-trigger").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });
  
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === "l" || e.key === "L")) {
      e.preventDefault();
      window.openAdminLoginModal();
    }
  });
  
  // 9. Admin Login Form Submit
  const loginForm = document.getElementById("adminLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("adminUsername").value.trim().toLowerCase();
      const pass = document.getElementById("adminPassword").value.trim();
      const alertBox = document.getElementById("authAlert");
      
      if ((user === "mariem" || user === "admin") && (pass === "mariem2026" || pass === "admin123")) {
        alertBox.className = "auth-alert success";
        alertBox.textContent = "Welcome, Mariem! Logging you in...";
        alertBox.style.display = "block";
        
        setTimeout(() => {
          setAdminSession(true);
          closeAllModals();
          renderExperience();
          renderEducation();
          renderSkills();
          renderProjects();
          renderCertificates();
          showToast("Welcome back, Mariem! Admin mode activated.", "fa-unlock-alt");
        }, 600);
      } else {
        alertBox.className = "auth-alert error";
        alertBox.textContent = "Incorrect username or password. (Hint: mariem / admin123)";
        alertBox.style.display = "block";
      }
    });
  }
  
  // 10. Admin Logout
  const logoutBtn = document.getElementById("adminLogoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      setAdminSession(false);
      renderExperience();
      renderEducation();
      renderSkills();
      renderProjects();
      renderCertificates();
      showToast("Logged out of Admin mode", "fa-lock");
    });
  }
  
  // --- Form Handlers ---
  
  // Hero Form Submit
  const heroForm = document.getElementById("heroForm");
  if (heroForm) {
    heroForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const typingArr = document.getElementById("heroFormTyping").value
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0);

      const heroData = {
        statusText: document.getElementById("heroFormStatus").value.trim(),
        heading: "Mariem Mohamed",
        bio: document.getElementById("heroFormBio").value.trim(),
        typing: typingArr.length > 0 ? typingArr : defaultHero.typing
      };
      saveItem(STORAGE_KEYS.HERO, heroData);
      renderHero();
      closeAllModals();
      showToast("Hero section updated!", "fa-check");
    });
  }

  // About Form Submit
  const aboutForm = document.getElementById("aboutForm");
  if (aboutForm) {
    aboutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const aboutData = {
        p1: document.getElementById("aboutFormP1").value.trim(),
        p2: document.getElementById("aboutFormP2").value.trim(),
        p3: document.getElementById("aboutFormP3").value.trim(),
        stat1Num: document.getElementById("aboutFormStat1Num").value.trim(),
        stat1Label: document.getElementById("aboutFormStat1Label").value.trim(),
        stat2Num: document.getElementById("aboutFormStat2Num").value.trim(),
        stat2Label: document.getElementById("aboutFormStat2Label").value.trim(),
        stat3Num: document.getElementById("aboutFormStat3Num").value.trim(),
        stat3Label: document.getElementById("aboutFormStat3Label").value.trim(),
        stat4Num: document.getElementById("aboutFormStat4Num").value.trim(),
        stat4Label: document.getElementById("aboutFormStat4Label").value.trim()
      };
      saveItem(STORAGE_KEYS.ABOUT, aboutData);
      renderAbout();
      closeAllModals();
      showToast("About & stats updated!", "fa-check");
    });
  }

  // Experience Form Submit
  const expForm = document.getElementById("expForm");
  if (expForm) {
    expForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editExpId").value;
      const expList = getStoredItem(STORAGE_KEYS.EXP, defaultExperience);
      const bullets = document.getElementById("expBullets").value
        .split("\n")
        .map(b => b.trim())
        .filter(b => b.length > 0);

      const expData = {
        id: editId || ("exp-" + Date.now()),
        role: document.getElementById("expRole").value.trim(),
        company: document.getElementById("expCompany").value.trim(),
        date: document.getElementById("expDate").value.trim(),
        bullets: bullets.length > 0 ? bullets : ["Collaborated on software solutions."]
      };

      if (editId) {
        const idx = expList.findIndex(e => e.id === editId);
        if (idx !== -1) expList[idx] = expData;
        showToast("Experience updated successfully!", "fa-check");
      } else {
        expList.unshift(expData);
        showToast("Experience added successfully!", "fa-plus-circle");
      }
      saveItem(STORAGE_KEYS.EXP, expList);
      renderExperience();
      closeAllModals();
    });
  }

  // Education Form Submit
  const eduForm = document.getElementById("eduForm");
  if (eduForm) {
    eduForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editEduId").value;
      const eduList = getStoredItem(STORAGE_KEYS.EDU, defaultEducation);

      const eduData = {
        id: editId || ("edu-" + Date.now()),
        degree: document.getElementById("eduDegree").value.trim(),
        institution: document.getElementById("eduInstitution").value.trim(),
        date: document.getElementById("eduDate").value.trim(),
        description: document.getElementById("eduDesc").value.trim()
      };

      if (editId) {
        const idx = eduList.findIndex(e => e.id === editId);
        if (idx !== -1) eduList[idx] = eduData;
        showToast("Education updated successfully!", "fa-check");
      } else {
        eduList.unshift(eduData);
        showToast("Education added successfully!", "fa-plus-circle");
      }
      saveItem(STORAGE_KEYS.EDU, eduList);
      renderEducation();
      closeAllModals();
    });
  }

  // Skills Form Submit
  const skillForm = document.getElementById("skillForm");
  if (skillForm) {
    skillForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editSkillId").value;
      const skills = getStoredItem(STORAGE_KEYS.SKILLS, defaultSkills);

      const pills = document.getElementById("skillPills").value
        .split(",")
        .map(p => p.trim())
        .filter(p => p.length > 0);
      const featured = document.getElementById("skillFeatured").value
        .split(",")
        .map(p => p.trim())
        .filter(p => p.length > 0);

      const skillData = {
        id: editId || ("skill-" + Date.now()),
        title: document.getElementById("skillTitle").value.trim(),
        icon: document.getElementById("skillIcon").value.trim() || "fa-laptop-code",
        pills: pills.length > 0 ? pills : ["Skill"],
        featured: featured
      };

      if (editId) {
        const idx = skills.findIndex(s => s.id === editId);
        if (idx !== -1) skills[idx] = skillData;
        showToast("Skill category updated!", "fa-check");
      } else {
        skills.push(skillData);
        showToast("Skill category added!", "fa-plus-circle");
      }
      saveItem(STORAGE_KEYS.SKILLS, skills);
      renderSkills();
      closeAllModals();
    });
  }

  // Contact Form Submit (Admin info edit)
  const contactEditForm = document.getElementById("contactEditForm");
  if (contactEditForm) {
    contactEditForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const contactData = {
        email: document.getElementById("contactFormEmail").value.trim(),
        phone: document.getElementById("contactFormPhone").value.trim(),
        location: document.getElementById("contactFormLocation").value.trim(),
        github: document.getElementById("contactFormGithub").value.trim()
      };
      saveItem(STORAGE_KEYS.CONTACT, contactData);
      renderContact();
      closeAllModals();
      showToast("Contact details updated!", "fa-check");
    });
  }

  // Project Form Image File Upload Reader
  const projFileInput = document.getElementById("projFileInput");
  if (projFileInput) {
    projFileInput.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          document.getElementById("projImageUrl").value = evt.target.result;
          const preview = document.getElementById("projImgPreview");
          preview.src = evt.target.result;
          preview.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }
  
  // Project Form Submit
  const projForm = document.getElementById("projectForm");
  if (projForm) {
    projForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editProjectId").value;
      const projects = getStoredItem(STORAGE_KEYS.PROJECTS, defaultProjects);
      
      const techArray = document.getElementById("projTechStack").value
        .split(",")
        .map(t => t.trim())
        .filter(t => t.length > 0);
        
      const projectData = {
        id: editId || ("proj-" + Date.now()),
        title: document.getElementById("projTitle").value.trim(),
        category: document.getElementById("projCategory").value.trim(),
        filter: document.getElementById("projFilter").value,
        shortDesc: document.getElementById("projShortDesc").value.trim(),
        overview: document.getElementById("projOverview").value.trim(),
        techStack: techArray.length > 0 ? techArray : ["Web Development"],
        image: document.getElementById("projImageUrl").value.trim() || "img/img.png",
        liveUrl: document.getElementById("projLiveUrl").value.trim(),
        githubUrl: document.getElementById("projGithubUrl").value.trim()
      };
      
      if (editId) {
        const index = projects.findIndex(p => p.id === editId);
        if (index !== -1) projects[index] = projectData;
        showToast("Project updated successfully!", "fa-check");
      } else {
        projects.unshift(projectData);
        showToast("New project added successfully!", "fa-plus-circle");
      }
      
      saveItem(STORAGE_KEYS.PROJECTS, projects);
      closeAllModals();
      renderProjects();
    });
  }
  
  // Certificate Form Image File Upload Reader
  const certFileInput = document.getElementById("certFileInput");
  if (certFileInput) {
    certFileInput.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          document.getElementById("certImageUrl").value = evt.target.result;
          const preview = document.getElementById("certImgPreview");
          preview.src = evt.target.result;
          preview.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }
  
  // Certificate Form Submit
  const certForm = document.getElementById("certForm");
  if (certForm) {
    certForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editCertId").value;
      const certs = getStoredItem(STORAGE_KEYS.CERTS, defaultCertificates);
      
      const certData = {
        id: editId || ("cert-" + Date.now()),
        title: document.getElementById("certTitle").value.trim(),
        issuer: document.getElementById("certIssuer").value.trim(),
        category: "Certification",
        image: document.getElementById("certImageUrl").value.trim() || "img/nti.png",
        description: document.getElementById("certDesc").value.trim()
      };
      
      if (editId) {
        const index = certs.findIndex(c => c.id === editId);
        if (index !== -1) certs[index] = certData;
        showToast("Certificate updated successfully!", "fa-check");
      } else {
        certs.unshift(certData);
        showToast("New certificate added successfully!", "fa-plus-circle");
      }
      
      saveItem(STORAGE_KEYS.CERTS, certs);
      closeAllModals();
      renderCertificates();
    });
  }
  
  // Public Message Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you, Mariem will reply shortly!", "fa-envelope-open-text");
      contactForm.reset();
    });
  }
  
  // Canvas Particles
  initParticleCanvas();
});

// Canvas Particles Effect
function initParticleCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);
  
  const particleCount = Math.min(width > 768 ? 45 : 20, 60);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(0, 242, 254, " : "rgba(79, 172, 254, ",
      alpha: Math.random() * 0.5 + 0.1
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}
