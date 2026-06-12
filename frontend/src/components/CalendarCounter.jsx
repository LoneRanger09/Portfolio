import { motion } from "framer-motion";

/**
 * Compact calendar-style visitor counter, top-right of the desktop.
 */
export function CalendarCounter({ visitors }) {
    const now = new Date();
    const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const day = now.getDate();
    const weekday = now.toLocaleString("en-US", { weekday: "short" }).toUpperCase();
    const year = now.getFullYear();

    return (
        <motion.div
            data-testid="calendar-counter"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute top-3 right-3 z-[5] select-none pointer-events-none"
        >
            <div className="bg-cream border-2 border-ink shadow-retro-sm w-[112px]">
                <div className="bg-danger text-cream font-pixel text-center text-sm leading-none py-0.5 border-b-2 border-ink">
                    {month} {year}
                </div>
                <div className="text-center py-1.5">
                    <div className="font-pixel text-[44px] leading-none text-ink">{day}</div>
                    <div className="font-pixel text-xs text-olive-deep leading-none mt-0.5">{weekday}</div>
                </div>
                <div className="border-t-2 border-ink bg-bone px-1.5 py-0.5 flex items-center justify-between font-mono text-[9px] text-ink">
                    <span>visitors</span>
                    <span data-testid="visitor-total" className="font-bold text-coral">
                        {visitors?.count ?? "—"}
                    </span>
                </div>
                <div className="bg-cream px-1.5 py-0.5 flex items-center justify-between font-mono text-[9px] text-ink-soft border-t border-ink/30">
                    <span>today</span>
                    <span data-testid="visitor-today">{visitors?.today ?? 0}</span>
                </div>
            </div>
        </motion.div>
    );
}
