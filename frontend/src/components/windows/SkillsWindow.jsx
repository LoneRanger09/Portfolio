import { motion } from "framer-motion";
import { SKILLS } from "../../data/portfolio";

export function SkillsWindow() {
    return (
        <div data-testid="skills-window">
            <div className="font-pixel text-3xl text-olive-deep mb-3">~/skills</div>
            <div className="grid sm:grid-cols-2 gap-5">
                {SKILLS.map((cat) => (
                    <div key={cat.category} data-testid={`skill-cat-${cat.category}`} className="bg-bone border-2 border-ink shadow-retro-sm p-3">
                        <div className="font-pixel text-xl text-ink mb-2">{cat.category}</div>
                        <div className="space-y-2">
                            {cat.items.map((s, i) => (
                                <Bar key={s.name} name={s.name} level={s.level} delay={0.05 * i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Bar({ name, level, delay }) {
    const blocks = 20;
    const filled = Math.round((level / 100) * blocks);
    return (
        <div>
            <div className="flex items-baseline justify-between font-mono text-xs">
                <span>{name}</span>
                <span className="text-ink-soft">{level}%</span>
            </div>
            <div className="mt-1 flex gap-[2px]">
                {Array.from({ length: blocks }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0.2, scaleX: 0.6 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: delay + i * 0.015, duration: 0.25 }}
                        className={`h-3 flex-1 border border-ink ${i < filled ? (i < blocks * 0.5 ? "bg-olive" : i < blocks * 0.8 ? "bg-mustard" : "bg-coral") : "bg-cream"}`}
                    />
                ))}
            </div>
        </div>
    );
}
