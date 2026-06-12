import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onDone }) {
    const [pct, setPct] = useState(0);
    useEffect(() => {
        const start = Date.now();
        const id = setInterval(() => {
            const t = Math.min(100, ((Date.now() - start) / 1400) * 100);
            setPct(Math.round(t));
            if (t >= 100) {
                clearInterval(id);
                setTimeout(onDone, 200);
            }
        }, 60);
        return () => clearInterval(id);
    }, [onDone]);

    return (
        <AnimatePresence>
            <motion.div
                key="loader"
                data-testid="loading-screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[200] bg-[#1E1E1E] flex items-center justify-center"
            >
                <div className="w-[min(520px,86vw)] font-mono text-term-text">
                    <div className="font-pixel text-3xl mb-3 text-cream">
                        ARNAV OS <span className="text-term-text">v0.26</span>
                    </div>
                    <div className="text-sm opacity-80 mb-1">booting kernel...</div>
                    <div className="text-sm opacity-80 mb-1">mounting /portfolio ............ ok</div>
                    <div className="text-sm opacity-80 mb-1">loading framer-motion ......... ok</div>
                    <div className="text-sm opacity-80 mb-3">starting desktop ............... ok</div>
                    <div className="w-full h-4 border-2 border-term-text">
                        <div className="h-full bg-term-text" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="text-right text-xs mt-1">{pct}%</div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
