// ===== PORTFOLIO DATA =====

export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    category: string;
    featured: boolean;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    type: 'full-time' | 'freelance' | 'teaching';
    description: string[];
    metrics: { label: string; value: string }[];
    tech: string[];
}

export interface Skill {
    name: string;
    level: number;
    icon: string;
}

export interface SkillCategory {
    category: string;
    color: string;
    skills: Skill[];
}

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    issuerIcon: string;
    date: string;
    credentialId: string;
    description: string;
    image?: string;
    link: string;
}

// ===== PROJECTS =====
export const projects: Project[] = [
    {
        id: 1,
        title: "LMS – Learning Management System",
        description: "A full-featured learning platform with course management, student progress tracking, video lessons, quizzes, and instructor dashboards. Built to scale for 10,000+ concurrent users.",
        tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Socket.io"],
        github: "https://github.com/NarendarPaindla",
        live: "#",
        category: "Full Stack",
        featured: true,
    },
    {
        id: 2,
        title: "Real-Time Smart Donation Platform",
        description: "A MERN stack charitable platform enabling real-time donations, request prioritization, appointment booking, and admin moderation with live dashboards and payment integration.",
        tech: ["React", "Node.js", "MongoDB", "Socket.io", "Razorpay", "Express"],
        github: "https://github.com/NarendarPaindla",
        live: "#",
        category: "Full Stack",
        featured: true,
    },
    {
        id: 3,
        title: "AI Interview Overlay Assistant",
        description: "A PyQt6 always-on-top overlay that transcribes system audio via Whisper and answers interview questions in real-time using the Gemini API. Excluded from screen captures.",
        tech: ["Python", "PyQt6", "Whisper AI", "Gemini API", "Threading"],
        github: "https://github.com/NarendarPaindla",
        live: "#",
        category: "AI/ML",
        featured: true,
    },
    {
        id: 4,
        title: "Enterprise Academic Platform",
        description: "A scalable academic management system built with Spring Boot and React.js, featuring RESTful APIs, MySQL persistence, and modular clean architecture for university workflows.",
        tech: ["Spring Boot", "React.js", "MySQL", "Java", "REST APIs"],
        github: "https://github.com/NarendarPaindla",
        live: "#",
        category: "Full Stack",
        featured: false,
    },
    {
        id: 5,
        title: "EMR Healthcare Module",
        description: "Contributed to an Electronic Medical Records product at EHNOTE — built dynamic appointment and pharmacy modules using AngularJS, digitizing patient record workflows.",
        tech: ["AngularJS", "HTML", "CSS", "JavaScript", "MySQL"],
        github: "https://github.com/NarendarPaindla",
        live: "#",
        category: "Full Stack",
        featured: false,
    },
];

