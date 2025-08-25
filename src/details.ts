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
    education?: { institution: string; degree: string; year: string; }[];
}

export interface Blog {
    title: string;
    date: string;
    body: string;
    tldr: string;
}

const homeDetails: HomeDetails = {
    introMsg: "Hello I'm",
    name: "Prakhar Gupta",
    profession: "A passionate Software Engineer",
    specialization: "Specializing in building exceptional Backend Systems.",
    learnMoreLink: "/about"
};

const aboutDetails: AboutDetails = {
    introMsg: "Hello! I'm Prakhar Gupta, a passionate software developer with a knack for creating efficient and scalable web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code.",
    experience: [
        { company: "TechCorp", role: "Software Engineer", duration: "2022 - Present", details: [
            "Worked on a project to develop a web application for a client.",
            "Implemented a feature that allows users to create and manage tasks.",
        ] },
        { company: "WebSolutions", role: "Intern", duration: "2021 - 2022", details: [
            "Assisted in the development of a company website using React and Node.js.",
            "Collaborated with the design team to improve UI/UX.",
        ] }
    ],
    skills: {
        "Programming Languages": ["JavaScript", "TypeScript", "Python"],
        "Frameworks": ["React", "Node.js", "Django", "Flask"],
        "Databases": ["SQL", "NoSQL", "MongoDB"],
        "Tools": ["Git", "Docker", "CI/CD"]
    },
    profiles: {
        github: "https://github.com/prakahrgupta-jan",
        linkedin: "https://www.linkedin.com/in/prakhar-gupta-jan/",
        leetcode: "https://leetcode.com/prakhargupta-jan/",
        codeforces: "https://codeforces.com/profile/prakhargupta-jan",
        resume: "https://example.com/resume.pdf"
    },
    interests: ["Coding", "Open Source", "Tech Blogging", "Dev Tooling", "Automation", "Agentic AI"],
    education: [
        { institution: "State University", degree: "B.Sc. in Computer Science", year: "2022" },
        { institution: "City College", degree: "High School Diploma", year: "2018" }
    ]
};


export {
    homeDetails,
    aboutDetails,
}