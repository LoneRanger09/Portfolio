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
        "https://api.dicebear.com/7.x/avataaars/svg?seed=ArnavKumar&backgroundColor=E9C46A,F9F6F0,E07A5F&radius=50",
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
        id: "ai-resume",
        title: "AI Resume Analyzer",
        description:
            "NLP-based resume scoring tool that highlights missing keywords, role fit, and improvement tips powered by a custom Python pipeline.",
        stack: ["Python", "NLP", "scikit-learn", "FastAPI", "React"],
        github: "https://github.com/arnavkumar/ai-resume-analyzer",
        demo: "https://example.com/ai-resume",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "placement-portal",
        title: "Full-Stack Placement Portal",
        description:
            "End-to-end placement workflow for a university — student onboarding, recruiter pipelines, interview rounds, analytics dashboards.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/arnavkumar/placement-portal",
        demo: "https://example.com/placement",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "leetcode-tracker",
        title: "LeetCode Tracker",
        description:
            "Track daily LeetCode streaks, topic-wise heatmaps, and contest history. Connects to public LeetCode APIs.",
        stack: ["Next.js", "REST APIs", "Tailwind"],
        github: "https://github.com/arnavkumar/leetcode-tracker",
        demo: "https://example.com/lc-tracker",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "chat-app",
        title: "Realtime Chat Application",
        description:
            "Channels, DMs, typing indicators, presence — built with Socket.io and a React front-end with optimistic updates.",
        stack: ["React", "Socket.io", "Node.js"],
        github: "https://github.com/arnavkumar/chat-app",
        demo: "https://example.com/chat",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=70",
    },
    {
        id: "expense-tracker",
        title: "MERN Expense Tracker",
        description:
            "Personal finance tracker with categories, budgets, monthly insights, and CSV export — secure auth and JWT sessions.",
        stack: ["MongoDB", "Express", "React", "Node"],
        github: "https://github.com/arnavkumar/expense-tracker",
        demo: "https://example.com/expense",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=70",
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
    { icon: "🏆", title: "500+ LeetCode Problems", detail: "Across topics and contests" },
    { icon: "⭐", title: "5★ HackerRank", detail: "Problem Solving + Java" },
    { icon: "🥇", title: "Hackathon Finalist", detail: "Top-10 university level" },
    { icon: "🚀", title: "Top 10 Coding Contest", detail: "SLIET annual coding meet" },
    { icon: "🌿", title: "Open Source Contributor", detail: "20+ PRs merged" },
    { icon: "📄", title: "Research Paper", detail: "ML for academic prediction" },
];

export const CERTIFICATIONS = [
    { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { title: "Google Data Analytics", issuer: "Coursera / Google", year: "2024" },
    { title: "Meta Frontend Developer", issuer: "Coursera / Meta", year: "2025" },
    { title: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2025" },
    { title: "Python for Everybody", issuer: "University of Michigan", year: "2023" },
];

export const ICONS = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
    { id: "terminal", label: "Terminal" },
    { id: "recruiter", label: "Recruiter Mode" },
];