// ===== EXPERIENCE =====
export const experiences: Experience[] = [
    {
        id: 1,
        role: "Full-Stack Developer",
        company: "byteXL",
        period: "Apr 2025 – Present",
        type: "full-time",
        description: [
            "Building and maintaining full-stack applications using React.js, Node.js, and Spring Boot for academic and enterprise platforms.",
            "Designing RESTful APIs and backend services with clean architecture and modular development practices.",
            "Working on database modeling and optimization using MySQL and MongoDB.",
            "Collaborating with academic and product teams to deliver high-performance learning platforms.",
            "Mentoring learners and contributing to technical curriculum enhancements.",
        ],
        metrics: [
            { label: "Stack Covered", value: "Full-Stack" },
            { label: "Platform Scale", value: "10K+ Users" },
            { label: "DB Systems", value: "MySQL + Mongo" },
        ],
        tech: ["React.js", "Node.js", "Spring Boot", "Java", "Python", "MySQL", "MongoDB", "REST APIs"],
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Virocs Soft Pvt. Ltd.",
        period: "Nov 2024 – Apr 2025",
        type: "full-time",
        description: [
            "Developed scalable enterprise applications using Spring Boot and React.js.",
            "Integrated AWS services for deployment, scalability, and cloud infrastructure management.",
            "Followed agile methodologies with sprint planning, daily standups, and retrospectives.",
            "Set up CI/CD workflows and contributed to system optimization and code reviews.",
        ],
        metrics: [
            { label: "Cloud Provider", value: "AWS" },
            { label: "Methodology", value: "Agile/Scrum" },
            { label: "Delivery", value: "CI/CD" },
        ],
        tech: ["Spring Boot", "React.js", "AWS", "Git", "CI/CD"],
    },
    {
        id: 3,
        role: "Technical Trainer (CRT – Freelance)",
        company: "Freelance",
        period: "May 2023 – Oct 2024",
        type: "freelance",
        description: [
            "Delivered intensive College Recruitment Training (CRT) in Java, Python, and Data Structures & Algorithms.",
            "Conducted hands-on DSA training sessions focused on algorithmic thinking and optimization.",
            "Mentored students for HackerRank, LeetCode, and campus placement coding rounds.",
            "Improved placement readiness through structured mock interviews and problem-solving bootcamps.",
        ],
        metrics: [
            { label: "Students Trained", value: "500+" },
            { label: "Placement Rate", value: "88%" },
            { label: "Topics", value: "DSA · OOP · Java" },
        ],
        tech: ["Java", "Python", "DSA", "OOP", "Problem Solving", "REST", "Microservices"],
    },
    {
        id: 4,
        role: "Teaching Assistant",
        company: "Coding Ninjas",
        period: "Dec 2023 – Mar 2024",
        type: "teaching",
        description: [
            "Supported backend and system design learners by debugging real-world codebases.",
            "Guided scalable architecture discussions and helped students understand distributed systems.",
            "Resolved doubts on Core Java, JavaScript, and system design patterns via doubt sessions.",
        ],
        metrics: [
            { label: "Mode", value: "Remote" },
            { label: "Domain", value: "System Design" },
        ],
        tech: ["Core Java", "JavaScript", "System Design"],
    },
    {
        id: 5,
        role: "Internship Trainee",
        company: "EnH",
        period: "Feb 2023 – Oct 2023",
        type: "full-time",
        description: [
            "Trained in enterprise software development using Java and MySQL under industry mentors.",
            "Worked on Linux-based environments and understood production deployment workflows.",
        ],
        metrics: [
            { label: "Location", value: "Hyderabad" },
            { label: "Stack", value: "Java · MySQL" },
        ],
        tech: ["Java", "MySQL", "Linux"],
    },
    {
        id: 6,
        role: "Frontend Developer Intern",
        company: "EHNOTE",
        period: "May 2022 – Jun 2022",
        type: "full-time",
        description: [
            "Contributed to an EMR Healthcare Product for digitizing patient records and appointment modules.",
            "Developed dynamic forms using HTML, CSS, and AngularJS for appointment and pharmacy workflows.",
            "Assisted in product demo sessions and followed a daily task-based execution model.",
        ],
        metrics: [
            { label: "Domain", value: "Healthcare EMR" },
            { label: "Location", value: "Hyderabad" },
        ],
        tech: ["HTML", "CSS", "AngularJS", "JavaScript", "MySQL", "Git"],
    },
];

// ===== SKILLS =====
export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend Mastery",
        color: "blue",
        skills: [
            { name: "React.js", level: 92, icon: "⚛️" },
            { name: "TypeScript", level: 85, icon: "🔷" },
            { name: "JavaScript", level: 90, icon: "🟨" },
            { name: "TailwindCSS", level: 88, icon: "🎨" },
            { name: "AngularJS", level: 75, icon: "🅰️" },
            { name: "HTML5 / CSS3", level: 96, icon: "🌐" },
        ],
    },
    {
        category: "Backend Engineering",
        color: "purple",
        skills: [
            { name: "Node.js / Express", level: 88, icon: "🟢" },
            { name: "Spring Boot", level: 85, icon: "🍃" },
            { name: "Java", level: 87, icon: "☕" },
            { name: "Python", level: 80, icon: "🐍" },
            { name: "REST APIs", level: 92, icon: "🔗" },
            { name: "Microservices", level: 78, icon: "⚙️" },
        ],
    },
    {
        category: "Databases",
        color: "cyan",
        skills: [
            { name: "MongoDB", level: 88, icon: "🍃" },
            { name: "MySQL", level: 85, icon: "🐬" },
        ],
    },
    {
        category: "DevOps & Cloud",
        color: "blue",
        skills: [
            { name: "AWS", level: 75, icon: "☁️" },
            { name: "Docker", level: 72, icon: "🐳" },
            { name: "Git", level: 93, icon: "🔧" },
            { name: "CI/CD", level: 76, icon: "🚀" },
        ],
    },
    {
        category: "Core CS",
        color: "purple",
        skills: [
            { name: "Data Structures & Algorithms", level: 88, icon: "🧠" },
            { name: "Object-Oriented Programming", level: 92, icon: "📦" },
            { name: "System Design", level: 82, icon: "🏗️" },
            { name: "Clean Architecture", level: 80, icon: "📐" },
        ],
    },
];

