import { motion } from "framer-motion";

/**
 * Calendar-style visitor counter, sits on the desktop.
 * Shows today's date in big retro-flip style + total visitors.
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute top-4 right-4 z-20 select-none"
        >
            <div className="bg-cream border-2 border-ink shadow-retro w-[170px]">
                <div className="bg-danger text-cream font-pixel text-center text-2xl leading-none py-1 border-b-2 border-ink">
                    {month} {year}
                </div>
                <div className="text-center py-3">
                    <div className="font-pixel text-[88px] leading-none text-ink">{day}</div>
                    <div className="font-pixel text-xl text-olive-deep -mt-1">{weekday}</div>
                </div>
                <div className="border-t-2 border-ink bg-bone px-2 py-1.5 flex items-center justify-between font-mono text-[11px] text-ink">
                    <span>visitors</span>
                    <span data-testid="visitor-total" className="font-bold text-coral">
                        {visitors?.count ?? "—"}
                    </span>
                </div>
                <div className="bg-cream px-2 py-1 flex items-center justify-between font-mono text-[11px] text-ink-soft border-t border-ink/30">
                    <span>today</span>
                    <span data-testid="visitor-today">{visitors?.today ?? 0}</span>
                </div>
            </div>
        </motion.div>
    );
}
