import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Check } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export function ContactWindow() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [error, setError] = useState("");

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setError("");
        try {
            await axios.post(`${API}/contact`, form);
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 2500);
        } catch (err) {
            setStatus("error");
            setError(err?.response?.data?.detail?.[0]?.msg || "Could not send. Try again.");
        }
    };

    return (
        <div data-testid="contact-window" className="grid sm:grid-cols-2 gap-5">
            <div>
                <div className="font-pixel text-3xl text-olive-deep">~/contact</div>
                <p className="text-sm text-ink-soft mt-1">Open to internships, freelance, and collabs.</p>
                <div className="mt-4 space-y-2 font-mono text-sm">
                    <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-coral"><Mail className="w-4 h-4" /> {PROFILE.email}</a>
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {PROFILE.phone}</div>
                    <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-coral"><Github className="w-4 h-4" /> github.com/arnavkumar</a>
                    <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-coral"><Linkedin className="w-4 h-4" /> linkedin/in/arnavkumar</a>
                </div>
            </div>

            <form onSubmit={onSubmit} className="bg-bone border-2 border-ink shadow-retro-sm p-4 space-y-2">
                <Field name="name" label="name" value={form.name} onChange={onChange} required />
                <Field name="email" label="email" type="email" value={form.email} onChange={onChange} required />
                <div>
                    <label className="font-mono text-xs">message</label>
                    <textarea
                        data-testid="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={onChange}
                        className="w-full bg-cream border-2 border-ink px-2 py-1 font-mono text-sm outline-none focus:ring-2 focus:ring-coral"
                    />
                </div>

                <motion.button
                    data-testid="contact-submit"
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    disabled={status === "sending"}
                    className="w-full mt-1 px-3 py-2 bg-coral text-cream border-2 border-ink shadow-retro-sm font-pixel text-xl inline-flex items-center justify-center gap-2 disabled:opacity-70"
                >
                    {status === "sending" && <span>sending…</span>}
                    {status === "sent" && <><Check className="w-4 h-4" /> sent!</>}
                    {(status === "idle" || status === "error") && <><Send className="w-4 h-4" /> send message</>}
                </motion.button>
                {status === "error" && <div className="text-xs text-danger font-mono">{error}</div>}
            </form>
        </div>
    );
}

function Field({ name, label, value, onChange, type = "text", required }) {
    return (
        <div>
            <label className="font-mono text-xs">{label}</label>
            <input
                data-testid={`contact-${name}`}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full bg-cream border-2 border-ink px-2 py-1 font-mono text-sm outline-none focus:ring-2 focus:ring-coral"
            />
        </div>
    );
}
