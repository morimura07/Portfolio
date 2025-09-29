import {
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Calendar,
  MapPin,
  GraduationCap,
} from "lucide-react";

import type { Experience, Education, Achievement, WorkflowStep } from "@/types";

// Key professional achievements
export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Award,
    label: "Certified Blockchain Developer",
    color: "text-yellow-400",
  },
  { icon: Users, label: "Led 10+ Development Teams", color: "text-blue-400" },
  {
    icon: TrendingUp,
    label: "$50M+ in DeFi TVL Managed",
    color: "text-green-400",
  },
  {
    icon: CheckCircle,
    label: "100+ Smart Contracts Deployed",
    color: "text-purple-400",
  },
];

// Professional experience
export const EXPERIENCES: Experience[] = [
  {
    title: "Lead Blockchain Architect",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description:
      "Architecting enterprise blockchain solutions and leading a team of 15+ developers. Delivered $50M+ TVL DeFi platform and reduced smart contract gas costs by 40%.",
    achievements: [
      "Led $50M TVL DeFi platform",
      "40% gas optimization",
      "Team of 15+ developers",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company: "FinanceFlow Solutions",
    period: "2021 - 2023",
    description:
      "Developed high-frequency trading systems and real-time analytics platforms. Built microservices handling 10M+ requests/day with 99.99% uptime.",
    achievements: ["10M+ daily requests", "99.99% uptime", "HFT systems"],
  },
  {
    title: "Blockchain Developer",
    company: "CryptoInnovate",
    period: "2020 - 2021",
    description:
      "Specialized in DeFi protocol development and smart contract security. Deployed 100+ audited smart contracts with zero security incidents.",
    achievements: [
      "100+ smart contracts",
      "Zero security incidents",
      "DeFi protocols",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "CloudTech Solutions",
    period: "2018 - 2020",
    description:
      "Built scalable web applications and cloud infrastructure. Migrated legacy systems to modern architectures, improving performance by 300%.",
    achievements: [
      "300% performance improvement",
      "Cloud migration",
      "Modern architecture",
    ],
  },
];

// Educational background
export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Science",
    school: "University of Toronto",
    year: "2018",
    specialization: "Distributed Systems & Cryptography",
    gpa: "3.9/4.0",
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "University of Waterloo",
    year: "2016",
    specialization: "Software Architecture & Algorithms",
    gpa: "3.8/4.0",
  },
];

// Professional certifications
export const CERTIFICATIONS = [
  "AWS Certified Solutions Architect - Professional",
  "Certified Ethereum Developer (ConsenSys)",
  "Google Cloud Professional Cloud Architect",
  "Kubernetes Certified Application Developer",
  "MongoDB Certified Developer Associate",
  "Certified Blockchain Security Professional",
  "Docker Certified Associate",
  "Terraform Associate Certification",
];

// Workflow Steps
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "Understanding your vision and technical requirements",
    icon: Calendar,
    color: "#3b82f6",
    bgColor: "bg-blue-500/10",
    duration: "1-2 weeks",
    details: [
      "Initial consultation & requirement gathering",
      "Technical architecture planning",
      "Project timeline & milestone definition",
      "Technology stack selection",
    ],
  },
  {
    id: 2,
    title: "Analysis & Design",
    description: "Creating detailed specifications and system design",
    icon: MapPin,
    color: "#10b981",
    bgColor: "bg-green-500/10",
    duration: "1-2 weeks",
    details: [
      "System architecture design",
      "Database schema planning",
      "API specification documentation",
      "UI/UX wireframes & mockups",
    ],
  },
  {
    id: 3,
    title: "Development & Coding",
    description: "Building your solution with clean, scalable code",
    icon: CheckCircle,
    color: "#8b5cf6",
    bgColor: "bg-purple-500/10",
    duration: "4-12 weeks",
    details: [
      "Agile development methodology",
      "Clean code & best practices",
      "Regular progress updates",
      "Version control & documentation",
    ],
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description: "Ensuring reliability and performance standards",
    icon: Award,
    color: "#f59e0b",
    bgColor: "bg-yellow-500/10",
    duration: "1-2 weeks",
    details: [
      "Unit & integration testing",
      "Performance optimization",
      "Security vulnerability testing",
      "Cross-platform compatibility",
    ],
  },
  {
    id: 5,
    title: "Deployment & Launch",
    description: "Going live with proper monitoring and support",
    icon: TrendingUp,
    color: "#ef4444",
    bgColor: "bg-red-500/10",
    duration: "1 week",
    details: [
      "Production environment setup",
      "CI/CD pipeline configuration",
      "Monitoring & logging setup",
      "Go-live support",
    ],
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description: "Ongoing support and feature enhancements",
    icon: Users,
    color: "#06b6d4",
    bgColor: "bg-cyan-500/10",
    duration: "Ongoing",
    details: [
      "24/7 monitoring & support",
      "Regular updates & patches",
      "Performance optimization",
      "Feature enhancements",
    ],
  },
];
