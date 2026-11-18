/**
 * ===================================================================
 * MARIEM MOHAMED - PROFESSIONAL PORTFOLIO LOGIC
 * Features:
 * - Dynamic Data & LocalStorage Persistence
 * - Project Showcase with Details Modal & Tech Stack
 * - Admin Authentication & CRUD for Projects & Certificates
 * - Particle Canvas Background & Typing Effect
 * ===================================================================
 */

// ================= INITIAL DATA =================

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

// ================= STORAGE HELPERS =================
const STORAGE_KEYS = {
  PROJECTS: "mariem_portfolio_projects_v2",
  CERTS: "mariem_portfolio_certs_v3",
  AUTH: "mariem_portfolio_admin_logged"
};

function getStoredProjects() {
  const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(defaultProjects));
    return defaultProjects;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultProjects;
  }
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
}

function getStoredCerts() {
  const data = localStorage.getItem(STORAGE_KEYS.CERTS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(defaultCertificates));
    return defaultCertificates;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultCertificates;
  }
}

function saveCerts(certs) {
  localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(certs));
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
    const navBtn = document.getElementById("openAdminLoginBtn");
    if (navBtn) {
      navBtn.classList.add("logged-in");
      navBtn.innerHTML = '<i class="fas fa-user-shield"></i> Admin Panel';
    }
  } else {
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    document.body.classList.remove("is-admin");
    const adminBar = document.getElementById("adminStatusBar");
    if (adminBar) adminBar.classList.remove("active");
    const navBtn = document.getElementById("openAdminLoginBtn");
    if (navBtn) {
      navBtn.classList.remove("logged-in");
      navBtn.innerHTML = '<i class="fas fa-lock"></i> Admin';
    }
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

// Render Projects
function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  
  const projects = getStoredProjects();
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
    
    // Clicking card opens the details modal
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-admin-actions")) return;
      openProjectModal(project.id);
    });
    
    grid.appendChild(card);
  });
}

// Render Certificates
function renderCertificates() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;
  
  const certs = getStoredCerts();
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
  const projects = getStoredProjects();
  const project = projects.find(p => p.id === id);
  if (!project) return;
  
  const modal = document.getElementById("projectDetailsModal");
  if (!modal) return;
  
  document.getElementById("modalProjectImage").src = project.image;
  document.getElementById("modalProjectCategory").textContent = project.category || "Web Project";
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectOverview").textContent = project.overview || project.shortDesc;
  
  // Tech stack pills
  const techContainer = document.getElementById("modalProjectTech");
  techContainer.innerHTML = project.techStack.map(tech => `
    <span class="modal-tech-pill"><i class="fas fa-code"></i> ${tech}</span>
  `).join("");
  
  // Action Links
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
  
  // Clean hash from URL if it was #login or #admin
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

// ================= ADMIN ACTIONS =================

// Delete Project
window.deleteProject = function(id) {
  if (!confirm("Are you sure you want to delete this project?")) return;
  let projects = getStoredProjects();
  projects = projects.filter(p => p.id !== id);
  saveProjects(projects);
  renderProjects();
  showToast("Project deleted successfully", "fa-trash");
};

// Delete Certificate
window.deleteCert = function(id) {
  if (!confirm("Are you sure you want to delete this certificate?")) return;
  let certs = getStoredCerts();
  certs = certs.filter(c => c.id !== id);
  saveCerts(certs);
  renderCertificates();
  showToast("Certificate deleted successfully", "fa-trash");
};

