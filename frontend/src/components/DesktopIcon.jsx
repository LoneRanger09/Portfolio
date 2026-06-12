import { motion } from "framer-motion";
import { Folder, Terminal as TermIcon, BadgeCheck } from "lucide-react";

const ICON_MAP = {
    about: "📁",
    projects: "📁",
    skills: "📁",
    experience: "📁",
    certifications: "📁",
    achievements: "📁",
    resume: "📁",
    contact: "📁",
    terminal: "🖥",
    recruiter: "★",
};

export function DesktopIcon({ id, label, onOpen, index }) {
    const isTerminal = id === "terminal";
    const isRecruiter = id === "recruiter";

    return (
        <motion.button
            type="button"
            data-testid={`desktop-icon-${id}`}
            onDoubleClick={() => onOpen(id)}
            onClick={() => onOpen(id)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.35 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="folder-card group flex flex-col items-center gap-1 w-[88px] sm:w-[100px] focus:outline-none"
        >
            <div className="folder-svg w-[64px] h-[52px] sm:w-[72px] sm:h-[58px] relative flex items-center justify-center">
                {isTerminal ? (
                    <div className="w-full h-full bg-[#1E1E1E] border-2 border-ink shadow-retro-sm flex items-center justify-center">
                        <TermIcon className="w-6 h-6 text-term-text" strokeWidth={2} />
                    </div>
                ) : isRecruiter ? (
                    <div className="w-full h-full bg-coral border-2 border-ink shadow-retro-sm flex items-center justify-center">
                        <BadgeCheck className="w-7 h-7 text-cream" strokeWidth={2} />
                    </div>
                ) : (
                    <FolderShape />
                )}
            </div>
            <span
                data-testid={`desktop-icon-label-${id}`}
                className="font-pixel text-base sm:text-lg leading-none px-1.5 py-0.5 bg-cream/80 border border-ink/30 text-ink group-hover:bg-coral group-hover:text-cream transition-colors"
            >
                {label}
            </span>
        </motion.button>
    );
}

function FolderShape() {
    return (
        <svg viewBox="0 0 80 64" className="w-full h-full drop-shadow-[2px_2px_0_rgba(51,51,51,0.6)]">
            <path
                d="M2 10 L2 56 L78 56 L78 18 L36 18 L30 10 Z"
                fill="#E9C46A"
                stroke="#333"
                strokeWidth="2"
            />
            <rect x="32" y="26" width="22" height="6" fill="#5B7CBE" stroke="#333" strokeWidth="1.5" />
        </svg>
    );
}
