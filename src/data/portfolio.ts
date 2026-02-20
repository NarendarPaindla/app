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
        github: "https://github.com/narendar",
        live: "#",
        category: "Full Stack",
        featured: true,
    },
    {
        id: 2,
        title: "Real-Time Smart Donation Platform",
        description: "A MERN stack charitable platform enabling real-time donations, request prioritization, appointment booking, and admin moderation with live dashboards and payment integration.",
        tech: ["React", "Node.js", "MongoDB", "Socket.io", "Razorpay", "Express"],
        github: "https://github.com/narendar",
        live: "#",
        category: "Full Stack",
        featured: true,
    },
    {
        id: 3,
        title: "AI Interview Overlay Assistant",
        description: "A PyQt6 always-on-top overlay that transcribes system audio via Whisper and answers interview questions in real-time using the Gemini API. Excluded from screen captures.",
        tech: ["Python", "PyQt6", "Whisper AI", "Gemini API", "Threading"],
        github: "https://github.com/narendar",
        live: "#",
        category: "AI/ML",
        featured: true,
    },
    {
        id: 4,
        title: "ZomatoOmni – Food Delivery Platform",
        description: "A monorepo food delivery system with separate user, restaurant, admin, and delivery apps, all powered by a unified Node.js backend with real-time order tracking.",
        tech: ["React", "Node.js", "MongoDB", "Vite", "Express", "JWT"],
        github: "https://github.com/narendar",
        live: "#",
        category: "Full Stack",
        featured: false,
    },
    {
        id: 5,
        title: "DMart Billing Desktop App",
        description: "A .NET MAUI cross-platform desktop billing application with SQLite, MVVM architecture, inventory management, and keyboard-only navigation optimized for 1920×1080.",
        tech: [".NET MAUI", "C#", "SQLite", "Entity Framework", "MVVM"],
        github: "https://github.com/narendar",
        live: "#",
        category: "Desktop",
        featured: false,
    },
];

// ===== EXPERIENCE =====
export const experiences: Experience[] = [
    {
        id: 1,
        role: "Full Stack Engineer & Technical Educator",
        company: "Independent / Freelance",
        period: "2022 – Present",
        type: "teaching",
        description: [
            "Designed and delivered full-stack curriculum covering MERN stack, system design, Docker, and cloud architecture.",
            "Mentored 1000+ learners from zero to job-ready engineers through structured bootcamps and 1:1 sessions.",
            "Created 200+ hours of hands-on project-based learning content with real-world industry use cases.",
            "Guided students to land roles at companies like TCS, Infosys, startups, and top tech firms.",
        ],
        metrics: [
            { label: "Learners Impacted", value: "1000+" },
            { label: "Hours of Content", value: "200+" },
            { label: "Success Rate", value: "92%" },
        ],
        tech: ["React", "Node.js", "MongoDB", "Docker", "System Design", "PostgreSQL"],
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Product Startup",
        period: "2021 – 2022",
        type: "full-time",
        description: [
            "Built scalable REST APIs and real-time features using Node.js and Socket.io for a SaaS platform.",
            "Architected the frontend with React and TypeScript, reducing load time by 40%.",
            "Implemented CI/CD pipelines using Docker and GitHub Actions for zero-downtime deployments.",
            "Led integration of third-party payment gateways (Razorpay, Stripe) and auth providers.",
        ],
        metrics: [
            { label: "Performance Improvement", value: "40%" },
            { label: "APIs Built", value: "50+" },
            { label: "Uptime Achieved", value: "99.9%" },
        ],
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis"],
    },
    {
        id: 3,
        role: "Software Developer Intern",
        company: "Tech Company",
        period: "2020 – 2021",
        type: "full-time",
        description: [
            "Developed frontend components using React and collaborated on REST API design.",
            "Wrote unit and integration tests reducing bug rollback rate by 35%.",
            "Participated in agile sprints, code reviews, and cross-team technical discussions.",
        ],
        metrics: [
            { label: "Bug Reduction", value: "35%" },
            { label: "Components Built", value: "30+" },
        ],
        tech: ["React", "JavaScript", "Node.js", "MySQL", "Jest"],
    },
];

// ===== SKILLS =====
export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        color: "blue",
        skills: [
            { name: "React / Next.js", level: 95, icon: "⚛️" },
            { name: "TypeScript", level: 90, icon: "🔷" },
            { name: "TailwindCSS", level: 92, icon: "🎨" },
            { name: "Framer Motion", level: 85, icon: "✨" },
            { name: "HTML / CSS", level: 98, icon: "🌐" },
        ],
    },
    {
        category: "Backend",
        color: "purple",
        skills: [
            { name: "Node.js / Express", level: 93, icon: "🟢" },
            { name: "MongoDB", level: 90, icon: "🍃" },
            { name: "PostgreSQL", level: 82, icon: "🐘" },
            { name: "REST APIs / GraphQL", level: 88, icon: "🔗" },
            { name: "Socket.io", level: 85, icon: "⚡" },
        ],
    },
    {
        category: "DevOps & Tools",
        color: "cyan",
        skills: [
            { name: "Docker / Kubernetes", level: 80, icon: "🐳" },
            { name: "Git / GitHub", level: 95, icon: "🔧" },
            { name: "CI/CD Pipelines", level: 78, icon: "🚀" },
            { name: "Python", level: 80, icon: "🐍" },
            { name: "System Design", level: 88, icon: "🏗️" },
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
    { name: "GitHub", url: "https://github.com/narendar", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/narendar-reddy", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/narendar", icon: "twitter" },
    { name: "YouTube", url: "https://youtube.com/@narendar", icon: "youtube" },
];

// ===== CAREER TIMELINE =====
export const careerTimeline = [
    { year: "2019", event: "Started B.Tech in Computer Science", icon: "🎓" },
    { year: "2020", event: "First React project – fell in love with the web", icon: "⚛️" },
    { year: "2021", event: "Software Developer Intern – shipped production code", icon: "💼" },
    { year: "2022", event: "Full Stack Engineer – built SaaS products", icon: "🚀" },
    { year: "2023", event: "Started mentoring – 500+ students", icon: "🧑‍🏫" },
    { year: "2024", event: "1000+ learners impacted – courses & bootcamps", icon: "🌟" },
];