// Open Add Project Modal
window.openAddProjectModal = function() {
  document.getElementById("projectFormTitle").textContent = "Add New Project";
  document.getElementById("editProjectId").value = "";
  document.getElementById("projectForm").reset();
  document.getElementById("projImgPreview").style.display = "none";
  document.getElementById("projectFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

// Open Edit Project Modal
window.openEditProjectModal = function(id) {
  const projects = getStoredProjects();
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

// Open Add Certificate Modal
window.openAddCertModal = function() {
  document.getElementById("certFormTitle").textContent = "Add New Certificate";
  document.getElementById("editCertId").value = "";
  document.getElementById("certForm").reset();
  document.getElementById("certImgPreview").style.display = "none";
  document.getElementById("certFormModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

// Open Edit Certificate Modal
window.openEditCertModal = function(id) {
  const certs = getStoredCerts();
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

// Reset to Defaults
window.resetPortfolioData = function() {
  if (!confirm("Reset all projects and certificates to the original default data?")) return;
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(defaultProjects));
  localStorage.setItem(STORAGE_KEYS.CERTS, JSON.stringify(defaultCertificates));
  renderProjects();
  renderCertificates();
  showToast("Portfolio data reset to defaults", "fa-undo");
};

// ================= INITIALIZE ON DOM LOAD =================
document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Initial Render
  renderProjects();
  renderCertificates();
  
  // 2. Check Admin Session
  if (isAdminLoggedIn()) {
    setAdminSession(true);
  }
  
  // 3. Check URL for login (e.g. #login, ?login)
  checkUrlForLogin();
  
  // 3. Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
  });
  
  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("is-active");
      navLinks.classList.toggle("active");
    });
    
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("is-active");
        navLinks.classList.remove("active");
      });
    });
  }
  
  // 5. Typing Animation
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    const phrases = [
      "Frontend Web Developer",
      "Angular & TypeScript Specialist",
      "UI/UX & Figma Designer",
      "IT Engineering Student"
    ];
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
        speed = 1800; // pause at end
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
  
  // 6. Project Filters
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const filterValue = this.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });
  
  // 7. Modal Close Triggers
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
    // Secret keyboard shortcut to open Admin Login: Ctrl + Alt + L
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === "l" || e.key === "L")) {
      e.preventDefault();
      window.openAdminLoginModal();
    }
  });
  
  // 8. Admin Login Trigger
  const adminBtn = document.getElementById("openAdminLoginBtn");
  if (adminBtn) {
    adminBtn.addEventListener("click", () => {
      if (isAdminLoggedIn()) {
        showToast("You are already logged in as Admin!", "fa-user-check");
      } else {
        document.getElementById("adminLoginForm").reset();
        document.getElementById("authAlert").style.display = "none";
        document.getElementById("adminLoginModal").classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  }
  
  // 9. Admin Login Form Submit
  const loginForm = document.getElementById("adminLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("adminUsername").value.trim().toLowerCase();
      const pass = document.getElementById("adminPassword").value.trim();
      const alertBox = document.getElementById("authAlert");
      
      // Accept either mariem or admin with password mariem2026 or admin123
      if ((user === "mariem" || user === "admin") && (pass === "mariem2026" || pass === "admin123")) {
        alertBox.className = "auth-alert success";
        alertBox.textContent = "Welcome, Mariem! Logging you in...";
        alertBox.style.display = "block";
        
        setTimeout(() => {
          setAdminSession(true);
          closeAllModals();
          renderProjects();
          renderCertificates();
          showToast("Welcome back, Mariem! Admin mode activated.", "fa-unlock-alt");
        }, 700);
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
      renderProjects();
      renderCertificates();
      showToast("Logged out of Admin mode", "fa-lock");
    });
  }
  
  // 11. Project Form Image File Upload Reader
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
  
  // 12. Project Form Submit (Save / Edit)
  const projForm = document.getElementById("projectForm");
  if (projForm) {
    projForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editProjectId").value;
      const projects = getStoredProjects();
      
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
      
      saveProjects(projects);
      closeAllModals();
      renderProjects();
    });
  }
  
  // 13. Certificate Form Image File Upload Reader
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
  
  // 14. Certificate Form Submit (Save / Edit)
  const certForm = document.getElementById("certForm");
  if (certForm) {
    certForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("editCertId").value;
      const certs = getStoredCerts();
      
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
      
      saveCerts(certs);
      closeAllModals();
      renderCertificates();
    });
  }
  
  // 15. Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you, Mariem will reply shortly!", "fa-envelope-open-text");
      contactForm.reset();
    });
  }
  
  // 16. Particle Canvas Background Effect
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
    
    // Draw connections
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
    
    // Draw dots
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
