/**
 * CV and Resume data
 * Edit these objects to customize your CV and Resume downloads
 */

export interface Skill {
  category: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  year: string;
}

export interface CVData {
  // Personal Info
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;

  // Professional Summary
  summary: string;

  // Skills
  skills: Skill[];

  // Projects
  projects: ProjectItem[];

  // Education
  education: EducationItem[];

  // Experience
  experience: Array<{
    company: string;
    role: string;
    duration: string;
    achievements: string[];
  }>;
}

export const cvData: CVData = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PERSONAL INFO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  name: "Oyedeji Olawale",
  role: "Backend & Machine Learning Engineer",
  email: "oyedeji827@gmail.com",
  phone: "+234 816 000 0000",
  location: "Lagos, Nigeria (Remote)",
  website: "kras-portfolio.vercel.app",
  github: "github.com/kras827-sketch",
  linkedin: "linkedin.com/in/oyedeji",

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PROFESSIONAL SUMMARY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  summary:
    "Backend & Machine Learning Engineer with deep expertise in designing scalable microservices, building high-performance data pipelines, and deploying production ML models. Specialized in distributed systems, real-time analytics, secure transaction processing, and AI-driven infrastructure. Proven track record of architecting systems handling millions of requests and shipping ML solutions from prototype to production.",

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CORE SKILLS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  skills: [
    {
      category: "Backend & APIs",
      items: [
        "Python (FastAPI, Django, Flask)",
        "Go (Gin, Fiber)",
        "Node.js (Express, NestJS)",
        "RESTful APIs & GraphQL",
        "Microservices Architecture",
      ],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "PyTorch & TensorFlow",
        "Scikit-learn & XGBoost",
        "Computer Vision (OpenCV)",
        "NLP & Transformer Models",
        "ML Pipeline Deployment",
      ],
    },
    {
      category: "Databases & Caching",
      items: [
        "PostgreSQL & MySQL",
        "MongoDB & DynamoDB",
        "Redis & Memcached",
        "Database Optimization",
        "Query Performance Tuning",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS (Lambda, EC2, S3, SageMaker)",
        "Docker & Kubernetes",
        "CI/CD (GitHub Actions, Jenkins)",
        "Infrastructure as Code (Terraform)",
        "Monitoring (Grafana, Prometheus)",
      ],
    },
    {
      category: "Frontend & Tools",
      items: [
        "TypeScript & React",
        "Next.js & Vite",
        "Tailwind CSS",
        "Git & GitHub",
        "Agile / Scrum Methodologies",
      ],
    },
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FEATURED PROJECTS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  projects: [
    {
      title: "Kras Pay — Financial Gateway",
      description:
        "Engineered a cross-border payment gateway with real-time ML-powered fraud detection. Built secure ledger reconciliation systems and multi-currency settlement pipelines handling thousands of daily transactions with sub-100ms processing latency.",
      technologies: [
        "Node.js",
        "Scikit-learn",
        "AWS Lambda",
        "GraphQL",
        "PyTorch",
      ],
    },
    {
      title: "Invoice Pro — Billing Platform",
      description:
        "Architected a scalable invoicing microservice with automated PDF generation, email distribution, and AI-powered financial forecasting. Designed high-concurrency background processing to handle 5,000+ simultaneous requests during peak billing cycles.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "Real-time Analytics Pipeline",
      description:
        "Built a distributed data pipeline processing 10M+ events daily with stream processing, data warehouse optimization, and real-time dashboarding for business intelligence insights.",
      technologies: ["Python", "Kafka", "PostgreSQL", "Grafana", "Airflow"],
    },
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EDUCATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  education: [
    {
      school: "Lagos State University (LASU)",
      degree: "Bachelor of Science",
      field: "Computer Science",
      year: "Present",
    },
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PROFESSIONAL EXPERIENCE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  experience: [
    {
      company: "Freelance / Contract",
      role: "Senior Backend & ML Engineer",
      duration: "2023 - Present",
      achievements: [
        "Architected and delivered production backend systems for fintech and SaaS clients, handling 10K+ TPS with 99.9% uptime",
        "Designed and deployed ML-based fraud detection models achieving 99.2% accuracy with sub-50ms inference latency",
        "Built and managed Kubernetes infrastructure orchestrating 20+ microservices across multiple cloud regions",
        "Led end-to-end development of an invoicing platform with AI-powered financial forecasting and automated reporting",
      ],
    },
    {
      company: "Tech Startup",
      role: "Backend Engineer",
      duration: "2022 - 2023",
      achievements: [
        "Built scalable FastAPI backend services supporting 1M+ daily active users across web and mobile platforms",
        "Implemented Redis caching and CDN strategies that reduced database load by 70% and improved API response times by 60%",
        "Designed real-time data pipelines using Apache Kafka for user analytics and business intelligence",
        "Established CI/CD pipelines and automated testing suites achieving 90% code coverage",
      ],
    },
    {
      company: "Software Consultancy",
      role: "Software Engineer",
      duration: "2020 - 2022",
      achievements: [
        "Developed full-stack applications using Python, Go, and React for enterprise clients",
        "Implemented containerized deployment pipelines using Docker and GitHub Actions",
        "Created automated testing frameworks and integration test suites for critical business logic",
      ],
    },
  ],
};

// Derived data for convenience
export const resumeData = {
  name: cvData.name,
  role: cvData.role,
  email: cvData.email,
  phone: cvData.phone,
  location: cvData.location,
  github: cvData.github,
  linkedin: cvData.linkedin,
  summary: cvData.summary,
  skills: cvData.skills,
  projects: cvData.projects.slice(0, 2), // Top 2 projects for resume
  experience: cvData.experience.slice(0, 2), // Top 2 roles for resume
};
