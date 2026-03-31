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
  // PERSONAL INFO - Edit these
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  name: "Backend & ML Engineer",
  role: "Senior Backend Engineer | ML Specialist",
  email: "contact@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "yourportfolio.com",
  github: "github.com/yourname",
  linkedin: "linkedin.com/in/yourname",

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PROFESSIONAL SUMMARY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  summary:
    "Senior Backend Engineer with expertise in designing scalable microservices and implementing machine learning solutions. Specialized in high-performance systems, secure transaction processing, and real-time data pipelines. Proven track record of architecting systems handling millions of transactions and deploying ML models in production.",

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CORE SKILLS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  skills: [
    {
      category: "Backend & APIs",
      items: [
        "Python (FastAPI, Django, Flask)",
        "Node.js (Express, NestJS)",
        "RESTful APIs",
        "GraphQL",
        "Microservices Architecture",
      ],
    },
    {
      category: "Machine Learning",
      items: [
        "PyTorch",
        "Scikit-learn",
        "TensorFlow",
        "Real-time Classification",
        "Fraud Detection Systems",
        "ML Deployment & Inference",
      ],
    },
    {
      category: "Databases & Cache",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Database Optimization",
        "Query Performance Tuning",
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker",
        "Kubernetes",
        "AWS (Lambda, EC2, RDS, S3)",
        "CI/CD Pipelines",
        "Infrastructure as Code",
      ],
    },
    {
      category: "Frontend",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FEATURED PROJECTS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  projects: [
    {
      title: "Kras Pay",
      description:
        "Engineered a robust financial gateway for cross-border transactions with real-time fraud detection engine using ML classifiers to assess risk scores for every payment. Implemented secure ledger reconciliation systems and multi-currency settlement pipelines.",
      technologies: [
        "Node.js",
        "Scikit-learn",
        "AWS Lambda",
        "GraphQL",
        "PyTorch",
      ],
    },
    {
      title: "Invoice Pro",
      description:
        "Architected a scalable microservice architecture to handle automated PDF generation and distribution. Designed high-concurrency background processing to handle 5,000+ simultaneous requests during peak billing cycles using asynchronous task queues.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "Real-time Analytics Pipeline",
      description:
        "Built a distributed data pipeline processing 10M+ events daily. Implemented stream processing with Apache Kafka, data warehouse optimization, and real-time dashboarding capabilities.",
      technologies: ["Python", "Kafka", "PostgreSQL", "Grafana", "Airflow"],
    },
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EDUCATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  education: [
    {
      school: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science (Machine Learning)",
      year: "2022",
    },
    {
      school: "UC Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science & Statistics",
      year: "2020",
    },
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PROFESSIONAL EXPERIENCE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  experience: [
    {
      company: "Tech Corporation",
      role: "Senior Backend Engineer",
      duration: "2023 – Present",
      achievements: [
        "Led architecture redesign of core payment processing system, reducing latency by 40% and increasing throughput to 10K TPS",
        "Implemented ML-based fraud detection model achieving 99.2% accuracy with <50ms inference time",
        "Designed and deployed Kubernetes infrastructure managing 50+ microservices across 3 regions",
        "Mentored team of 5 junior engineers, conducting code reviews and architecture discussions",
      ],
    },
    {
      company: "StartUp Inc.",
      role: "Backend Engineer",
      duration: "2022 – 2023",
      achievements: [
        "Built scalable FastAPI backend handling 1M+ daily active users",
        "Implemented Redis caching layer, reducing database queries by 70%",
        "Designed data pipeline processing real-time user analytics with Apache Kafka",
        "Optimized PostgreSQL queries, improving API response times by 60%",
      ],
    },
    {
      company: "Consulting Firm",
      role: "Software Engineer",
      duration: "2020 – 2022",
      achievements: [
        "Developed full-stack applications using Python and React for Fortune 500 clients",
        "Implemented CI/CD pipelines using GitHub Actions and Docker",
        "Created automated testing suite achieving 85% code coverage",
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
