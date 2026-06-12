import { motion, useDragControls } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

/**
 * Draggable retro window. Drag is initiated only from the title bar.
 */
export function Window({
    id,
    title,
    children,
    onClose,
    onMinimize,
    onMaximize,
    onFocus,
    constraintsRef,
    state = "open",
    initial = { x: 80, y: 60, width: 720, height: 480 },
    zIndex = 10,
}) {
    const dragControls = useDragControls();

    if (state === "minimized") return null;
    const isMax = state === "maximized";

    const stop = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <motion.div
            data-testid={`window-${id}`}
            onPointerDown={onFocus}
            drag={!isMax}
            dragListener={false}
            dragControls={dragControls}
            dragMomentum={false}
            dragConstraints={constraintsRef}
            dragElastic={0}
            initial={{ opacity: 0, scale: 0.92, x: initial.x, y: initial.y }}
            animate={
                isMax
                    ? { opacity: 1, scale: 1, x: 0, y: 0, width: "100%", height: "calc(100% - 56px)" }
                    : { opacity: 1, scale: 1, width: initial.width, height: initial.height }
            }
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            style={{ zIndex, position: "absolute" }}
            className="bg-bone border-2 border-ink shadow-retro select-none flex flex-col max-w-[100vw]"
        >
            <div
                data-testid={`window-titlebar-${id}`}
                onPointerDown={(e) => { if (!isMax) dragControls.start(e); }}
                className="bg-olive text-cream px-3 py-1.5 flex items-center justify-between gap-2 border-b-2 border-ink cursor-move touch-none"
            >
                <div className="flex items-center gap-2 font-pixel text-xl leading-none truncate">
                    <span className="hidden sm:inline">C:\ARNAV\</span>
                    <span className="truncate">{title}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                    <button
                        data-testid={`window-minimize-${id}`}
                        type="button"
                        onPointerDown={stop}
                        onMouseDown={stop}
                        onClick={(e) => { stop(e); onMinimize(); }}
                        className="win-btn bg-mustard"
                        aria-label="Minimize"
                    >
                        <Minus className="w-3 h-3" strokeWidth={3} />
                    </button>
                    <button
                        data-testid={`window-maximize-${id}`}
                        type="button"
                        onPointerDown={stop}
                        onMouseDown={stop}
                        onClick={(e) => { stop(e); onMaximize(); }}
                        className="win-btn bg-cream"
                        aria-label="Maximize"
                    >
                        <Square className="w-3 h-3" strokeWidth={3} />
                    </button>
                    <button
                        data-testid={`window-close-${id}`}
                        type="button"
                        onPointerDown={stop}
                        onMouseDown={stop}
                        onClick={(e) => { stop(e); onClose(); }}
                        className="win-btn bg-danger text-cream"
                        aria-label="Close"
                    >
                        <X className="w-3 h-3 text-cream" strokeWidth={3} />
                    </button>
                </div>
            </div>

            <div
                data-testid={`window-content-${id}`}
                className="flex-1 bg-cream overflow-auto win-scroll p-4 sm:p-6 text-ink"
            >
                {children}
            </div>
        </motion.div>
    );
}
