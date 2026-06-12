import { EXPERIENCE } from "../../data/portfolio";

export function ExperienceWindow() {
    return (
        <div data-testid="experience-window">
            <div className="font-pixel text-3xl text-olive-deep mb-4">~/experience</div>
            <div className="relative pl-6">
                <div className="absolute left-2 top-1 bottom-1 w-[2px] bg-ink" />
                {EXPERIENCE.map((e, i) => (
                    <div key={i} className="relative mb-5">
                        <div className="absolute -left-[18px] top-1 w-3.5 h-3.5 bg-coral border-2 border-ink" />
                        <div className="bg-bone border-2 border-ink shadow-retro-sm p-3">
                            <div className="flex flex-wrap items-baseline justify-between gap-1">
                                <div className="font-pixel text-2xl text-ink leading-none">{e.role}</div>
                                <div className="font-mono text-xs text-olive-deep">{e.period}</div>
                            </div>
                            <div className="font-mono text-sm text-coral">{e.company}</div>
                            <ul className="mt-2 list-disc list-inside text-sm text-ink-soft space-y-1">
                                {e.bullets.map((b, k) => <li key={k}>{b}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
