import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { ICONS, PROFILE } from "../data/portfolio";
import { DesktopIcon } from "./DesktopIcon";
import { Window } from "./Window";
import { Taskbar } from "./Taskbar";
import { CalendarCounter } from "./CalendarCounter";
import { LoadingScreen } from "./LoadingScreen";
import { CommandPalette } from "./CommandPalette";

import { AboutWindow } from "./windows/AboutWindow";
import { SkillsWindow } from "./windows/SkillsWindow";
import { ProjectsWindow, ProjectDetailWindow } from "./windows/ProjectsWindow";
import { ExperienceWindow } from "./windows/ExperienceWindow";
import { AchievementsWindow } from "./windows/AchievementsWindow";
import { CertificationsWindow } from "./windows/CertificationsWindow";
import { ResumeWindow } from "./windows/ResumeWindow";
import { ContactWindow } from "./windows/ContactWindow";
import { TerminalWindow } from "./windows/TerminalWindow";
import { RecruiterWindow } from "./windows/RecruiterWindow";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const WIN_TITLES = {
    about: "about.md",
    skills: "skills.exe",
    projects: "projects/",
    experience: "experience.log",
    certifications: "certificates/",
    achievements: "achievements.txt",
    resume: "resume.pdf",
    contact: "contact.form",
    terminal: "terminal",
    recruiter: "recruiter.mode",
};

const DEFAULT_SIZE = { width: 760, height: 500 };
const SIZES = {
    terminal: { width: 640, height: 420 },
    about: { width: 720, height: 460 },
    resume: { width: 640, height: 540 },
    contact: { width: 680, height: 460 },
    recruiter: { width: 880, height: 600 },
};

