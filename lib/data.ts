export const personalInfo = {
  name: "Aditya Sharma",
  title: "Senior Software Engineer",
  email: "aditya.sharma.11072001@gmail.com",
  phone: "9389263175",
  location: "Chandigarh, India",
  links: {
    github: "https://github.com", // Placeholder if not found in resume
    linkedin: "https://www.linkedin.com/in/aditya-5harma",
    resume: "https://flowcv.com/resume/h4ofa5v34d"
  },
  bio: "Versatile .NET and Angular Developer with a passion for building scalable, client-facing AML solutions. Skilled in developing dynamic UI components, RESTful APIs, and ETL pipelines. Experienced in delivering secure, configurable systems with modern practices like Docker and Kubernetes.",
  funFacts: [
    { icon: "Code", text: "Reduced dev time by 45%" },
    { icon: "Coffee", text: "Powered by caffeine & code" }, // Generic fun fact
    { icon: "Zap", text: "20x boost in throughput" },
    { icon: "Globe", text: "Based in Chandigarh" },
  ]
};

export const skills = {
  frontend: [
    { name: "Angular", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 80 },
  ],
  backend: [
    { name: ".NET Core", level: 95 },
    { name: "C#", level: 95 },
    { name: "Spring Boot", level: 75 },
    { name: "Java/Kotlin", level: 70 },
    { name: "Python", level: 60 },
  ],
  database: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Elasticsearch", level: 70 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 80 },
    { name: "CI/CD", level: 85 },
    { name: "Git", level: 90 },
  ]
};

export const experience = [
  {
    company: "Mindfire Solutions",
    role: "Senior Software Engineer",
    period: "July 2025 – Present",
    location: "Noida, India",
    description: "Working on internal employee training tracker and sales contract management systems using loosely coupled monolith architecture.",
    technologies: [".NET", "Angular", "Spring Boot", "Kotlin", "MySQL"]
  },
  {
    company: "IntelleWings",
    role: "Senior Software Development Engineer 1",
    period: "Jun 2023 – June 2025", // Combined based on timeline
    location: "Chandigarh, India",
    description: "Built metadata-driven multi-tenant config systems, dynamic UI rendering engines, and high-throughput ETL pipelines. Orchestrated K8s deployments and improved security.",
    technologies: [".NET", "C#", "Angular", "MySQL", "Docker", "K8s", "Elasticsearch"]
  },
  {
    company: "IntelleWings",
    role: "Software Development Engineer Intern",
    period: "Sep 2022 – May 2023",
    location: "Chandigarh, India",
    description: "Migrated UI from Nebular to Material UI, refined core components boosting Web Vitals by 25%, and integrated sanction screening APIs.",
    technologies: [".NET", "C#", "Angular", "TypeScript"]
  },
  {
    company: "Huminos",
    role: "Software Engineer Intern",
    period: "Apr 2022 – Aug 2022",
    location: "Noida, India",
    description: "gained initial industry experience.",
    technologies: []
  }
];
