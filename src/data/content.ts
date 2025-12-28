import { Mail, Linkedin, Github, Code2, Database, Server, Boxes, Wrench, Zap, Layers } from 'lucide-react'

export const personalInfo = {
  name: "Aditya Sharma",
  title: "Senior Software Engineer",
  currentRole: "MindFire Solutions",
  location: "Mathura, India",
  email: "aditya.sharma.11072001@gmail.com",
  phone: "9389263175",
  linkedin: "aditya-5harma",
  github: "dtr-beast",
  resume: "https://flowcv.com/resume/h4ofa5v34d",
  profileImage: "/profile.jpg",
  greeting: "Hey there!",
  tagline: "Building scalable software with .NET, Angular & Spring Boot",
}

export const about = {
  bio: `Dedicated Software Development Engineer with 2+ years of experience building enterprise-grade AML solutions. I thrive on creating innovative, scalable systems that solve real-world problems. Currently working at MindFire Solutions, where I write clean code incorporating SOLID principles and loosely coupled architectures.`,

  currentFocus: {
    title: "Currently @MindFire Solutions",
    description: "Working on employee training trackers and sales contract management systems with a focus on clean architecture and Backend-for-Frontend patterns.",
    icon: Code2,
  },

  funFacts: [
    {
      icon: Wrench,
      title: "DevOps Enthusiast",
      description: "Love creating Dockerfiles, K8s deployments, and automating everything!",
    },
    {
      icon: Zap,
      title: "Data Pipeline Wizard",
      description: "Achieved 20x throughput boost in ETL pipelines with cursor-based streaming.",
    },
    {
      icon: Layers,
      title: "Architecture Nerd",
      description: "Passionate about metadata-driven systems that reduce code duplication by 45%.",
    },
  ]
}

export const skills = {
  backend: {
    name: "Backend",
    icon: Server,
    color: "#06D6A0",
    skills: [
      { name: ".NET / C#", level: 95 },
      { name: "Spring Boot", level: 85 },
      { name: "Entity Framework", level: 90 },
      { name: "RESTful APIs", level: 92 },
    ]
  },
  frontend: {
    name: "Frontend",
    icon: Code2,
    color: "#FFB703",
    skills: [
      { name: "Angular", level: 90 },
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 88 },
      { name: "Material UI", level: 85 },
    ]
  },
  database: {
    name: "Database",
    icon: Database,
    color: "#EF476F",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "Elasticsearch", level: 78 },
      { name: "SQL Optimization", level: 88 },
    ]
  },
  devops: {
    name: "DevOps",
    icon: Boxes,
    color: "#8892B0",
    skills: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 82 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 90 },
    ]
  },
}

export const experience = [
  {
    company: "MindFire Solutions",
    role: "Senior Software Engineer",
    duration: "July 2025 - Present",
    location: "Noida, India",
    color: "#06D6A0",
    achievements: [
      "Built internal employee training tracker with SOLID principles",
      "Architected Backend-for-Frontend for sales contract management",
      "Implemented loosely coupled monolith architecture",
    ],
    techStack: [".NET", "Angular", "PostgreSQL", "Docker"],
  },
  {
    company: "IntelleWings",
    role: "Software Development Engineer 1",
    duration: "June 2023 - June 2025",
    location: "Chandigarh, India",
    color: "#FFB703",
    achievements: [
      "Developed FINNET2 fraud reporting format used by 80% of enterprise clients",
      "Reduced dev time by 45% with metadata-driven multi-tenant config system",
      "Achieved 20x throughput boost in ETL pipelines with streaming architecture",
      "Cut analysis time by 55% with custom Rule Engine using complex SQL",
      "Improved deployment time by 40% automating K8s across 5+ environments",
      "Replaced MySQL search with Elasticsearch for sub-second queries",
    ],
    techStack: [".NET", "C#", "Angular", "Spring Boot", "MySQL", "Python", "Docker", "K8s"],
    projects: [
      {
        name: "AzamPay",
        description: "Tanzanian Wallet AML Software",
      },
      {
        name: "Star Health",
        description: "Insurance AML Software",
      },
      {
        name: "FINNET2",
        description: "AML Reporting Format",
      },
    ],
  },
  {
    company: "IntelleWings",
    role: "Fullstack Engineer Intern",
    duration: "Sept 2022 - June 2023",
    location: "Chandigarh, India",
    color: "#EF476F",
    achievements: [
      "Boosted Core Web Vitals by 25% migrating from Nebular to Material UI",
      "Upgraded Angular from v7 to v15 with proper migration patterns",
      "Built Screening page with API integration for sanction checking",
    ],
    techStack: [".NET", "Angular", "MySQL", "TypeScript"],
  },
  {
    company: "Huminos",
    role: "Software Engineer Intern",
    duration: "April 2022 - August 2022",
    location: "Noida, India",
    color: "#8892B0",
    achievements: [
      "Gained foundational experience in software development",
    ],
    techStack: ["Python", "JavaScript"],
  },
]

export const education = {
  institution: "GLA University",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  duration: "2019 - 2023",
  location: "Mathura, India",
}

export const contact = {
  title: "Let's Build Something Amazing",
  message: "Whether you want to discuss a project, collaborate on something cool, or just say hi - my inbox is always open!",
  farewell: "Thanks for stopping by!",
  links: [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:aditya.sharma.11072001@gmail.com",
      handle: "aditya.sharma.11072001@gmail.com",
      color: "#06D6A0",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/aditya-5harma",
      handle: "aditya-5harma",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/dtr-beast",
      handle: "dtr-beast",
      color: "#FFB703",
    },
  ]
}
