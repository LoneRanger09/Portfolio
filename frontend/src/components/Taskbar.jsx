import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon, Search } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export function Taskbar({ openWindows, onRestore, onToggleTheme, theme, visitors, onOpenSearch }) {
    return (
        <div
            data-testid="taskbar"
            className="taskbar absolute bottom-0 left-0 right-0 h-14 pl-3 pr-3 sm:pl-4 sm:pr-[210px] flex items-center gap-2 sm:gap-3 z-[100]"
        >
            <button
                data-testid="taskbar-start"
                onClick={onOpenSearch}
                className="font-pixel text-2xl text-cream bg-olive-dark border-2 border-ink px-3 py-0.5 shadow-retro-sm hover:bg-olive-deep flex items-center gap-2"
                title="Open command palette (Ctrl+K)"
            >
                <span>▣</span>
                <span className="hidden sm:inline">START</span>
            </button>

            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto flex-1">
                {openWindows.map((w) => (
                    <motion.button
                        key={w.id}
                        data-testid={`taskbar-window-${w.id}`}
                        onClick={() => onRestore(w.id)}
                        whileHover={{ y: -1 }}
                        className={`shrink-0 px-2.5 py-1 text-xs sm:text-sm font-mono border-2 border-ink ${
                            w.state === "minimized" ? "bg-bone/70" : "bg-cream"
                        } text-ink shadow-retro-sm`}
                    >
                        {w.title}
                    </motion.button>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-2 text-cream font-pixel text-lg">
                <a data-testid="taskbar-github" href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-mustard">
                    <Github className="w-5 h-5" />
                </a>
                <a data-testid="taskbar-linkedin" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-mustard">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a data-testid="taskbar-mail" href={`mailto:${PROFILE.email}`} className="hover:text-mustard">
                    <Mail className="w-5 h-5" />
                </a>
            </div>

            <button
                data-testid="taskbar-search"
                onClick={onOpenSearch}
                className="hidden sm:inline-flex items-center gap-1 text-cream bg-olive-dark border-2 border-ink px-2 py-1 font-mono text-xs shadow-retro-sm"
                title="Ctrl+K"
            >
                <Search className="w-4 h-4" /> Ctrl+K
            </button>

            <div
                data-testid="visitor-pill"
                className="hidden sm:flex items-center font-mono text-xs text-cream bg-olive-deep border-2 border-ink px-2 py-1 shadow-retro-sm"
                title={`Visitors today: ${visitors?.today ?? 0}`}
            >
                visitors&nbsp;
                <span className="text-mustard">{visitors?.count ?? "—"}</span>
            </div>

            <button
                data-testid="taskbar-theme"
                onClick={onToggleTheme}
                className="win-btn bg-cream"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? <Sun className="w-3 h-3" strokeWidth={3} /> : <Moon className="w-3 h-3" strokeWidth={3} />}
            </button>
        </div>
    );
}
