export const SITE = {
  name: "Oyedeji Olawale",
  shortName: "Olawale.",
  title: "Backend & Machine Learning Developer",
  description:
    "A Backend & Machine Learning Developer focused on distributed systems, high-performance data pipelines, and scalable AI infrastructure.",
  email: "oyedeji827@gmail.com",
  location: "Lagos, Nigeria (Remote)",
  resumeUrl: "/resume.pdf",
  heroHeadline: "Building the next generation of",
  heroHighlight: "intelligent",
  heroHeadlineEnd: "backends.",
  heroSubtitle:
    "Oyedeji Olawale — A Backend & Machine Learning Developer focused on distributed systems, high-performance data pipelines, and scalable AI infrastructure.",
  currentlyBuilding: "Distributed ML Framework",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/kras827-sketch",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/oyedeji",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/oyedeji",
    icon: "twitter",
  },
];

export const EXPERTISE_AREAS = [
  {
    icon: "server",
    title: "Backend Engineering",
    description:
      "Building fault-tolerant microservices, optimizing database performance, and architecting REST/GraphQL APIs for global scale.",
    tags: ["Go", "Python"],
  },
  {
    icon: "brain",
    title: "Machine Learning",
    description:
      "Training production-ready models, implementing computer vision solutions, and optimizing inference for edge deployment.",
    tags: ["PyTorch", "Scikit"],
  },
  {
    icon: "cloud",
    title: "MLOps & Cloud",
    description:
      "Bridging the gap between data science and production with Docker, Kubernetes, and automated CI/CD pipelines.",
    tags: ["AWS", "Docker"],
  },
];

export const TECH_STACK = [
  {
    number: "01",
    icon: "cpu",
    title: "Python & ML",
    description:
      "Specializing in deep learning and statistical modeling using industry-standard frameworks.",
    tags: ["PyTorch", "Scikit-learn", "Pandas"],
  },
  {
    number: "02",
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Containerization and automated deployment pipelines for reliable software delivery.",
    tags: ["Docker", "AWS", "Kubernetes"],
  },
  {
    number: "03",
    icon: "code",
    title: "API & Backend",
    description:
      "Architecting high-performance microservices and RESTful/GraphQL interfaces.",
    tags: ["FastAPI", "Go", "Node.js"],
  },
  {
    number: "04",
    icon: "database",
    title: "Data Systems",
    description:
      "Designing efficient schemas and managing both relational and NoSQL data stores.",
    tags: ["PostgreSQL", "Redis", "MongoDB"],
  },
];

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
