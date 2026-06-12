import { Command } from "cmdk";
import { useEffect } from "react";
import { ICONS } from "../data/portfolio";

export function CommandPalette({ open, onOpenChange, onSelect }) {
    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                onOpenChange(!open);
            }
            if (e.key === "Escape") onOpenChange(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
        <div
            data-testid="command-palette"
            className="fixed inset-0 z-[300] flex items-start justify-center pt-[14vh] bg-ink/40"
            onClick={() => onOpenChange(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[min(560px,92vw)] bg-cream border-2 border-ink shadow-retro-lg"
            >
                <div className="bg-olive text-cream px-3 py-1.5 font-pixel text-xl border-b-2 border-ink flex items-center justify-between">
                    <span>~/run</span>
                    <span className="text-xs font-mono opacity-90">esc to close</span>
                </div>
                <Command label="Command palette" className="font-mono">
                    <Command.Input
                        data-testid="command-palette-input"
                        autoFocus
                        placeholder="type a window name…  (about, projects, terminal, recruiter)"
                        className="w-full px-4 py-3 bg-cream text-ink outline-none border-b-2 border-ink/40 placeholder:text-ink-soft"
                    />
                    <Command.List className="max-h-[300px] overflow-auto win-scroll">
                        <Command.Empty className="px-4 py-3 text-sm text-ink-soft">
                            no matches.
                        </Command.Empty>
                        {ICONS.map((item) => (
                            <Command.Item
                                key={item.id}
                                data-testid={`palette-item-${item.id}`}
                                value={`${item.id} ${item.label}`}
                                onSelect={() => {
                                    onSelect(item.id);
                                    onOpenChange(false);
                                }}
                                className="px-4 py-2.5 cursor-pointer aria-selected:bg-olive aria-selected:text-cream text-ink flex items-center justify-between"
                            >
                                <span>{item.label}</span>
                                <span className="text-xs opacity-70">/{item.id}</span>
                            </Command.Item>
                        ))}
                    </Command.List>
                </Command>
            </div>
        </div>
    );
}
