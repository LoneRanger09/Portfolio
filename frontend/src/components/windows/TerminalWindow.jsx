import { useEffect, useRef, useState } from "react";
import { PROFILE } from "../../data/portfolio";

const HELP = [
    "available commands:",
    "  help         — show this list",
    "  about        — open About window",
    "  skills       — open Skills window",
    "  projects     — open Projects window",
    "  experience   — open Experience window",
    "  certs        — open Certifications",
    "  achievements — open Achievements",
    "  resume       — open Resume",
    "  contact      — open Contact",
    "  recruiter    — open Recruiter Mode",
    "  whoami       — print short bio",
    "  date         — current date/time",
    "  clear        — clear the screen",
];

export function TerminalWindow({ onCommand }) {
    const [history, setHistory] = useState([
        { type: "out", text: `arnav-os 0.26 — type 'help' to see commands` },
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll only the terminal's own container (not the page/window).
    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [history]);

    const run = (raw) => {
        const cmd = raw.trim().toLowerCase();
        const out = (text) => setHistory((h) => [...h, { type: "in", text: raw }, { type: "out", text }]);

        if (!cmd) {
            setHistory((h) => [...h, { type: "in", text: "" }]);
            return;
        }
        const map = {
            about: "about", skills: "skills", projects: "projects", experience: "experience",
            certs: "certifications", certifications: "certifications", achievements: "achievements",
            resume: "resume", contact: "contact", recruiter: "recruiter",
        };
        if (cmd === "help") return out(HELP.join("\n"));
        if (cmd === "clear" || cmd === "cls") return setHistory([]);
        if (cmd === "whoami") return out(`${PROFILE.name} · ${PROFILE.universityShort} · ${PROFILE.graduation}`);
        if (cmd === "date") return out(new Date().toString());
        if (map[cmd]) {
            setHistory((h) => [...h, { type: "in", text: raw }, { type: "out", text: `opening ${map[cmd]}…` }]);
            onCommand(map[cmd]);
            return;
        }
        out(`command not found: ${raw}. type 'help'`);
    };

    return (
        <div
            data-testid="terminal-window"
            className="relative crt bg-term-bg text-term-text font-mono text-sm h-full flex flex-col min-h-[320px]"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="px-4 pt-4 pb-1 font-pixel text-cream text-2xl shrink-0">
                arnav@portfolio:~$
            </div>

            {/* Scrollable history — only this scrolls */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto win-scroll px-4 space-y-0.5"
                style={{ overscrollBehavior: "contain" }}
            >
                {history.map((h, i) =>
                    h.type === "in" ? (
                        <div key={i}><span className="text-mustard">$</span> {h.text}</div>
                    ) : (
                        <pre key={i} className="whitespace-pre-wrap text-term-text m-0">{h.text}</pre>
                    )
                )}
            </div>

            {/* Sticky input row */}
            <form
                onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }}
                className="flex items-center gap-2 px-4 py-2 border-t border-term-text/30 shrink-0"
            >
                <span className="text-mustard">$</span>
                <input
                    ref={inputRef}
                    data-testid="terminal-input"
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-term-text caret-term-text"
                />
            </form>
        </div>
    );
}
