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
    gitlab: string;
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
      gitlabLabel: string;
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
      gitlabRepos: string;
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
      headline: "SOFTWARE DEVELOPER · PYTHON · DJANGO · FASTAPI · BACKEND & PERFORMANCE",
      campaignStatement: [
        "HIGH PERFORMANCE IN PRODUCTION.",
        "BACKEND ARCHITECTURE",
        "& SYSTEM OPTIMIZATION."
      ],
      location: "Buenos Aires, Argentina",
      availability: "AVAILABLE FOR ROLES & HIGH-IMPACT PROJECTS",
      email: "joaquindiazsyrotink@gmail.com",
      linkedin: "https://linkedin.com/in/joaquin-diaz-syrotink",
      github: "https://github.com/joaco844",
      gitlab: "https://gitlab.com/joaco_diaz",
      currentStack: ["Python", "Django", "FastAPI", "SQL", "Gunicorn", "Celery", "PostgreSQL", "Docker", "Linux"],
      about: [
        "Software Developer specialized in Python, Django, FastAPI, and high-performance backend architectures. Hands-on experience diagnosing and resolving production bottlenecks in multi-tenant SaaS platforms (ORM optimization, N+1 query elimination, redundant lookups, and Gunicorn worker lockup mitigation).",
        "Proven track record designing scalable relational schemas, transactional service layers, and asynchronous task workflows with Celery, bridging engineering rigor with strategic business deliverables.",
        "Comfortable working with technical leadership and cross-functional teams, handling mission-critical production incidents under pressure, and delivering clean, well-tested solutions."
      ]
    },
    metrics: [
      { value: "-40%", label: "DJANGO RESPONSE TIMES (N+1 QUERY OPTIMIZATION)" },
      { value: "+1,100", label: "AT-RISK CHILDREN IMPACTED (JPMORGAN CHASE)" },
      { value: "6 APIS", label: "NASA OPEN APIS & THREE.JS 3D SIMULATION" },
      { value: "C1 ADV.", label: "CERTIFIED ENGLISH PROFICIENCY (EF SET 63/100)" },
    ],
    experiences: [
      {
        id: "exp-mybig",
        role: "Full Stack Software Developer",
        company: "MyBiG",
        period: "JULY 2024 — PRESENT",
        location: "Buenos Aires, Argentina",
        summary: "Backend architecture engineering, ORM optimization, and core service layers for a multi-firm Legal Tech platform.",
        achievements: [
          "Diagnosed and resolved N+1 query patterns, redundant lookups, and unindexed queries in core Django/ORM views, reducing response times by 40% and easing database load during traffic spikes.",
          "Investigated and resolved critical worker-blocking incidents in Gunicorn/Django production environments caused by timeout cascades from external APIs; designed retry logic, strict timeouts, and asynchronous tasks.",
          "Led the technical development of 'Procuraduría Digital' (automated document submission module), applying OOP design patterns to ensure strict validation and transactional consistency across client law firms.",
          "Designed scalable relational schemas and service layers for platform usage metrics and cross-module task synchronization, providing consumption visibility for billing and infrastructure decisions.",
          "Authored a comprehensive Django platform performance audit (ORM, observability, and background jobs), delivering a prioritized technical debt remediation plan to technical leadership."
        ],
        technologies: ["Python", "Django", "Gunicorn", "Celery", "MariaDB", "SQL", "RESTful APIs", "Async Processing"]
      },
      {
        id: "exp-unsam",
        role: "IT Support Intern",
        company: "Universidad Nacional de San Martín (UNSAM)",
        period: "AUGUST 2023 — NOVEMBER 2023",
        location: "Buenos Aires, Argentina",
        summary: "Preventive maintenance, user troubleshooting, and infrastructure support for academic staff.",
        achievements: [
          "Preventive maintenance, diagnosis, and incident resolution across hardware, software, and network connectivity for over 100 academic staff users, optimizing technical inventory management."
        ],
        technologies: ["Hardware", "Software", "Networking", "Troubleshooting", "Technical Inventory"]
      }
    ],
    projects: [
      {
        id: "proj-jpmorgan-codeforgood",
        title: "CODE FOR GOOD 2026 (JPMORGAN CHASE) — DONATION PLATFORM",
        category: "HACKATHON / JPMORGAN CHASE",
        subtitle: "Django, Chart.js, SQLite · Aug 2026",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=900&q=80",
        promoBadge: "CODE FOR GOOD 2026",
        description: "Designed and implemented an end-to-end platform for Patronato de la Infancia (an NGO assisting 1,100+ vulnerable children), featuring donor authentication, a real-time analytics dashboard with Chart.js, and a catalog of 10 social initiatives. Implemented a secure donation flow with client-side card validation using the Luhn algorithm, ensuring zero persistence of sensitive financial credentials.",
        metrics: "+1,100 Children Impacted · Luhn Card Validation",
        technologies: ["Django", "Python", "Chart.js", "SQLite", "Luhn Algorithm", "HTML5/CSS3"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-space-dashboard",
        title: "SPACE DASHBOARD — NASA OPEN APIS EXPLORER",
        category: "FULL STACK & 3D SIMULATION",
        subtitle: "space-dashboard-yore.onrender.com · May 2026 – Present",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        promoBadge: "LIVE IN PRODUCTION",
        description: "Full-stack web application consuming 6 open NASA APIs (APOD, near-Earth asteroids, Mars rover, weather, and ISS tracker), integrating an interactive 3D Solar System simulation with Keplerian orbits powered by Three.js.",
        metrics: "6 Open NASA APIs · Three.js 3D Simulation · Docker",
        technologies: ["Python", "Django", "JavaScript", "Three.js", "REST APIs", "Leaflet.js", "Chart.js", "Docker", "Render"],
        demoUrl: "https://space-dashboard-yore.onrender.com",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-gitlab-ai",
        title: "GITLAB RELEASE SUMMARY — AI AUTOMATION",
        category: "AI & MICROSERVICES",
        subtitle: "FastAPI, python-gitlab, LLMs · Mar 2026 – Present",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=900&q=80",
        promoBadge: "AI INTEGRATION",
        description: "Microservice connecting via API to GitLab repositories, analyzing commit histories and automatically generating structured release notes using LLMs, streamlining release documentation with 1-click issue creation.",
        metrics: "FastAPI Microservice · LLM Summaries · 1-Click Issues",
        technologies: ["FastAPI", "Python", "python-gitlab", "LLMs", "GitLab API", "RESTful APIs"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      }
    ],
    skillCategories: [
      {
        title: "PROGRAMMING LANGUAGES",
        skills: ["Python (Advanced)", "SQL (Intermediate)", "Java (OOP Fundamentals)", "JavaScript (ES6+)", "HTML5/CSS3"]
      },
      {
        title: "BACKEND & ARCHITECTURE",
        skills: ["Django", "FastAPI", "RESTful APIs", "Gunicorn", "Celery", "ORM Optimization (N+1)", "Asynchronous Processing"]
      },
      {
        title: "DATABASES & DEVOPS",
        skills: ["MariaDB", "MySQL", "PostgreSQL", "Docker", "Git", "GitLab CI/CD", "Linux (Ubuntu/Debian)", "Postman"]
      },
      {
        title: "PERFORMANCE & DIAGNOSTICS",
        skills: ["N+1 Query Resolution", "Worker Lockup Mitigation", "Production Profiling (pyinstrument)", "Strict Timeout Policies", "Transactional OOP Consistency"]
      }
    ],
    education: [
      {
        id: "edu-uade",
        degree: "B.Sc. in Information Technology Management (Licenciatura en Gestión de TI)",
        institution: "UADE — Universidad Argentina de la Empresa (Buenos Aires, Argentina)",
        period: "2025 — PRESENT",
        description: "Undergraduate degree focusing on IT strategic management, enterprise software architecture, data modeling, and technology leadership."
      },
      {
        id: "edu-politecnico",
        degree: "Computer Technician (Técnico en Computación)",
        institution: "Instituto Politécnico Modelo (Buenos Aires, Argentina)",
        period: "2018 — 2023",
        description: "6-year comprehensive technical degree covering programming logic, relational databases, networking, hardware architecture, and systems."
      }
    ],
    certifications: [
      {
        id: "cert-efset",
        title: "EF SET English Certificate — C1 Advanced",
        issuer: "EF Standard English Test",
        year: "2026",
        details: "Score: 63/100 · Full Professional Proficiency (cert.efset.org/3GPEHs)",
        link: "https://cert.efset.org/3GPEHs"
      },
      {
        id: "cert-sql",
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        year: "2026",
        details: "Complex relational queries, indexing strategy, and database performance",
        link: "https://www.hackerrank.com/certificates"
      },
      {
        id: "cert-rest",
        title: "Rest API (Intermediate)",
        issuer: "HackerRank",
        year: "2026",
        details: "RESTful architecture, API management, and service endpoints",
        link: "https://www.hackerrank.com/certificates"
      }
    ],
    languages: [
      {
        language: "Spanish",
        level: "Native"
      },
      {
        language: "English",
        level: "C1 Advanced / Full Professional Proficiency",
        certification: "EF SET Score: 63/100 · cert.efset.org/3GPEHs"
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
        searchPlaceholder: "Search skill, project or role...",
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
        performanceDesc: "Relentless focus on database latency, ORM query patterns (N+1 resolution), unindexed query elimination, and critical request lifecycles.",
        robustnessTitle: "ROBUSTNESS & SCALE",
        robustnessDesc: "Production-grade resilience, Gunicorn concurrency diagnosis, timeout cascade prevention, and strict asynchronous processing.",
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
        sectionTitle: "SELECTED PROJECTS & HACKATHONS",
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
        sectionTitle: "TECHNICAL SKILLS & CERTIFICATIONS",
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
        gitlabLabel: "REPOSITORIES & CI/CD (GITLAB)",
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
        gitlabRepos: "Projects on GitLab",
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
      headline: "DESARROLLADOR DE SOFTWARE · PYTHON · DJANGO · FASTAPI · BACKEND & PERFORMANCE",
      campaignStatement: [
        "ALTO RENDIMIENTO EN PRODUCCIÓN.",
        "ARQUITECTURA BACKEND",
        "& OPTIMIZACIÓN DE SISTEMAS."
      ],
      location: "Buenos Aires, Argentina",
      availability: "DISPONIBLE PARA OPORTUNIDADES LABORALES Y PROYECTOS DE ALTO IMPACTO",
      email: "joaquindiazsyrotink@gmail.com",
      linkedin: "https://linkedin.com/in/joaquin-diaz-syrotink",
      github: "https://github.com/joaco844",
      gitlab: "https://gitlab.com/joaco_diaz",
      currentStack: ["Python", "Django", "FastAPI", "SQL", "Gunicorn", "Celery", "PostgreSQL", "Docker", "Linux"],
      about: [
        "Desarrollador de Software especializado en Python, Django, FastAPI y arquitecturas backend de alto rendimiento. Experiencia directa diagnosticando y resolviendo cuellos de botella en producción para plataformas multi-tenant (optimización de ORM, resolución de consultas N+1, lookups redundantes y mitigación de bloqueos en Gunicorn).",
        "Sólida capacidad para diseñar esquemas relacionales escalables, capas de servicios transaccionales y flujos de tareas asíncronas con Celery, combinando rigor de ingeniería con entregables estratégicos de negocio.",
        "Experiencia colaborando con líderes técnicos y equipos multidisciplinarios, gestionando incidentes críticos en producción bajo presión y entregando código limpio, testeado y mantenible."
      ]
    },
    metrics: [
      { value: "-40%", label: "TIEMPOS DE RESPUESTA EN DJANGO (OPTIMIZACIÓN N+1)" },
      { value: "+1.100", label: "NIÑOS EN RIESGO BENEFICIADOS (JPMORGAN CHASE)" },
      { value: "6 APIS", label: "APIS DE NASA INTEGRADAS & SIMULACIÓN 3D EN THREE.JS" },
      { value: "C1 ADV.", label: "NIVEL DE INGLÉS CERTIFICADO (EF SET 63/100)" },
    ],
    experiences: [
      {
        id: "exp-mybig",
        role: "Desarrollador de Software Full Stack",
        company: "MyBiG",
        period: "JULIO 2024 — PRESENTE",
        location: "Buenos Aires, Argentina",
        summary: "Ingeniería y optimización de arquitectura backend, ORM y servicios para plataforma Legal Tech multi-tenant.",
        achievements: [
          "Diagnostiqué y resolví patrones de consulta N+1, lookups redundantes y consultas desindexadas en vistas centrales de Django/ORM, reduciendo tiempos de respuesta en un 40 % y aliviando la carga de la base de datos en picos de tráfico.",
          "Investigue y solucioné incidentes críticos de bloqueo de workers en entornos productivos de Gunicorn/Django producidos por cascadas de timeouts en APIs externas; diseñé lógica de reintentos, timeouts estrictos y tareas asíncronas.",
          "Lideré el desarrollo técnico de Procuraduría Digital (módulo automatizado de presentación de escritos), aplicando patrones de diseño OOP para asegurar validaciones estrictas y consistencia transaccional entre estudios jurídicos clientes.",
          "Diseñé esquemas relacionales escalables y capas de servicio para métricas de uso de plataforma y sincronización de tareas entre módulos, habilitando visibilidad de consumo para decisiones de facturación e infraestructura.",
          "Elaboré una auditoría integral de rendimiento de la plataforma Django (ORM, observabilidad y background jobs), entregando a los líderes técnicos un plan priorizado de remediación de deuda técnica."
        ],
        technologies: ["Python", "Django", "Gunicorn", "Celery", "MariaDB", "SQL", "APIs RESTful", "Procesamiento Asíncrono"]
      },
      {
        id: "exp-unsam",
        role: "Pasante de Soporte IT",
        company: "Universidad Nacional de San Martín (UNSAM)",
        period: "AGOSTO 2023 — NOVIEMBRE 2023",
        location: "Buenos Aires, Argentina",
        summary: "Mantenimiento preventivo, soporte a usuarios e infraestructura tecnológica para el personal docente y académico.",
        achievements: [
          "Mantenimiento preventivo, diagnóstico y resolución de incidentes de hardware, software y conectividad de red para más de 100 usuarios del personal académico, optimizando el control del inventario técnico."
        ],
        technologies: ["Hardware", "Software", "Redes / Networking", "Troubleshooting", "Control de Inventario"]
      }
    ],
    projects: [
      {
        id: "proj-jpmorgan-codeforgood",
        title: "CODE FOR GOOD 2026 (JPMORGAN CHASE) — PLATAFORMA DE DONACIONES",
        category: "HACKATHON / JPMORGAN CHASE",
        subtitle: "Django, Chart.js, SQLite · Ago 2026",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?auto=format&fit=crop&w=900&q=80",
        promoBadge: "CODE FOR GOOD 2026",
        description: "Diseñé e implementé de punta a punta una plataforma para Patronato de la Infancia (ONG que asiste a más de 1.100 niños en riesgo), con autenticación de donantes, panel analítico en tiempo real con Chart.js y catálogo de 10 iniciativas sociales. Implementé el flujo seguro de donaciones con validación de tarjetas en cliente mediante el algoritmo de Luhn, garantizando el no almacenamiento de credenciales financieras sensibles.",
        metrics: "+1.100 Niños Beneficiados · Validación con Algoritmo de Luhn",
        technologies: ["Django", "Python", "Chart.js", "SQLite", "Algoritmo de Luhn", "HTML5/CSS3"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-space-dashboard",
        title: "SPACE DASHBOARD — EXPLORADOR DE APIS DE NASA",
        category: "FULL STACK & 3D SIMULATION",
        subtitle: "space-dashboard-yore.onrender.com · Mayo 2026 – Presente",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        promoBadge: "EN PRODUCCIÓN",
        description: "Aplicación web full-stack que consume 6 APIs abiertas de la NASA (APOD, asteroides cercanos, rover de Marte, clima y rastreador de la ISS), integrando una simulación 3D interactiva del Sistema Solar con órbitas keplerianas en Three.js.",
        metrics: "6 APIs Abiertas de NASA · Simulación 3D Three.js · Docker",
        technologies: ["Python", "Django", "JavaScript", "Three.js", "REST APIs", "Leaflet.js", "Chart.js", "Docker", "Render"],
        demoUrl: "https://space-dashboard-yore.onrender.com",
        repoUrl: "https://github.com/joaco844",
        featured: true
      },
      {
        id: "proj-gitlab-ai",
        title: "GITLAB RELEASE SUMMARY — AUTOMATIZACIÓN DE NOTAS CON IA",
        category: "AI & MICROSERVICES",
        subtitle: "FastAPI, python-gitlab, LLMs · Mar 2026 – Presente",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=900&q=80",
        promoBadge: "INTEGRACIÓN IA",
        description: "Microservicio que se conecta vía API a repositorios de GitLab, procesa el historial de commits y genera automáticamente notas de versión estructuradas utilizando LLMs, agilizando la documentación con creación de issues en 1 clic.",
        metrics: "Microservicio FastAPI · Resúmenes LLM · Issues en 1 Clic",
        technologies: ["FastAPI", "Python", "python-gitlab", "LLMs", "GitLab API", "APIs RESTful"],
        demoUrl: "https://github.com/joaco844",
        repoUrl: "https://github.com/joaco844",
        featured: true
      }
    ],
    skillCategories: [
      {
        title: "LENGUAJES",
        skills: ["Python (Avanzado)", "SQL (Intermedio)", "Java (Fundamentos OOP)", "JavaScript (ES6+)", "HTML5/CSS3"]
      },
      {
        title: "BACKEND Y ARQUITECTURA",
        skills: ["Django", "FastAPI", "APIs RESTful", "Gunicorn", "Celery", "Optimización de ORM (N+1)", "Procesamiento Asíncrono"]
      },
      {
        title: "BASES DE DATOS Y DEVOPS",
        skills: ["MariaDB", "MySQL", "PostgreSQL", "Docker", "Git", "GitLab CI/CD", "Linux (Ubuntu/Debian)", "Postman"]
      },
      {
        title: "DIAGNÓSTICO Y RENDIMIENTO",
        skills: ["Resolución de Consultas N+1", "Mitigación de Bloqueos de Workers", "Profiling en Producción (pyinstrument)", "Políticas de Timeouts Estrictos", "Consistencia Transaccional (OOP)"]
      }
    ],
    education: [
      {
        id: "edu-uade",
        degree: "Licenciatura en Gestión de Tecnología de la Información",
        institution: "Universidad Argentina de la Empresa (UADE) · Buenos Aires, Argentina",
        period: "2025 — PRESENTE",
        description: "Carrera de grado enfocada en gestión estratégica de tecnología, arquitectura de software empresarial, modelado de datos y dirección de proyectos IT."
      },
      {
        id: "edu-politecnico",
        degree: "Técnico en Computación",
        institution: "Instituto Politécnico Modelo · Buenos Aires, Argentina",
        period: "2018 — 2023",
        description: "Título técnico secundario de 6 años con sólida formación en lógica de programación, bases de datos relacionales, redes, arquitectura de hardware y sistemas."
      }
    ],
    certifications: [
      {
        id: "cert-efset",
        title: "EF SET English Certificate — C1 Advanced",
        issuer: "EF Standard English Test",
        year: "2026",
        details: "Puntaje: 63/100 · Capacidad Profesional Completa (cert.efset.org/3GPEHs)",
        link: "https://cert.efset.org/3GPEHs"
      },
      {
        id: "cert-sql",
        title: "SQL (Intermedio)",
        issuer: "HackerRank",
        year: "2026",
        details: "Consultas complejas, optimización relacional y rendimiento en base de datos",
        link: "https://www.hackerrank.com/certificates"
      },
      {
        id: "cert-rest",
        title: "Rest API (Intermedio)",
        issuer: "HackerRank",
        year: "2026",
        details: "Arquitectura RESTful, gestión de endpoints y procesamiento de datos",
        link: "https://www.hackerrank.com/certificates"
      }
    ],
    languages: [
      {
        language: "Español",
        level: "Nativo"
      },
      {
        language: "Inglés",
        level: "C1 Avanzado / Capacidad Profesional Completa",
        certification: "EF SET Puntaje: 63/100 · cert.efset.org/3GPEHs"
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
        searchPlaceholder: "Buscar habilidad, proyecto o rol...",
        contactBtn: "CONTACTAR"
      },
      hero: {
        tag: "CURRICULUM VITAE & PORTAFOLIO 2026",
        exploreBtn: "EXPLORAR PROYECTOS",
        downloadPdfBtn: "DESCARGAR CV (PDF)"
      },
      about: {
        sectionNum: "01",
        sectionTitle: "SOBRE MÍ & FILOSOFÍA",
        sectionSubtitle: "PERFIL PROFESIONAL · VISIÓN TÉCNICA",
        performanceTitle: "ORIENTADO AL RENDIMIENTO",
        performanceDesc: "Enfoque constante en latencia de base de datos, patrones de consulta ORM (resolución N+1), consultas desindexadas y ciclo de vida de peticiones.",
        robustnessTitle: "ROBUSTEZ Y ESCALA",
        robustnessDesc: "Resiliencia en producción, diagnóstico de concurrencia en Gunicorn, prevención de cascadas de timeouts y procesamiento asíncrono estricto.",
        specTitle: "ESPECIFICACIONES TÉCNICAS",
        locationLabel: "UBICACIÓN:",
        statusLabel: "ESTADO:",
        statusValue: "DISPONIBLE",
        modalityLabel: "MODALIDAD:",
        modalityValue: "REMOTO / HÍBRIDO",
        stackLabel: "STACK CENTRAL:"
      },
      experience: {
        sectionNum: "02",
        sectionTitle: "EXPERIENCIA LABORAL",
        sectionSubtitle: "ROLES · RESPONSABILIDADES · IMPACTO MEDIBLE",
        achievementsTitle: "LOGROS CLAVE & ENTREGABLES",
        techTitle: "TECNOLOGÍAS APLICADAS",
        achievementsCountSuffix: "ENTREGABLES"
      },
      projects: {
        sectionNum: "03",
        sectionTitle: "PROYECTOS DESTACADOS & HACKATHONS",
        sectionSubtitle: "CATÁLOGO DE INGENIERÍA",
        deliveriesCount: "PROYECTOS REGISTRADOS",
        allFilter: "TODOS",
        demoBtn: "VER EN VIVO",
        repoBtn: "CÓDIGO",
        noResults: "No se encontraron proyectos con ese criterio",
        viewAllBtn: "VER TODOS LOS PROYECTOS",
        techsCountSuffix: "TECNOLOGÍAS"
      },
      skills: {
        sectionNum: "04",
        sectionTitle: "HABILIDADES TÉCNICAS & CERTIFICACIONES",
        sectionSubtitle: "FRAMEWORKS · RENDIMIENTO DE BASE DE DATOS · INFRAESTRUCTURA",
        tag: "ECOSISTEMA MODERNO",
        footerTag: "COMPETENCIA EN PRODUCCIÓN"
      },
      education: {
        sectionNum: "05",
        sectionTitle: "EDUCACIÓN, CERTIFICACIONES E IDIOMAS",
        sectionSubtitle: "TÍTULOS ACADÉMICOS · CREDENCIALES VERIFICADAS · IDIOMAS",
        verifiedTag: "REGISTRO VERIFICADO",
        academicTitle: "FORMACIÓN ACADÉMICA",
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
        gitlabLabel: "REPOSITORIOS & CI/CD (GITLAB)",
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
        successMsg: "MENSAJE PREPARADO. REDIRIGIENDO AL CLIENTE DE CORREO..."
      },
      footer: {
        sectionsCol: "SECCIONES",
        resourcesCol: "RECURSOS",
        connectCol: "CONEXIÓN",
        manifestoCol: "INGENIERÍA DIGITAL",
        manifestoDesc: "Sistema editorial minimalista para exhibición de trayectoria profesional y código de producción.",
        downloadPdf: "Descargar CV en PDF",
        githubRepos: "Repositorios en GitHub",
        gitlabRepos: "Proyectos en GitLab",
        projectMetrics: "Métricas de Proyectos",
        backToTop: "VOLVER AL INICIO",
        rights: "TODOS LOS DERECHOS RESERVADOS.",
        availableHire: "DISPONIBLE PARA CONTRATACIÓN",
        edition: "EDICIÓN 2026"
      }
    }
  }
};
