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
    const endRef = useRef(null);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [history]);

    const run = (raw) => {
        const cmd = raw.trim().toLowerCase();
        const out = (text) => setHistory((h) => [...h, { type: "in", text: raw }, { type: "out", text }]);
        const push = (text) => setHistory((h) => [...h, { type: "out", text }]);

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
        <div data-testid="terminal-window" className="relative crt bg-term-bg text-term-text font-mono text-sm p-4 min-h-[320px] h-full">
            <div className="font-pixel text-cream text-2xl mb-2">arnav@portfolio:~$</div>
            <div className="space-y-0.5">
                {history.map((h, i) =>
                    h.type === "in" ? (
                        <div key={i}><span className="text-mustard">$</span> {h.text}</div>
                    ) : (
                        <pre key={i} className="whitespace-pre-wrap text-term-text">{h.text}</pre>
                    )
                )}
                <form
                    onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }}
                    className="flex items-center gap-2"
                >
                    <span className="text-mustard">$</span>
                    <input
                        data-testid="terminal-input"
                        autoFocus
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-term-text caret-term-text"
                    />
                </form>
                <div ref={endRef} />
            </div>
        </div>
    );
}
