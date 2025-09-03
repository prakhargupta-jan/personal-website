// Types for Home Section
export interface HomeDetails {
  introMsg: string;
  name: string;
  profession: string;
  specialization?: string;
  learnMoreLink?: string;
}

// Types for Experience
interface Experience {
  company: string;
  role: string;
  duration: string;
  details?: string[];
}
// Types for About
export interface AboutDetails {
  introMsg: string;
  experience: Experience[];
  // string key with value as arrays of strings for skills
  skills: { [key: string]: string[] };
  profiles: {
    github?: string;
    codeforces?: string;
    leetcode?: string;
    linkedin?: string;
    twitter?: string;
    resume?: string;
    [key: string]: string | undefined; // for any other profile links
  };
  interests: string[];
  education?: { institution: string; degree: string; year: string }[];
}

export interface Blog {
  name: string;
  title: string;
  date: string;
  body: string;
  tldr: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

const homeDetails: HomeDetails = {
  introMsg: "Hello I'm",
  name: "Prakhar Gupta",
  profession: "A passionate Software Engineer",
  specialization: "Specializing in building exceptional Backend Systems.",
  learnMoreLink: "/about",
};

const aboutDetails: AboutDetails = {
  introMsg:
    "Hello! I'm Prakhar Gupta, I identify as a very passionate person with a knack for creating efficient and beautiful solutions. With a strong foundation in computer science and a love for problem-solving, I enjoy bringing ideas to life through code. I value simplicity over compleixty, measuring work by impact instead of hours, and believe in continuous learning and growth. I aspire to be a jack of all trades and master of few, currently focusing on becoming language agnostic to be able to use the best tool for the job.",
  experience: [
    {
      company: "TCS",
      role: "Backend Developer",
      duration: "Sept 2024 - Present",
      details: [
        "Engineered and maintained backend systems on Tech Stack, including FastAPI, ElasticSearch, Kafka, etc, ensuring reliable data flow and observability across distributed environments.",
        "Reduced API endpoint response times by 50% to 85% through query optimization, caching strategies, and implementing smarter and cleaner practices to reduce compute time for compute-heavy operations.", // using previously calculated metrics with sliding window technique
        "Developed a voice-enabled chatbot that simplified navigation of a complex analytics dashboard, reducing user task completion time by 40% through natural language processing and voice command integration.",
        "Developed and automated monitoring tools using Python and Shell scripts to track service uptime, performance metrics, and fault detection across 120+ distributed systems in 4 zones, improving incident response time by 100%",
      ],
    },
    {
      company: "Finex",
      role: "Full Stack Engineer Intern",
      duration: "Dec 2023 – June 2024",
      details: [
        "Worked on 3 projects: E-commerce platform, GST Software, and Practice Management Software for Charted Accountants.",
        "Tech Stack: React, Express.js, MongoDB, NextJS, AWS(EC2, S3).",
        // one line for each project with 2-3 points
        "Led full-cycle development of a scalable E-commerce platform with integrated admin panel. Implemented role-based access control, cart management, payment gateway integration, and analytics. Deployed to AWS with automated deployment pipeline, achieving 99.9% uptime and rapid feature rollouts.",
        "Co-developed a web-based GST filing and invoice management tool, streamlining compliance for small businesses. Built modules for invoice generation, GSTR summaries, auto-reminders, and data export. Enabled users to generate monthly filings with 80% less manual effort.",
        "Developed a specialized SaaS solution for Chartered Accountants to manage clients, tasks, and documentation. Designed task assignment, deadline tracking, and document upload/download features. Helped early users reduce overhead by 30–40% in client management workflows.",
      ],
    },
// Gurugram police Jun 2021 – July 2021
// Cyber Security Summer Internship Remote
// ∠ Did Case Studies of various real-life cybersecurity threats and extensive reports on them.
// ∠ Attended sessions by Industry experts and discussed Penetration Testing, OSINT, Blockchain, Digital Forensics, Frauds like phishing
// and smishing, Ransomware, and much more.
    {
        company: "Gurugram Police",
        role: "Cyber Security Summer Intern",
        duration: "June 2021 - July 2021",
        details: [
            "Conducted case studies on various real-life cybersecurity threats and compiled extensive reports on them.",
            "Under the guidance of industry experts learnt and discussed topics such as Penetration Testing, OSINT, Blockchain, Digital Forensics, and various types of fraud including phishing and smishing.",
            "Gained insights into ransomware attacks and other emerging cybersecurity challenges.",
        ]
    }
  ],
  skills: {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "C++", "Go", "Java", "Dart"],
    "Frameworks/Libraries": ["React", "Node.js", "Django", "FastAPI", "Gin", "Flutter"],
    Databases: ["MySQL", "PostgreSQL", "ElasticSearch", "MongoDB", "Redis", "SQLite"],
    Tools: ["Git", "Docker", "Kubernetes", "Neovim", "Postman", "Kibana", "Swagger", "CI/CD"],
    Others: ["Linux", "AWS", "Agile Methodologies", "TDD", "System Design"],
  },
  profiles: {
    github: "https://github.com/prakhargupta-jan",
    linkedin: "https://www.linkedin.com/in/prakhar-gupta-jan/",
    leetcode: "https://leetcode.com/prakhargupta-jan/",
    codeforces: "https://codeforces.com/profile/prakhargupta-jan",
    resume: "https://example.com/resume.pdf",
  },
  interests: [
    "Coding",
    "Open Source",
    "Tech Blogging",
    "Dev Tooling",
    "Automation",
    "Agentic AI",
  ],
  education: [
    {
      institution: "State University",
      degree: "B.Sc. in Computer Science",
      year: "2022",
    },
    {
      institution: "City College",
      degree: "High School Diploma",
      year: "2018",
    },
  ],
};

