import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../../data/portfolio";

export function AchievementsWindow() {
    return (
        <div data-testid="achievements-window">
            <div className="font-pixel text-3xl text-olive-deep mb-3">~/achievements</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ACHIEVEMENTS.map((a, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 * i }}
                        whileHover={{ rotate: -1.5 }}
                        className="bg-cream border-2 border-ink shadow-retro-sm p-3 flex items-start gap-3"
                    >
                        <div className="w-12 h-12 shrink-0 bg-mustard border-2 border-ink flex items-center justify-center text-2xl">
                            {a.icon}
                        </div>
                        <div>
                            <div className="font-pixel text-xl leading-tight text-ink">{a.title}</div>
                            <div className="text-xs text-ink-soft mt-0.5">{a.detail}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
