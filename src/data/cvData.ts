export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  promoBadge?: string;
  description: string;
  metrics: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  details: string;
  link?: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface CVData {
  personalInfo: {
    fullName: string;
    monogram: string;
    headline: string;
    campaignStatement: string[];
    location: string;
    availability: string;
    email: string;
    linkedin: string;
    github: string;
    currentStack: string[];
    about: string[];
  };
  metrics: MetricItem[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: { language: string; level: string; certification?: string }[];
  ui: {
    nav: {
      about: string;
      experience: string;
      projects: string;
      skills: string;
      education: string;
      contact: string;
      searchPlaceholder: string;
      contactBtn: string;
    };
    hero: {
      tag: string;
      exploreBtn: string;
      downloadPdfBtn: string;
    };
    about: {
      sectionNum: string;
      sectionTitle: string;
      sectionSubtitle: string;
      performanceTitle: string;
      performanceDesc: string;
      robustnessTitle: string;
      robustnessDesc: string;
      specTitle: string;
      locationLabel: string;
      statusLabel: string;
      statusValue: string;
      modalityLabel: string;
      modalityValue: string;
      stackLabel: string;
    };
    experience: {
      sectionNum: string;
      sectionTitle: string;
      sectionSubtitle: string;
      achievementsTitle: string;
      techTitle: string;
      achievementsCountSuffix: string;
    };
    projects: {
      sectionNum: string;
      sectionTitle: string;
      sectionSubtitle: string;
      deliveriesCount: string;
      allFilter: string;
      demoBtn: string;
      repoBtn: string;
      noResults: string;
      viewAllBtn: string;
      techsCountSuffix: string;
    };
    skills: {
      sectionNum: string;
      sectionTitle: string;
      sectionSubtitle: string;
      tag: string;
      footerTag: string;
    };
    education: {
      sectionNum: string;
      sectionTitle: string;
      sectionSubtitle: string;
      verifiedTag: string;
      academicTitle: string;
      languagesTitle: string;
      certsTitle: string;
      credentialBtn: string;
    };
    contact: {
      sectionNum: string;
      sectionTitle: string;
      sectionSubtitle: string;
      activeTag: string;
      directHeading: string;
      directTitle: string;
      directDesc: string;
      emailLabel: string;
      linkedinLabel: string;
      githubLabel: string;
      timezone: string;
      nameLabel: string;
      namePlaceholder: string;
      emailInputLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      privacyNote: string;
      successMsg: string;
    };
    footer: {
      sectionsCol: string;
      resourcesCol: string;
      connectCol: string;
      manifestoCol: string;
      manifestoDesc: string;
      downloadPdf: string;
      githubRepos: string;
      projectMetrics: string;
      backToTop: string;
      rights: string;
      availableHire: string;
      edition: string;
    };
  };
}

export type Language = 'en' | 'es';

export const cvDataMap: Record<Language, CVData> = {
  en: {
    personalInfo: {
      fullName: "JOAQUIN DIAZ SYROTINK",
      monogram: "JDS",
      headline: "FULL STACK DEVELOPER · PYTHON · DJANGO · FASTAPI · AI-POWERED SYSTEMS",
      campaignStatement: [
        "HIGH PERFORMANCE IN PRODUCTION.",
        "SYSTEM ARCHITECTURE",
        "& END-TO-END AUDITING."
      ],
      location: "Buenos Aires, Argentina",
      availability: "AVAILABLE FOR NEW PROFESSIONAL OPPORTUNITIES",
      email: "joaquindiazsyrotink@gmail.com",
      linkedin: "https://linkedin.com/in/joaquin-diaz-syrotink",
      github: "https://github.com/joaco844",
      currentStack: ["Python", "Django", "FastAPI", "SQL", "MariaDB", "JavaScript", "Linux"],
      about: [
        "Full Stack Developer specialized in Python, Django, and FastAPI, with experience building and troubleshooting production-grade systems for multiple concurrent clients in Legal Tech.",
        "Proven track record diagnosing performance issues end-to-end — from query-level fixes and N+1 resolution to platform-wide audits spanning ORM usage, background jobs, Gunicorn concurrency, and external service integrations — translating findings into prioritized, shippable improvements.",
        "Comfortable working independently under pressure, communicating across technical and non-technical stakeholders, and collaborating in fast-paced, team-oriented environments."
      ]
    },
    metrics: [
      { value: "-40%", label: "DJANGO RESPONSE TIMES (N+1 QUERY OPTIMIZATION)" },
      { value: "3 FIRMS", label: "CONCURRENT CLIENT LAW FIRMS ON LEGAL TECH PLATFORM" },
      { value: "+1,100", label: "AT-RISK CHILDREN IMPACTED (JPMORGAN CODE FOR GOOD)" },
      { value: "C1 ADV.", label: "CERTIFIED ENGLISH PROFICIENCY (EF SET · C2 LISTENING)" },
    ],
    experiences: [
      {
        id: "exp-mybig",
        role: "Full Stack Developer",
        company: "MyBiG",
        period: "JULY 2024 — PRESENT",
        location: "Buenos Aires, Argentina",
        summary: "Engineering and scalability of a shared SaaS Legal Tech platform for three concurrent client law firms.",
        achievements: [
          "Gathered and translated requirements from three concurrent client law firms into a shared Legal Tech platform, balancing client-specific workflows against a common architecture and codebase.",
          "Diagnosed and resolved N+1 query patterns and redundant configuration lookups in core Django views, cutting response times by 40% and easing load on high-traffic endpoints across the platform.",
          "Authored a platform-wide Django performance audit spanning views, ORM usage, background jobs, and observability — identifying root causes and delivering a prioritized, impact-ranked remediation plan.",
          "Collaborated with the team and clients on the functional design and implementation of 'Procuraduría Digital,' a new document-submission module — defining business rules, UI flows, and validation pop-ups together, then translating requirements into shippable features.",
          "Designed a usage-metrics data model and service layer, giving the team visibility into platform consumption by category to support billing and capacity decisions.",
          "Designed and implemented a task management system synchronized across internal modules, ensuring lawyers always see accurate, up-to-date task status regardless of which part of the platform they work from.",
          "Diagnosed worker-blocking incidents in a Gunicorn/Django production environment, tracing timeout cascades caused by external API calls without retry or timeout handling, and proposing fixes to prevent server-level failures."
        ],
        technologies: ["Python", "Django", "MariaDB", "SQL", "JavaScript", "jQuery", "Bootstrap", "Linux", "Gunicorn"]
      },
      {
        id: "exp-unsam",
        role: "IT Support Intern",
        company: "UNSAM (Universidad Nacional de San Martín)",
        period: "AUGUST 2023 — NOVEMBER 2023",
        location: "Buenos Aires, Argentina",
        summary: "Comprehensive technical support, computer infrastructure maintenance, and direct assistance to academic staff.",
        achievements: [
          "Configuration and repair of workstations and peripherals for academic staff.",
          "Direct user consultations for hardware, software, and networking troubleshooting.",
          "Organization and maintenance of technical inventory and hardware assets."
        ],
        technologies: ["Hardware", "Operating Systems", "Networking", "Troubleshooting", "Inventory"]
      }
    ],
    projects: [
      {
        id: "proj-space-dashboard",
        title: "SPACE DASHBOARD — NASA OPEN APIS",
        category: "FULL STACK & 3D SIMULATION",
        subtitle: "Interactive space exploration platform powered by NASA open data",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        promoBadge: "IN PRODUCTION",
        description: "Full-stack web application aggregating NASA's open data into 6 interactive sections: daily astronomy picture, near-Earth asteroid tracker, Mars Rover gallery, Earth climate visualization (CO₂ + satellite maps), Space Gallery with favorites and playlists, and an ISS live tracker with pass predictions. Built a 3D Solar System simulation with real Keplerian orbits and live JPL comet data.",
        metrics: "6 Interactive Modules · Three.js 3D Simulation · Live",
        technologies: ["Python", "Django", "JavaScript", "Three.js", "REST APIs", "Leaflet.js", "Chart.js", "Render"],
        demoUrl: "https://space-dashboard-yore.onrender.com",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-gitlab-ai",
        title: "GITLAB RELEASE SUMMARY — AI AUTOMATION",
        category: "AI-POWERED SYSTEMS & FASTAPI",
        subtitle: "Automated release notes generator powered by LLMs and GitLab API",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=900&q=80",
        promoBadge: "AI POWERED",
        description: "Tool that connects to any GitLab repository and automatically generates structured release notes from commit history using an LLM. Features one-click GitLab issue creation with the generated summary, streamlining release documentation workflows.",
        metrics: "1-Click GitLab Issue · Native LLM Integration",
        technologies: ["FastAPI", "Python", "python-gitlab", "LLMs", "GitLab API"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-jpmorgan-codeforgood",
        title: "DONATION PLATFORM — PATRONATO DE LA INFANCIA",
        category: "HACKATHON / JPMORGAN CHASE",
        subtitle: "Fundraising platform for an NGO supporting 1,100+ vulnerable children",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=900&q=80",
        promoBadge: "CODE FOR GOOD 2026",
        description: "Built a full-stack web platform end-to-end (solo full stack ownership) combining a public institutional site with a secure authenticated donor area. Designed relational data models (User, Project, Category, Donation, Frequency), donor dashboard with Chart.js, and donation flow with card-number validation (Luhn algorithm) ensuring sensitive payment data was never persisted.",
        metrics: "+1,100 Children Impacted · Luhn Algorithm",
        technologies: ["Python", "Django", "SQLite", "JavaScript", "Chart.js", "HTML/CSS"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-testing-automation",
        title: "TESTING LIFECYCLE AUTOMATION",
        category: "QA & TEST AUTOMATION",
        subtitle: "Regression testing automation framework built at UADE",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
        promoBadge: "QA AUTOMATION",
        description: "Automated test scripts with Selenium to optimize regression testing, increasing iteration velocity and ensuring full requirements coverage with structured defect documentation to accelerate remediation cycles.",
        metrics: "Accelerated Regression Runs · Full Coverage",
        technologies: ["Python", "Selenium", "Regression Testing", "Defect Tracking"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844"
      }
    ],
    skillCategories: [
      {
        title: "BACKEND & FRAMEWORKS",
        skills: ["Python", "Django", "FastAPI", "Gunicorn", "REST APIs", "Service Architecture"]
      },
      {
        title: "DATABASES & PERFORMANCE",
        skills: ["MariaDB", "MySQL", "SQL Optimization", "Indexing Strategy", "N+1 Query Resolution", "Production Profiling (pyinstrument)", "Django Debug Toolbar"]
      },
      {
        title: "FRONTEND & VISUALIZATION",
        skills: ["JavaScript", "jQuery", "HTML5 / CSS3", "Bootstrap", "Three.js", "Chart.js", "Leaflet.js"]
      },
      {
        title: "TOOLS, CLOUD & QA",
        skills: ["Git", "GitHub", "Linux", "Docker", "Selenium", "Postman", "Render", "Generative AI Tools (Claude Code, ChatGPT)"]
      }
    ],
    education: [
      {
        id: "edu-uade",
        degree: "B.Sc. in Information Technology Management",
        institution: "UADE — Universidad Argentina de la Empresa (Buenos Aires)",
        period: "2025 — PRESENT",
        description: "Undergraduate degree focusing on IT strategic management, enterprise software architecture, data modeling, and engineering leadership."
      },
      {
        id: "edu-politecnico",
        degree: "Computer Technician (Técnico en Computación)",
        institution: "Instituto Politécnico Modelo (Buenos Aires)",
        period: "2018 — 2023",
        description: "Comprehensive 6-year technical degree in computer architecture, networking, algorithm fundamentals, and software development."
      }
    ],
    certifications: [
      {
        id: "cert-efset",
        title: "EF SET English Certificate — C1 Advanced",
        issuer: "EF Education First",
        year: "2026",
        details: "Score: 63/100 (Reading: C1 · Listening: C2)",
        link: "https://cert.efset.org/3GPEHs"
      },
      {
        id: "cert-sql",
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        year: "2026",
        details: "Complex relational queries, indexing, and MySQL performance"
      },
      {
        id: "cert-rest",
        title: "Rest API (Intermediate)",
        issuer: "HackerRank",
        year: "2026",
        details: "RESTful architecture, API management, and Python endpoints"
      },
      {
        id: "cert-swe",
        title: "Software Engineer Intern",
        issuer: "HackerRank",
        year: "2026",
        details: "Algorithmic problem solving, Python, and SQL optimization"
      },
      {
        id: "cert-scrum",
        title: "Essential Scrum",
        issuer: "Scrum Alliance / Certiprof",
        year: "2026",
        details: "Agile methodologies, sprint cadences, and team deliverables"
      },
      {
        id: "cert-ibm-design",
        title: "Enterprise Design Thinking Practitioner",
        issuer: "IBM",
        year: "2026",
        details: "User-centered design principles, stakeholder alignment, problem solving"
      },
      {
        id: "cert-ibm-cyber",
        title: "Cybersecurity Fundamentals",
        issuer: "IBM",
        year: "2026",
        details: "Cyber risk management, threat analysis, security strategies"
      }
    ],
    languages: [
      {
        language: "Spanish",
        level: "Native"
      },
      {
        language: "English",
        level: "C1 Advanced",
        certification: "EF SET Certificate (Score: 63/100 · Listening: C2)"
      }
    ],
    ui: {
      nav: {
        about: "ABOUT",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        skills: "SKILLS",
        education: "EDUCATION",
        contact: "CONTACT",
        searchPlaceholder: "Search skill or role...",
        contactBtn: "CONTACT"
      },
      hero: {
        tag: "CURRICULUM VITAE & PORTFOLIO 2026",
        exploreBtn: "EXPLORE PROJECTS",
        downloadPdfBtn: "DOWNLOAD RESUME (PDF)"
      },
      about: {
        sectionNum: "01",
        sectionTitle: "ABOUT & PHILOSOPHY",
        sectionSubtitle: "PROFESSIONAL PROFILE · TECHNICAL VISION",
        performanceTitle: "PERFORMANCE-DRIVEN",
        performanceDesc: "Relentless focus on database latency, ORM query patterns (N+1 resolution), and critical request lifecycles.",
        robustnessTitle: "ROBUSTNESS & SCALE",
        robustnessDesc: "Production-grade resilience, Gunicorn concurrency diagnosis, and strict testing with Selenium.",
        specTitle: "TECHNICAL SPECS",
        locationLabel: "LOCATION:",
        statusLabel: "STATUS:",
        statusValue: "AVAILABLE",
        modalityLabel: "MODALITY:",
        modalityValue: "REMOTE / HYBRID",
        stackLabel: "CORE STACK:"
      },
      experience: {
        sectionNum: "02",
        sectionTitle: "WORK EXPERIENCE",
        sectionSubtitle: "ROLES · RESPONSIBILITIES · MEASURABLE IMPACT",
        achievementsTitle: "KEY DELIVERABLES & IMPACT",
        techTitle: "APPLIED TECHNOLOGIES",
        achievementsCountSuffix: "DELIVERABLES"
      },
      projects: {
        sectionNum: "03",
        sectionTitle: "SELECTED PROJECTS",
        sectionSubtitle: "ENGINEERING CATALOGUE",
        deliveriesCount: "REGISTERED PROJECTS",
        allFilter: "ALL",
        demoBtn: "LIVE DEMO",
        repoBtn: "CODE",
        noResults: "No projects found matching query",
        viewAllBtn: "VIEW ALL PROJECTS",
        techsCountSuffix: "TECHS"
      },
      skills: {
        sectionNum: "04",
        sectionTitle: "COMPETENCIES & TECHNICAL STACK",
        sectionSubtitle: "FRAMEWORKS · DATABASE PERFORMANCE · INFRASTRUCTURE",
        tag: "MODERN ECOSYSTEM",
        footerTag: "PRODUCTION PROFICIENCY"
      },
      education: {
        sectionNum: "05",
        sectionTitle: "EDUCATION, CERTIFICATIONS & LANGUAGES",
        sectionSubtitle: "ACADEMIC DEGREES · VERIFIED CREDENTIALS · LANGUAGES",
        verifiedTag: "VERIFIED RECORD",
        academicTitle: "ACADEMIC BACKGROUND",
        languagesTitle: "LANGUAGES",
        certsTitle: "PROFESSIONAL CERTIFICATIONS",
        credentialBtn: "CREDENTIAL"
      },
      contact: {
        sectionNum: "06",
        sectionTitle: "CONTACT & CONNECT",
        sectionSubtitle: "PROFESSIONAL INQUIRIES · HIGH-IMPACT OPPORTUNITIES",
        activeTag: "CHANNELS ACTIVE",
        directHeading: "DIRECT INQUIRIES",
        directTitle: "LET'S BUILD YOUR NEXT SYSTEM.",
        directDesc: "Always open to evaluating high-leverage engineering challenges, strategic backend roles, or innovative product ventures.",
        emailLabel: "PRIMARY EMAIL",
        linkedinLabel: "PROFESSIONAL NETWORK",
        githubLabel: "CODE REPOSITORIES (GITHUB)",
        timezone: "TIME ZONE: GMT-3 (BUENOS AIRES) · ESTIMATED RESPONSE: < 24H",
        nameLabel: "YOUR NAME *",
        namePlaceholder: "e.g. John Doe",
        emailInputLabel: "YOUR EMAIL *",
        emailPlaceholder: "example@company.com",
        subjectLabel: "SUBJECT OR PURPOSE",
        subjectPlaceholder: "Job Proposal / Project Inquiry / Greeting",
        messageLabel: "MESSAGE *",
        messagePlaceholder: "Describe your proposal, project, or technical requirements...",
        submitBtn: "SEND DIRECT MESSAGE",
        privacyNote: "PRIVACY GUARANTEED · NO SPAM",
        successMsg: "MESSAGE PREPARED. REDIRECTING TO YOUR EMAIL CLIENT..."
      },
      footer: {
        sectionsCol: "SECTIONS",
        resourcesCol: "RESOURCES",
        connectCol: "CONNECT",
        manifestoCol: "DIGITAL ENGINEERING",
        manifestoDesc: "Minimalist editorial system showcasing professional trajectory and production-grade software.",
        downloadPdf: "Download Resume as PDF",
        githubRepos: "Repositories on GitHub",
        projectMetrics: "Project Metrics",
        backToTop: "BACK TO TOP",
        rights: "ALL RIGHTS RESERVED.",
        availableHire: "AVAILABLE FOR HIRE",
        edition: "EDITION 2026"
      }
    }
  },
  es: {
    personalInfo: {
      fullName: "JOAQUIN DIAZ SYROTINK",
      monogram: "JDS",
      headline: "FULL STACK DEVELOPER · PYTHON · DJANGO · FASTAPI · AI-POWERED SYSTEMS",
      campaignStatement: [
        "ALTO RENDIMIENTO EN PRODUCCIÓN.",
        "DISEÑO DE SISTEMAS",
        "Y AUDITORÍA END-TO-END."
      ],
      location: "Buenos Aires, Argentina",
      availability: "DISPONIBLE PARA NUEVAS OPORTUNIDADES PROFESIONALES",
      email: "joaquindiazsyrotink@gmail.com",
      linkedin: "https://linkedin.com/in/joaquin-diaz-syrotink",
      github: "https://github.com/joaco844",
      currentStack: ["Python", "Django", "FastAPI", "SQL", "MariaDB", "JavaScript", "Linux"],
      about: [
        "Full Stack Developer especializado en Python, Django y FastAPI, con probada experiencia construyendo y optimizando sistemas de grado de producción para múltiples clientes simultáneos en el sector Legal Tech.",
        "Sólido historial diagnosticando y resolviendo problemas de rendimiento de punta a punta: desde optimización de consultas SQL y resolución de patrones N+1, hasta auditorías integrales de plataforma que abarcan consumo de ORM, tareas en segundo plano, concurrencia en Gunicorn e integraciones con servicios externos.",
        "Capacidad comprobada para trabajar con autonomía bajo presión, articulando requisitos entre partes interesadas técnicas y de negocio, y colaborando activamente en equipos dinámicos orientados a entregables de alto impacto."
      ]
    },
    metrics: [
      { value: "-40%", label: "TIEMPOS DE RESPUESTA EN DJANGO (OPTIMIZACIÓN N+1)" },
      { value: "3 FIRMAS", label: "CLIENTES CONCURRENTES EN PLATAFORMA LEGAL TECH" },
      { value: "+1,100", label: "NIÑOS BENEFICIADOS (CODE FOR GOOD JPMORGAN)" },
      { value: "C1 ADV.", label: "NIVEL DE INGLÉS CERTIFICADO (EF SET · C2 LISTENING)" },
    ],
    experiences: [
      {
        id: "exp-mybig",
        role: "Full Stack Developer",
        company: "MyBiG",
        period: "JULIO 2024 — PRESENTE",
        location: "Buenos Aires, Argentina",
        summary: "Desarrollo y optimización de arquitectura de plataforma SaaS en Legal Tech compartida por tres firmas de abogados clientes concurrentes.",
        achievements: [
          "Relevamiento y traducción de requerimientos de tres firmas de abogados clientes hacia una plataforma compartida de Legal Tech, equilibrando flujos de trabajo específicos con una arquitectura y base de código común.",
          "Diagnóstico y resolución de patrones de consulta N+1 y búsquedas redundantes en vistas centrales de Django, reduciendo tiempos de respuesta en un 40% y aliviando la carga en endpoints de alto tráfico.",
          "Autoría de una auditoría integral de rendimiento en Django abarcando vistas, ORM, background jobs y observabilidad, entregando un plan de remediación priorizado por impacto.",
          "Colaboración con el equipo y clientes en el diseño funcional e implementación de 'Procuraduría Digital' (módulo de presentación de escritos), definiendo reglas de negocio, flujos de UI y validaciones.",
          "Diseño del modelo de datos y capa de servicios para métricas de uso de la plataforma, brindando visibilidad por categoría para toma de decisiones de facturación y capacidad.",
          "Diseño e implementación de un sistema de gestión de tareas sincronizado entre módulos internos, garantizando a los abogados visibilidad de estado en tiempo real sin importar el módulo donde operen.",
          "Diagnóstico de incidentes de bloqueo de workers en producción Gunicorn/Django causados por cascadas de timeout en llamadas a APIs externas sin política de reintentos, proponiendo soluciones preventivas."
        ],
        technologies: ["Python", "Django", "MariaDB", "SQL", "JavaScript", "jQuery", "Bootstrap", "Linux", "Gunicorn"]
      },
      {
        id: "exp-unsam",
        role: "IT Support Intern",
        company: "UNSAM (Universidad Nacional de San Martín)",
        period: "AGOSTO 2023 — NOVIEMBRE 2023",
        location: "Buenos Aires, Argentina",
        summary: "Soporte técnico integral para equipamiento e infraestructura informática del personal docente y académico.",
        achievements: [
          "Configuración, diagnóstico y reparación de estaciones de trabajo y periféricos para el equipo académico.",
          "Atención y resolución directa de incidencias de hardware, software y conectividad en entornos multiusuario.",
          "Organización, mantenimiento y control del inventario técnico informático."
        ],
        technologies: ["Hardware", "Sistemas Operativos", "Redes / Networking", "Troubleshooting", "Inventario"]
      }
    ],
    projects: [
      {
        id: "proj-space-dashboard",
        title: "SPACE DASHBOARD — NASA OPEN APIS",
        category: "FULL STACK & 3D SIMULATION",
        subtitle: "Plataforma interactiva de exploración espacial con datos de la NASA",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        promoBadge: "EN PRODUCCIÓN",
        description: "Aplicación web que centraliza datos abiertos de NASA en 6 módulos interactivos: foto astronómica diaria, rastreador de asteroides cercanos, galería de Mars Rover, visualización climática (CO₂ y mapas satelitales) y rastreador en vivo de la ISS con predicción de pasos. Integra simulación 3D del Sistema Solar con órbitas keplerianas y datos de cometas en vivo de JPL.",
        metrics: "6 Módulos · Simulación 3D Three.js · En vivo",
        technologies: ["Python", "Django", "JavaScript", "Three.js", "REST APIs", "Leaflet.js", "Chart.js", "Render"],
        demoUrl: "https://space-dashboard-yore.onrender.com",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-gitlab-ai",
        title: "GITLAB RELEASE SUMMARY — AI AUTOMATION",
        category: "AI-POWERED SYSTEMS & FASTAPI",
        subtitle: "Automatización de notas de versión con LLMs y GitLab API",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=900&q=80",
        promoBadge: "AI POWERED",
        description: "Herramienta que se conecta a repositorios de GitLab y genera notas de lanzamiento estructuradas analizando el historial de commits mediante Modelos de Lenguaje (LLMs). Permite crear issues de GitLab con el resumen generado con un solo clic, acelerando el flujo de documentación.",
        metrics: "1-Click GitLab Issue · Integración LLM Nativa",
        technologies: ["FastAPI", "Python", "python-gitlab", "LLMs", "GitLab API"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-jpmorgan-codeforgood",
        title: "DONATION PLATFORM — PATRONATO DE LA INFANCIA",
        category: "HACKATHON / JPMORGAN CHASE",
        subtitle: "Plataforma para ONG beneficiando a +1,100 niños vulnerables",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=900&q=80",
        promoBadge: "CODE FOR GOOD 2026",
        description: "Desarrollo integral de plataforma web (solo full stack ownership en el equipo) combinando portal institucional público con área autenticada de donantes. Modelo de datos relacional (Usuario, Proyecto, Categoría, Donación, Frecuencia), dashboard con Chart.js y pasarela segura con validación de tarjetas por algoritmo de Luhn sin persistir datos sensibles.",
        metrics: "+1,100 Niños Beneficiados · Algoritmo de Luhn",
        technologies: ["Python", "Django", "SQLite", "JavaScript", "Chart.js", "HTML/CSS"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-testing-automation",
        title: "TESTING LIFECYCLE AUTOMATION",
        category: "QA & TEST AUTOMATION",
        subtitle: "Framework de automatización de pruebas de regresión en UADE",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
        promoBadge: "QA AUTOMATION",
        description: "Scripts automatizados desarrollados con Selenium para optimizar pruebas de regresión, aumentando la velocidad de iteración y asegurando cobertura exhaustiva de casos de uso y estabilidad de plataforma, con registro estructurado de evidencias de defectos.",
        metrics: "Mayor Velocidad de Iteración · Cobertura Total",
        technologies: ["Python", "Selenium", "Regression Testing", "Defect Tracking"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844"
      }
    ],
    skillCategories: [
      {
        title: "BACKEND & FRAMEWORKS",
        skills: ["Python", "Django", "FastAPI", "Gunicorn", "REST APIs", "Arquitectura de Servicios"]
      },
      {
        title: "BASES DE DATOS & PERFORMANCE",
        skills: ["MariaDB", "MySQL", "Optimización SQL", "Estrategias de Indexación", "Resolución de N+1", "Profiling (pyinstrument)", "Django Debug Toolbar"]
      },
      {
        title: "FRONTEND & VISUALIZACIÓN",
        skills: ["JavaScript", "jQuery", "HTML5 / CSS3", "Bootstrap", "Three.js", "Chart.js", "Leaflet.js"]
      },
      {
        title: "HERRAMIENTAS, CLOUD & QA",
        skills: ["Git", "GitHub", "Linux", "Docker", "Selenium", "Postman", "Render", "AI Tooling (Claude Code, ChatGPT)"]
      }
    ],
    education: [
      {
        id: "edu-uade",
        degree: "Licenciatura en Gestión de Tecnología de la Información (B.Sc. IT Management)",
        institution: "UADE — Universidad Argentina de la Empresa (Buenos Aires)",
        period: "2025 — PRESENTE",
        description: "Formación de grado en gestión estratégica de tecnología, arquitectura de software empresarial, modelado de datos y liderazgo de proyectos tecnológicos."
      },
      {
        id: "edu-politecnico",
        degree: "Técnico en Computación (Computer Technician)",
        institution: "Instituto Politécnico Modelo (Buenos Aires)",
        period: "2018 — 2023",
        description: "Formación técnica de 6 años especializada en arquitectura de computadoras, redes, fundamentos algorítmicos y desarrollo de software."
      }
    ],
    certifications: [
      {
        id: "cert-efset",
        title: "EF SET English Certificate — C1 Advanced",
        issuer: "EF Education First",
        year: "2026",
        details: "Puntuación: 63/100 (Lectura C1 · Escucha C2)",
        link: "https://cert.efset.org/3GPEHs"
      },
      {
        id: "cert-sql",
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        year: "2026",
        details: "Consultas complejas, optimización relacional y diseño en MySQL"
      },
      {
        id: "cert-rest",
        title: "Rest API (Intermediate)",
        issuer: "HackerRank",
        year: "2026",
        details: "Diseño y consumo de APIs RESTful en Python"
      },
      {
        id: "cert-swe",
        title: "Software Engineer Intern",
        issuer: "HackerRank",
        year: "2026",
        details: "Resolución de problemas algorítmicos, Python y SQL"
      },
      {
        id: "cert-scrum",
        title: "Essential Scrum",
        issuer: "Scrum Alliance / Certiprof",
        year: "2026",
        details: "Metodologías ágiles y gestión iterativa de proyectos de software"
      },
      {
        id: "cert-ibm-design",
        title: "Enterprise Design Thinking Practitioner",
        issuer: "IBM",
        year: "2026",
        details: "Metodología de diseño centrado en el usuario y alineación de equipos"
      },
      {
        id: "cert-ibm-cyber",
        title: "Cybersecurity Fundamentals",
        issuer: "IBM",
        year: "2026",
        details: "Gestión de riesgos, análisis de amenazas y estrategias de seguridad"
      }
    ],
    languages: [
      {
        language: "Español",
        level: "Nativo"
      },
      {
        language: "Inglés",
        level: "C1 Advanced",
        certification: "EF SET Certificate (Puntaje: 63/100 · Escucha: C2)"
      }
    ],
    ui: {
      nav: {
        about: "SOBRE MÍ",
        experience: "EXPERIENCIA",
        projects: "PROYECTOS",
        skills: "HABILIDADES",
        education: "EDUCACIÓN",
        contact: "CONTACTO",
        searchPlaceholder: "Buscar habilidad o rol...",
        contactBtn: "CONTACTAR"
      },
      hero: {
        tag: "CURRÍCULUM VITAE & PORTFOLIO 2026",
        exploreBtn: "EXPLORAR PROYECTOS",
        downloadPdfBtn: "DESCARGAR RESUMEN (PDF)"
      },
      about: {
        sectionNum: "01",
        sectionTitle: "SOBRE MÍ & FILOSOFÍA",
        sectionSubtitle: "PERFIL PROFESIONAL · VISIÓN TÉCNICA",
        performanceTitle: "ENFOQUE EN PERFORMANCE",
        performanceDesc: "Optimización profunda de consultas a base de datos, resolución de patrones N+1 y ciclo de vida de peticiones críticas.",
        robustnessTitle: "ROBUSTEZ & ESCALA",
        robustnessDesc: "Resiliencia en producción, diagnóstico de concurrencia en Gunicorn y testing exhaustivo con Selenium.",
        specTitle: "FICHA TÉCNICA",
        locationLabel: "UBICACIÓN:",
        statusLabel: "STATUS:",
        statusValue: "DISPONIBLE",
        modalityLabel: "MODALIDAD:",
        modalityValue: "REMOTO / HÍBRIDO",
        stackLabel: "CORE STACK:"
      },
      experience: {
        sectionNum: "02",
        sectionTitle: "TRAYECTORIA & EXPERIENCIA",
        sectionSubtitle: "ROLES · RESPONSABILIDADES · IMPACTO CUANTIFICADO",
        achievementsTitle: "LOGROS PRINCIPALES & ENTREGAS",
        techTitle: "TECNOLOGÍAS APLICADAS",
        achievementsCountSuffix: "LOGROS"
      },
      projects: {
        sectionNum: "03",
        sectionTitle: "PROYECTOS SELECCIONADOS",
        sectionSubtitle: "CATÁLOGO DE INGENIERÍA",
        deliveriesCount: "ENTREGAS REGISTRADAS",
        allFilter: "TODOS",
        demoBtn: "DEMO EN VIVO",
        repoBtn: "CÓDIGO",
        noResults: "No se encontraron proyectos con el criterio de búsqueda",
        viewAllBtn: "VER TODOS LOS PROYECTOS",
        techsCountSuffix: "TECHS"
      },
      skills: {
        sectionNum: "04",
        sectionTitle: "COMPETENCIAS & STACK TÉCNICO",
        sectionSubtitle: "FRAMEWORKS · RENDIMIENTO DE BASE DE DATOS · INFRAESTRUCTURA",
        tag: "ECOSISTEMA MODERNO",
        footerTag: "DOMINIO PROFESIONAL"
      },
      education: {
        sectionNum: "05",
        sectionTitle: "FORMACIÓN, CERTIFICACIONES & IDIOMAS",
        sectionSubtitle: "ESTUDIOS UNIVERSITARIOS · CREDENCIALES VERIFICADAS · IDIOMAS",
        verifiedTag: "HISTORIAL VERIFICADO",
        academicTitle: "ESTUDIOS ACADÉMICOS",
        languagesTitle: "IDIOMAS",
        certsTitle: "CERTIFICACIONES PROFESIONALES",
        credentialBtn: "CREDENCIAL"
      },
      contact: {
        sectionNum: "06",
        sectionTitle: "CONTACTO & CONEXIÓN",
        sectionSubtitle: "CONVERSACIONES PROFESIONALES · OPORTUNIDADES LABORALES",
        activeTag: "CANALES ACTIVOS",
        directHeading: "COMUNICACIÓN DIRECTA",
        directTitle: "HABLEMOS DE TU PRÓXIMO PROYECTO.",
        directDesc: "Siempre abierto a evaluar desafíos de ingeniería complejos, posiciones estratégicas o proyectos innovadores de alto impacto.",
        emailLabel: "EMAIL PRINCIPAL",
        linkedinLabel: "RED PROFESIONAL",
        githubLabel: "REPOSITORIOS & CÓDIGO (GITHUB)",
        timezone: "ZONA HORARIA: GMT-3 (BUENOS AIRES) · RESPUESTA ESTIMADA: < 24HS",
        nameLabel: "TU NOMBRE *",
        namePlaceholder: "Ej: Martín Rodríguez",
        emailInputLabel: "TU CORREO ELECTRÓNICO *",
        emailPlaceholder: "ejemplo@empresa.com",
        subjectLabel: "ASUNTO O PROPÓSITO",
        subjectPlaceholder: "Propuesta laboral / Consulta de proyecto / Saludo",
        messageLabel: "MENSAJE *",
        messagePlaceholder: "Describe tu propuesta, proyecto o requerimiento técnico...",
        submitBtn: "ENVIAR MENSAJE DIRECTO",
        privacyNote: "PRIVACIDAD GARANTIZADA · SIN SPAM",
        successMsg: "MENSAJE PREPARED. REDIRIGIENDO AL CLIENTE DE CORREO..."
      },
      footer: {
        sectionsCol: "SECCIONES",
        resourcesCol: "RECURSOS",
        connectCol: "CONEXIÓN",
        manifestoCol: "INGENIERÍA DIGITAL",
        manifestoDesc: "Sistema editorial minimalista para exhibición de trayectoria profesional y código de producción.",
        downloadPdf: "Descargar CV en PDF",
        githubRepos: "Repositorios en GitHub",
        projectMetrics: "Métricas de Proyectos",
        backToTop: "VOLVER AL INICIO",
        rights: "TODOS LOS DERECHOS RESERVADOS.",
        availableHire: "DISPONIBLE PARA CONTRATACIÓN",
        edition: "EDICIÓN 2026"
      }
    }
  }
};
