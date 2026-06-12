import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";

export function ProjectsWindow({ onOpenProject }) {
    return (
        <div data-testid="projects-window">
            <div className="font-pixel text-3xl text-olive-deep mb-3">~/projects</div>
            <div className="grid sm:grid-cols-2 gap-4">
                {PROJECTS.map((p) => (
                    <div
                        key={p.id}
                        data-testid={`project-card-${p.id}`}
                        className="bg-cream border-2 border-ink shadow-retro-sm overflow-hidden flex flex-col"
                    >
                        <div className="aspect-[16/9] bg-bone overflow-hidden border-b-2 border-ink">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3 flex-1 flex flex-col">
                            <div className="font-pixel text-2xl text-ink leading-none">{p.title}</div>
                            <p className="text-sm text-ink-soft mt-1 line-clamp-3">{p.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                                {p.stack.map((s) => (
                                    <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 bg-olive text-cream border border-ink">{s}</span>
                                ))}
                            </div>
                            <div className="mt-3 flex items-center gap-2">
                                <button
                                    data-testid={`project-open-${p.id}`}
                                    onClick={() => onOpenProject(p)}
                                    className="px-2.5 py-1 bg-coral text-cream border-2 border-ink shadow-retro-sm text-xs font-mono hover:bg-olive"
                                >
                                    open
                                </button>
                                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-mono hover:text-coral">
                                    <Github className="w-3.5 h-3.5" /> code
                                </a>
                                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-mono hover:text-coral">
                                    <ExternalLink className="w-3.5 h-3.5" /> demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ProjectDetailWindow({ project }) {
    if (!project) return null;
    return (
        <div data-testid={`project-detail-${project.id}`}>
            <div className="aspect-[16/9] bg-bone overflow-hidden border-2 border-ink">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="font-pixel text-3xl text-coral mt-3">{project.title}</div>
            <p className="text-sm mt-2 text-ink">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
                {project.stack.map((s) => (
                    <span key={s} className="text-xs font-mono px-2 py-0.5 bg-olive text-cream border border-ink">{s}</span>
                ))}
            </div>
            <div className="mt-4 flex gap-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="px-3 py-1.5 bg-ink text-cream border-2 border-ink shadow-retro-sm text-sm font-mono inline-flex items-center gap-1">
                    <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="px-3 py-1.5 bg-coral text-cream border-2 border-ink shadow-retro-sm text-sm font-mono inline-flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
            </div>
        </div>
    );
}
