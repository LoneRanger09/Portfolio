import { Github, Linkedin, Mail, Download } from "lucide-react";
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, ACHIEVEMENTS } from "../../data/portfolio";

export function RecruiterWindow({ onOpen }) {
    const top = SKILLS.flatMap((c) => c.items.map((i) => ({ ...i, cat: c.category })))
        .sort((a, b) => b.level - a.level).slice(0, 8);
    const bestProjects = PROJECTS.slice(0, 3);

    return (
        <div data-testid="recruiter-window" className="space-y-4">
            <div className="bg-coral text-cream border-2 border-ink shadow-retro-sm p-4">
                <div className="font-pixel text-3xl leading-none">RECRUITER MODE — 60s overview</div>
                <div className="font-mono text-xs mt-1 opacity-95">Everything you need to evaluate {PROFILE.name} on one screen.</div>
            </div>

            <div className="grid sm:grid-cols-[1fr,1.5fr] gap-4">
                <div className="bg-bone border-2 border-ink p-3">
                    <div className="font-pixel text-2xl text-ink leading-none">{PROFILE.name}</div>
                    <div className="text-sm">{PROFILE.role}</div>
                    <div className="text-xs text-ink-soft mt-1">{PROFILE.university}</div>
                    <div className="text-xs text-ink-soft">{PROFILE.graduation} · {PROFILE.location}</div>
                    <div className="mt-3 flex flex-wrap gap-1.5 text-xs font-mono">
                        <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 bg-cream border-2 border-ink"><Github className="w-3 h-3" /> github</a>
                        <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 bg-cream border-2 border-ink"><Linkedin className="w-3 h-3" /> linkedin</a>
                        <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 px-2 py-0.5 bg-cream border-2 border-ink"><Mail className="w-3 h-3" /> email</a>
                        <button onClick={() => onOpen("resume")} className="inline-flex items-center gap-1 px-2 py-0.5 bg-cream border-2 border-ink"><Download className="w-3 h-3" /> resume</button>
                    </div>
                </div>

                <div className="bg-cream border-2 border-ink p-3">
                    <div className="font-pixel text-2xl">Top Skills</div>
                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                        {top.map((s) => (
                            <div key={s.name} className="flex items-center gap-2 text-xs font-mono">
                                <span className="flex-1 truncate">{s.name}</span>
                                <div className="w-20 h-2 border border-ink bg-bone">
                                    <div className="h-full bg-coral" style={{ width: `${s.level}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className="font-pixel text-2xl text-olive-deep mb-2">Best Projects</div>
                <div className="grid sm:grid-cols-3 gap-3">
                    {bestProjects.map((p) => (
                        <div key={p.id} className="bg-cream border-2 border-ink p-2">
                            <div className="aspect-[16/9] bg-bone border-2 border-ink overflow-hidden">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="font-pixel text-lg mt-1">{p.title}</div>
                            <div className="text-[11px] text-ink-soft line-clamp-2">{p.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <div className="font-pixel text-2xl text-olive-deep mb-2">Experience</div>
                    <ul className="space-y-2">
                        {EXPERIENCE.map((e, i) => (
                            <li key={i} className="bg-bone border-2 border-ink p-2">
                                <div className="font-pixel text-lg">{e.role}</div>
                                <div className="text-xs font-mono text-coral">{e.company} · {e.period}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="font-pixel text-2xl text-olive-deep mb-2">Highlights</div>
                    <ul className="grid grid-cols-2 gap-2">
                        {ACHIEVEMENTS.slice(0, 6).map((a, i) => (
                            <li key={i} className="bg-cream border-2 border-ink p-2 flex items-center gap-2">
                                <span className="text-xl">{a.icon}</span>
                                <span className="text-xs font-mono">{a.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