const projectDetails: Project[] = [
  {
    name: "Corona inuu Frontend",
    description:
      "Landing page for Conrona inuu, a meme token on kadena blockchain.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "SCSS"],
    repoUrl: "https://github.com/prakhargupta-jan/corona-inuuu-frontend",
  },
  {
    name: "Rock Paper Scissors",
    description: "html based rock paper scissors game",
    techStack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/prakhargupta-jan/RockPaperScissors",
  },
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio website to showcase personal info, my projects and blogs, highly customizable and extensible with just a details.ts file in src folder.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React-Markdown",
    ],
    repoUrl: "https://github.com/prakhargupta-jan/portfolio",
  },
  {
    name: "Hackers Toolkit",
    description:
      "A collection of tools and resources for ethical hackers and security enthusiasts built on Flutter. includes ping scan, port scan, linux man pages, API response testing, Hashing etc.",
    techStack: ["Flutter", "Dart"],
    repoUrl: "https://github.com/prakhargupta-jan/hackers_toolkit_flutter",
  },
  {
    name: "Payroll Management System",
    description:
      "A simple payroll management system. It allows managing employee records, calculating salaries, and generating payslips.",
    techStack: ["express.js", "Node.js", "MongoDB"],
    repoUrl: "https://github.com/prakhargupta-jan/payrollManagement",
  },
  {
    name: "Ayamese",
    description:
      "A template application with all functionalities required for Full Stack Application such as Unit Testing, Production and Dev Container Environments, Continuous Deployment, etc.",
    techStack: [
      "Express.js",
      "Docker",
      "React",
      "MongoDB",
      "Tailwind CSS",
      "Jest",
    ],
    repoUrl: "https://github.com/prakhargupta-jan/ayamese_backend",
  },
  {
    name: "File Uploader and Processor",
    description:
      "A backend server for handling file uploads, processing Excel files, and storing file metadata in MongoDB.",
    techStack: ["Express.js", "Mongoose", "Multer", "XLSX", "dotenv"],
    repoUrl: "https://github.com/prakhargupta-jan/file-uploader-backend",
  },
  {
    name: "Extensive Reusable Stylable Popup Calendar",
    description:
      "A customizable drop in popup calendar component built with React and Tailwind CSS to things as simple as possible.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Headless UI",
      "Heroicons",
    ],
    repoUrl: "https://github.com/prakhargupta-jan/calendar",
  },
  {
    name: "Educative Todo App",
    description:
      "Todo Backend with increasing complexity, features and tech debt 🙂. Starting from a simple in-memory todo app to a full-fledged app with microservices, GraphQL, gRPC, authentication, authorization, validation, error handling, logging, testing, CI/CD etc. Qui cillum aute et occaecat minim sint exercitation ex est minim Lorem velit qui id.. Qui cillum aute et occaecat minim sint exercitation ex est minim Lorem velit qui id.. Qui cillum aute et occaecat minim sint exercitation ex est minim Lorem velit qui id.. Qui cillum aute et occaecat minim sint exercitation ex est minim Lorem velit qui id.",
    techStack: ["Go", "Gin", "GORM"],
    repoUrl: "https://github.com/prakhargupta-jan/todo_app/tree/main",
  },
  {
    name: "TourGuide",
    description: "A webapp to connect tourists with local guides.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    repoUrl: "https://github.com/prakhargupta-jan/tour-guide/tree/main/routes",
  }
];

export const permaLinkForBlogs = "https://github.com/prakhargupta-jan/blogs/tree-commit-info/cba0534dcb8bbd412cdd19201d7e9847ef3cfc37/blogs"

export { homeDetails, aboutDetails, projectDetails };
