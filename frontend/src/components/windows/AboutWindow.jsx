import { Github, Linkedin, ExternalLink, MapPin, GraduationCap, Calendar } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

export function AboutWindow() {
    return (
        <div data-testid="about-window" className="grid sm:grid-cols-[160px,1fr] gap-5 items-start">
            <div className="flex justify-center sm:justify-start">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-ink shadow-retro bg-bone">
                    <img src={PROFILE.avatar} alt={PROFILE.name} className="w-full h-full object-cover" />
                </div>
            </div>
            <div>
                <div className="font-mono text-xs uppercase tracking-widest text-olive-deep">hi! i&apos;m</div>
                <h2 className="font-pixel text-4xl sm:text-5xl text-coral leading-none mt-1">{PROFILE.name}</h2>
                <div className="mt-1 font-mono text-sm text-ink">{PROFILE.role}</div>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
                    <span className="inline-flex items-center gap-1"><GraduationCap className="w-4 h-4" /> {PROFILE.universityShort}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {PROFILE.graduation}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {PROFILE.location}</span>
                </div>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink">
                    &quot;{PROFILE.intro}&quot;
                </p>

                <div className="mt-5">
                    <div className="font-pixel text-xl text-olive-deep">coding profiles</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        <ProfileLink label="GitHub" href={PROFILE.socials.github} icon={<Github className="w-4 h-4" />} />
                        <ProfileLink label="LinkedIn" href={PROFILE.socials.linkedin} icon={<Linkedin className="w-4 h-4" />} />
                        <ProfileLink label="Codechef" href={PROFILE.socials.CodeChef} icon={<ExternalLink className="w-4 h-4" />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProfileLink({ label, href, icon }) {
    return (
        <a
            data-testid={`profile-link-${label.toLowerCase()}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-bone border-2 border-ink shadow-retro-sm hover:bg-mustard transition-colors font-mono text-xs"
        >
            {icon} {label}
        </a>
    );
}