export default function Desktop() {
    const desktopRef = useRef(null);
    const [windows, setWindows] = useState([]); // {id, title, state, z, project?}
    const [zTop, setZTop] = useState(10);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light");
    const [visitors, setVisitors] = useState(null);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const [typed, setTyped] = useState("");

    // Typing animation in hero
    useEffect(() => {
        const phrase = `> hello, i'm ${PROFILE.name}. welcome to my desktop.`;
        let i = 0;
        const id = setInterval(() => {
            i++;
            setTyped(phrase.slice(0, i));
            if (i >= phrase.length) clearInterval(id);
        }, 45);
        return () => clearInterval(id);
    }, []);

    // Visitor counter — register once per session
    useEffect(() => {
        const key = "arnav-visited";
        const run = async () => {
            try {
                if (!sessionStorage.getItem(key)) {
                    const { data } = await axios.post(`${API}/visitor`);
                    sessionStorage.setItem(key, "1");
                    setVisitors(data);
                } else {
                    const { data } = await axios.get(`${API}/visitor`);
                    setVisitors(data);
                }
            } catch (e) {
                // Silent fallback — non-critical
            }
        };
        run();
    }, []);

    // Theme persistence
    useEffect(() => {
        const saved = localStorage.getItem("arnav-theme") || "light";
        setTheme(saved);
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("arnav-theme", theme);
    }, [theme]);

    const openWindow = useCallback((id, extra = {}) => {
        setWindows((prev) => {
            const existing = prev.find((w) => w.id === id);
            const nextZ = zTop + 1;
            if (existing) {
                return prev.map((w) => (w.id === id ? { ...w, state: "open", z: nextZ, ...extra } : w));
            }
            return [...prev, { id, title: extra.title || WIN_TITLES[id] || id, state: "open", z: nextZ, ...extra }];
        });
        setZTop((z) => z + 1);
    }, [zTop]);

    const closeWindow = (id) => setWindows((w) => w.filter((x) => x.id !== id));
    const minimizeWindow = (id) => setWindows((w) => w.map((x) => (x.id === id ? { ...x, state: "minimized" } : x)));
    const toggleMax = (id) =>
        setWindows((w) => w.map((x) => (x.id === id ? { ...x, state: x.state === "maximized" ? "open" : "maximized" } : x)));
    const focusWindow = (id) => {
        const nextZ = zTop + 1;
        setWindows((w) => w.map((x) => (x.id === id ? { ...x, z: nextZ, state: x.state === "minimized" ? "open" : x.state } : x)));
        setZTop((z) => z + 1);
    };
    const restoreFromTaskbar = (id) => focusWindow(id);

    const openProject = (project) => {
        const id = `project-${project.id}`;
        openWindow(id, { title: `${project.title.toLowerCase()}.proj`, project });
    };

    const renderBody = (w) => {
        switch (w.id) {
            case "about": return <AboutWindow />;
            case "skills": return <SkillsWindow />;
            case "projects": return <ProjectsWindow onOpenProject={openProject} />;
            case "experience": return <ExperienceWindow />;
            case "achievements": return <AchievementsWindow />;
            case "certifications": return <CertificationsWindow />;
            case "resume": return <ResumeWindow />;
            case "contact": return <ContactWindow />;
            case "terminal":
                return <TerminalWindow onCommand={(cmd) => openWindow(cmd)} />;
            case "recruiter": return <RecruiterWindow onOpen={openWindow} />;
            default:
                if (w.project) return <ProjectDetailWindow project={w.project} />;
                return null;
        }
    };

    const initialPosFor = (i) => {
        const base = window.innerWidth < 640 ? { x: 8, y: 60 } : { x: 80 + (i % 4) * 28, y: 64 + (i % 4) * 24 };
        return base;
    };

    return (
        <div className="w-screen h-screen relative overflow-hidden bg-desktop dark:bg-[#1f2218]">
            {loading && <LoadingScreen onDone={() => setLoading(false)} />}

            <div
                ref={desktopRef}
                data-testid="desktop"
                className="desktop-grid relative w-full h-full"
            >
                {/* Hero title */}
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-3 left-4 sm:left-8 z-10 select-none"
                >
                    <div className="font-pixel text-5xl sm:text-7xl text-olive-deep leading-none tracking-wider">PORTFOLIO</div>
                    <div className="font-mono text-xs sm:text-sm text-ink-soft mt-1 max-w-[60vw]">
                        <span className="text-coral">{typed}</span>
                        <span className="animate-blink">_</span>
                    </div>
                </motion.div>

                {/* Calendar visitor counter */}
                <CalendarCounter visitors={visitors} />

                {/* Desktop icons grid */}
                <div
                    data-testid="icons-grid"
                    className="absolute inset-0 pt-32 sm:pt-40 pb-20 px-4 sm:px-10 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-y-6 gap-x-3 content-start justify-items-center"
                >
                    {ICONS.map((ic, i) => (
                        <DesktopIcon key={ic.id} id={ic.id} label={ic.label} onOpen={openWindow} index={i} />
                    ))}
                </div>

                {/* Windows */}
                <AnimatePresence>
                    {windows.map((w, i) => {
                        const size = SIZES[w.id] || DEFAULT_SIZE;
                        const pos = initialPosFor(i);
                        return (
                            <Window
                                key={w.id}
                                id={w.id}
                                title={w.title}
                                state={w.state}
                                zIndex={w.z}
                                constraintsRef={desktopRef}
                                initial={{ ...pos, ...size }}
                                onFocus={() => focusWindow(w.id)}
                                onClose={() => closeWindow(w.id)}
                                onMinimize={() => minimizeWindow(w.id)}
                                onMaximize={() => toggleMax(w.id)}
                            >
                                {renderBody(w)}
                            </Window>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Taskbar */}
            <Taskbar
                openWindows={windows}
                onRestore={restoreFromTaskbar}
                onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
                theme={theme}
                visitors={visitors}
                onOpenSearch={() => setPaletteOpen(true)}
            />

            <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} onSelect={openWindow} />
        </div>
    );
}
