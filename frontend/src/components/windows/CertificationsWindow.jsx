import { useState } from "react";
import { CERTIFICATIONS } from "../../data/portfolio";
import { Award, X } from "lucide-react";

export function CertificationsWindow() {
    const [preview, setPreview] = useState(null);
    return (
        <div data-testid="certs-window">
            <div className="font-pixel text-3xl text-olive-deep mb-3">~/certifications</div>
            <div className="grid sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((c, i) => (
                    <button
                        key={i}
                        data-testid={`cert-${i}`}
                        onClick={() => setPreview(c)}
                        className="text-left bg-cream border-2 border-ink shadow-retro-sm p-3 hover:bg-mustard/30"
                    >
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-coral" />
                            <div className="font-pixel text-xl leading-none">{c.title}</div>
                        </div>
                        <div className="text-xs font-mono text-ink-soft mt-1">{c.issuer} · {c.year}</div>
                    </button>
                ))}
            </div>

            {preview && (
                <div data-testid="cert-modal" className="absolute inset-0 bg-ink/60 flex items-center justify-center p-6 z-50" onClick={() => setPreview(null)}>
                    <div onClick={(e) => e.stopPropagation()} className="bg-cream border-2 border-ink shadow-retro-lg w-full max-w-md">
                        <div className="bg-olive text-cream px-3 py-1.5 font-pixel text-xl border-b-2 border-ink flex items-center justify-between">
                            <span>certificate.png</span>
                            <button data-testid="cert-modal-close" onClick={() => setPreview(null)} className="win-btn bg-danger text-cream"><X className="w-3 h-3" strokeWidth={3} /></button>
                        </div>
                        <div className="p-5">
                            <div className="aspect-[4/3] bg-bone border-2 border-ink flex items-center justify-center">
                                <div className="text-center">
                                    <Award className="w-16 h-16 text-coral mx-auto" />
                                    <div className="font-pixel text-2xl mt-2">{preview.title}</div>
                                    <div className="font-mono text-xs text-ink-soft">{preview.issuer} · {preview.year}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
