/**
 * Detailed Project Information
 * Data structure for individual project pages
 */

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  features: string[];
  screenshots: {
    url: string;
    alt: string;
    caption: string;
  }[];
  links: {
    type: "github" | "live" | "demo";
    label: string;
    url: string;
  }[];
  timeline: string;
  team?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "kras-pay": {
    id: "kras-pay",
    title: "Kras Pay",
    category: "FINTECH & ML",
    tagline: "Digital Finance Ecosystem with Real-time Fraud Detection",
    description:
      "Engineered a robust financial gateway for cross-border transactions with integrated fraud detection engine.",
    fullDescription:
      "Kras Pay is a comprehensive digital finance platform engineered to handle cross-border transactions with enterprise-grade security. The platform integrates advanced machine learning classifiers to assess fraud risk scores for every payment in real-time, ensuring secure and efficient transaction processing.",
    challenge:
      "Building a payment system that could handle millions of transactions globally while preventing fraud and maintaining PCI compliance. The main challenges were:\n• Real-time fraud detection at scale\n• Multi-currency settlement and reconciliation\n• Low-latency transaction processing\n• Handling peak traffic during financial events",
    solution:
      "Implemented a microservices architecture with ML-powered risk assessment:\n• PyTorch-based fraud classification model with 99.2% accuracy\n• Distributed transaction processing using message queues\n• Real-time ledger synchronization across regions\n• GraphQL API for flexible client queries",
    impact: [
      "Processes 50,000+ transactions daily",
      "99.2% fraud detection accuracy",
      "Sub-second settlement times",
      "Zero security breaches in production",
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "Python",
      "PyTorch",
      "Scikit-learn",
      "AWS Lambda",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    features: [
      "Real-time fraud detection using ML models",
      "Multi-currency transaction processing",
      "Secure ledger reconciliation",
      "Instant payment notifications",
      "Transaction analytics dashboard",
      "PCI-DSS compliant architecture",
      "Webhook integrations for partners",
      "Comprehensive audit logging",
    ],
    screenshots: [
      {
        url: "/images/kras-pay-dashboard.png",
        alt: "Kras Pay Dashboard",
        caption: "Real-time transaction dashboard with fraud alerts",
      },
      {
        url: "/images/kras-pay-analytics.png",
        alt: "Analytics View",
        caption: "Fraud detection analytics and pattern analysis",
      },
      {
        url: "/images/kras-pay-api.png",
        alt: "API Documentation",
        caption: "Developer-friendly API documentation",
      },
    ],
    links: [
      {
        type: "live",
        label: "View Live",
        url: "https://kras-pay.example.com",
      },
      {
        type: "github",
        label: "View Code",
        url: "https://github.com/yourname/kras-pay",
      },
      {
        type: "demo",
        label: "Watch Demo",
        url: "https://youtube.com/demo",
      },
    ],
    timeline: "12 months (2023-2024)",
    team: "Core team of 5 engineers + ML specialists",
    metrics: [
      { label: "Daily Transactions", value: "50K+" },
      { label: "Fraud Detection Accuracy", value: "99.2%" },
      { label: "Settlement Time", value: "<1s" },
      { label: "System Uptime", value: "99.99%" },
    ],
  },

  "invoice-pro": {
    id: "invoice-pro",
    title: "Invoice Pro",
    category: "BACKEND INFRASTRUCTURE",
    tagline: "Scalable Microservice for Automated PDF Generation",
    description:
      "Architected a scalable microservice architecture for automated PDF generation and distribution.",
    fullDescription:
      "Invoice Pro is a production-grade microservice designed to handle high-volume automated PDF generation for invoice processing. Built on FastAPI with asynchronous task processing, it manages complex billing workflows and delivers millions of invoices annually.",
    challenge:
      "Creating a system capable of generating and distributing 5,000+ PDFs simultaneously during peak billing cycles while maintaining sub-second latency and ensuring data consistency. Key challenges included:\n• Managing concurrent PDF generation\n• Database optimization for high throughput\n• Reliable delivery mechanisms\n• Cost-effective cloud infrastructure",
    solution:
      "Implemented a robust microservice architecture with:\n• FastAPI for high-performance async processing\n• Celery task queue for background jobs\n• Redis for caching and rate limiting\n• PostgreSQL with optimized indexing\n• Docker containers orchestrated with Kubernetes",
    impact: [
      "Handles 5,000+ concurrent requests",
      "99.99% delivery success rate",
      "Reduced generation time from 15s to 0.8s",
      "40% cost reduction vs previous solution",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Kubernetes",
      "AWS S3",
      "Nginx",
      "Prometheus",
    ],
    features: [
      "Asynchronous PDF generation",
      "Batch processing capabilities",
      "Email distribution integration",
      "Template customization engine",
      "Webhook notifications",
      "Rate limiting and throttling",
      "Comprehensive logging and monitoring",
      "Automatic retry mechanisms",
    ],
    screenshots: [
      {
        url: "/images/invoice-pro-ui.png",
        alt: "Invoice Pro Dashboard",
        caption: "Main dashboard showing generation metrics",
      },
      {
        url: "/images/invoice-pro-templates.png",
        alt: "Template Manager",
        caption: "Customizable invoice templates",
      },
      {
        url: "/images/invoice-pro-monitoring.png",
        alt: "Monitoring",
        caption: "Real-time monitoring and performance metrics",
      },
    ],
    links: [
      {
        type: "live",
        label: "View Live",
        url: "https://invoice-pro.example.com",
      },
      {
        type: "github",
        label: "View Code",
        url: "https://github.com/yourname/invoice-pro",
      },
      {
        type: "demo",
        label: "Watch Demo",
        url: "https://youtube.com/demo",
      },
    ],
    timeline: "8 months (2023)",
    team: "Backend team of 3 engineers",
    metrics: [
      { label: "Concurrent Requests", value: "5K+" },
      { label: "Success Rate", value: "99.99%" },
      { label: "Avg Gen Time", value: "0.8s" },
      { label: "Annual Invoices", value: "10M+" },
    ],
  },
};

export function getProjectData(id: string): ProjectDetail | null {
  return projectsData[id] || null;
}

export function getAllProjectIds(): string[] {
  return Object.keys(projectsData);
}