// ===== CERTIFICATES =====
export const certificates: Certificate[] = [
    {
        id: 1,
        title: "Full Stack Web Development",
        issuer: "Coursera / Meta",
        issuerIcon: "🎓",
        date: "2023",
        credentialId: "META-FSW-2023",
        description: "Comprehensive Meta-certified program covering React, Node.js, databases, version control, and cloud deployment practices.",
        link: "#",
    },
    {
        id: 2,
        title: "MongoDB Developer Certification",
        issuer: "MongoDB University",
        issuerIcon: "🍃",
        date: "2023",
        credentialId: "MDB-DEV-2023",
        description: "MongoDB Professional certification validating expertise in aggregation pipelines, indexing, schema design, and performance optimization.",
        link: "#",
    },
    {
        id: 3,
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        issuerIcon: "☁️",
        date: "2022",
        credentialId: "AWS-CLP-2022",
        description: "AWS foundational certification covering core cloud concepts, security, pricing, and global infrastructure.",
        link: "#",
    },
    {
        id: 4,
        title: "React Developer Certification",
        issuer: "Scrimba / FreeCodeCamp",
        issuerIcon: "⚛️",
        date: "2022",
        credentialId: "REACT-DEV-2022",
        description: "In-depth React certification covering hooks, context, performance optimization, and real-world project architecture.",
        link: "#",
    },
    {
        id: 5,
        title: "Docker & Kubernetes Fundamentals",
        issuer: "KodeKloud",
        issuerIcon: "🐳",
        date: "2023",
        credentialId: "KK-DK-2023",
        description: "Hands-on certification covering container lifecycle, Docker Compose, Kubernetes orchestration, and CI/CD integration.",
        link: "#",
    },
    {
        id: 6,
        title: "System Design Interview Prep",
        issuer: "Educative / ByteByteGo",
        issuerIcon: "🏗️",
        date: "2024",
        credentialId: "SD-BBG-2024",
        description: "Advanced system design patterns for distributed systems, scalability, load balancing, caching, and real-world architecture decisions.",
        link: "#",
    },
];

// ===== SOCIAL LINKS =====
export const socialLinks = [
    { name: "GitHub", url: "https://github.com/NarendarPaindla", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/narendar-paindla", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/narendar", icon: "twitter" },
    { name: "YouTube", url: "https://youtube.com/@narendar", icon: "youtube" },
];

// ===== CAREER TIMELINE =====
export const careerTimeline = [
    { year: "2022", event: "Frontend Developer Intern — EHNOTE · Foundation in Frontend", icon: "🌐" },
    { year: "2023", event: "Internship Trainee — EnH · Backend & Systems Learning", icon: "☕" },
    { year: "2023", event: "Technical Trainer (CRT) — Freelance · Educator & Mentor Phase", icon: "🧑‍🏫" },
    { year: "2023", event: "Teaching Assistant — Coding Ninjas · System Design Mentoring", icon: "📚" },
    { year: "2024", event: "Software Engineer — Virocs Soft Pvt. Ltd. · Enterprise Engineering", icon: "🏢" },
    { year: "2025", event: "Full-Stack Developer — byteXL · Full-Stack Leadership", icon: "🚀" },
];
