// Centralized personal data — edit these to update the whole portfolio.
export const PROFILE = {
    name: "Arnav Kumar",
    role: "Computer Science Engineering Student",
    university: "Sant Longowal Institute of Engineering and Technology",
    universityShort: "SLIET",
    graduation: "Batch '26",
    location: "Punjab, India",
    email: "arnavkumar1530@gmail.com",
    phone: "+91 8298114387",
    intro:
        "I am a Computer Science Engineering student passionate about software development, AI, machine learning, Web technologies, and solving real-world problems through technology.",
    avatar:
        "/profile.png",
    socials: {
        github: "https://github.com/LoneRanger09",
        linkedin: "https://www.linkedin.com/in/arnav-kumar-4aa662336/",
        CodeChef: "https://www.codechef.com/users/captaincode09"
    },
};

export const SKILLS = [
    {
        category: "Programming Languages",
        items: [
            { name: "Python", level: 85 },
            { name: "Java", level: 76 },
            { name: "C++", level: 60 },
            { name: "TypeScript", level: 55 },
        ],
    },
    {
        category: "Frontend",
        items: [
            { name: "HTML / CSS", level: 92 },
            { name: "Angular", level: 80 },
            { name: "Tailwind CSS", level: 86 },
            { name: "React", level: 70 },
        ],
    },
    {
        category: "Backend & DB",
        items: [
            { name: "MySQL", level: 82 },
            { name: "Node.js / Express", level: 50 },
            { name: "REST APIs", level: 50 },
            { name: "MongoDB", level: 45 },
            { name: "PostgreSQL", level: 30 },
            
        ],
    },
    {
        category: "CS Fundamentals",
        items: [
            { name: "OOP", level: 80 },
            { name: "Operating Systems", level: 72 },
            { name: "Computer Networks", level: 70 },
            { name: "DBMS", level: 70 },
            { name: "Data Structures", level: 55 },
            { name: "Algorithms", level: 20 },
        ],
    },
    {
        category: "AI / ML",
        items: [
            { name: "Python (ML)", level: 80 },
            { name: "Pandas / NumPy", level: 78 },
            { name: "Scikit-learn", level: 58 },
            { name: "TensorFlow", level: 45 },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "VS Code", level: 95 },
            { name: "Git / GitHub", level: 88 },
            { name: "Linux", level: 75 },
            { name: "Figma", level: 70 },
            { name: "Docker", level: 60 },
        ],
    },
];

export const PROJECTS = [
    {
        id: "invoice-generator",
        title: "Invoice Generator",
        description:
            "A web-based invoice generator enabling users to create, customize, and download professional PDF invoices with real-time tax/discount calculations.",
        stack: ["React", "Node.js", "Tailwind CSS", "jsPDF"],
        github: "https://github.com/LoneRanger09/invoice-generator",
        demo: "https://example.com/invoice-generator",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "url-shortener",
        title: "URL Shortener",
        description:
            "A fast URL shortening service featuring click metrics tracking, custom alias generation, and QR codes for simplified link sharing.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/LoneRanger09/url-shortener",
        demo: "https://example.com/url-shortener",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=70",
    },
];

export const EXPERIENCE = [
    {
        role: "Software Development Intern",
        company: "Vaizle - Your Marketing Analyst",
        period: "Summer 2025",
        bullets: [
            "Built responsive web applications with Angular .",
            "Improved page-load performance by 38% via code-splitting and lazy routes.",
            "Collaborated with a 6-person team using Git",
        ],
    },
    {
        role: "Robotics",
        company: "Endeavour Robotics Club, SLIET",
        period: "2023 — Present",
        bullets: [
            "Designed and programmed autonomous robots for national competitions using C++ and Arduino.",
            "Led a team of 4 in the Plasma Pull event, achieving 1st place at the university level.",
        ],
    },

];

export const ACHIEVEMENTS = [
    { icon: "🥇", title: "First Place", detail: "Techfest, IIT Roorkee" },
];

export const CERTIFICATIONS = [];

export const ICONS = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    // { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
    { id: "terminal", label: "Terminal" },
    { id: "recruiter", label: "Recruiter Mode" },
];
