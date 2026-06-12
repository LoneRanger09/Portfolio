import { Download, Printer, FileText } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

export function ResumeWindow() {
    const handlePrint = () => window.print();
    const handleDownload = () => {
        // Generate placeholder PDF blob for download
        const blob = new Blob(
            [`Resume — ${PROFILE.name}\n${PROFILE.universityShort} · ${PROFILE.graduation}\nEmail: ${PROFILE.email}\n\n(Placeholder resume — replace with your real PDF.)`],
            { type: "application/pdf" }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${PROFILE.name.replace(/\s+/g, "_")}_Resume.pdf`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div data-testid="resume-window">
            <div className="flex items-center justify-between mb-3">
                <div className="font-pixel text-3xl text-olive-deep">~/resume</div>
                <div className="flex gap-2">
                    <button data-testid="resume-download" onClick={handleDownload} className="px-2.5 py-1 bg-coral text-cream border-2 border-ink shadow-retro-sm text-xs font-mono inline-flex items-center gap-1">
                        <Download className="w-3.5 h-3.5" /> download
                    </button>
                    <button data-testid="resume-print" onClick={handlePrint} className="px-2.5 py-1 bg-bone border-2 border-ink shadow-retro-sm text-xs font-mono inline-flex items-center gap-1">
                        <Printer className="w-3.5 h-3.5" /> print
                    </button>
                </div>
            </div>
            <div className="bg-cream border-2 border-ink shadow-retro-sm p-5 font-mono text-sm space-y-3">
                <div className="flex items-center gap-3 border-b-2 border-ink/40 pb-3">
                    <FileText className="w-8 h-8 text-coral" />
                    <div>
                        <div className="font-pixel text-3xl leading-none">{PROFILE.name}</div>
                        <div className="text-xs text-ink-soft">{PROFILE.role} · {PROFILE.universityShort}</div>
                    </div>
                </div>
                <div>
                    <div className="font-pixel text-xl text-olive-deep">Education</div>
                    <div className="text-sm">{PROFILE.university}</div>
                    <div className="text-xs text-ink-soft">{PROFILE.graduation} · {PROFILE.location}</div>
                </div>
                <div>
                    <div className="font-pixel text-xl text-olive-deep">Summary</div>
                    <div className="text-sm">{PROFILE.intro}</div>
                </div>
                <div>
                    <div className="font-pixel text-xl text-olive-deep">Contact</div>
                    <div className="text-sm">{PROFILE.email}</div>
                    <div className="text-sm">{PROFILE.phone}</div>
                </div>
                
            </div>
        </div>
    );
}
