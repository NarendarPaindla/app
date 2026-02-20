import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

interface FormState { name: string; email: string; subject: string; message: string; }

const SOCIALS = [
    { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/', color: '#f0f4ff' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/', color: '#60a5fa' },
    { icon: <Twitter size={18} />, label: 'Twitter', href: 'https://twitter.com/', color: '#38bdf8' },
    { icon: <Youtube size={18} />, label: 'YouTube', href: 'https://youtube.com/', color: '#f87171' },
];

const CONTACT_INFO = [
    { icon: <Mail size={18} />, label: 'Email', value: 'paindla.narendar@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Hyderabad, India' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+91 XXXXXXXXXX' },
];

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
    const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        await new Promise<void>(r => setTimeout(r, 1200));
        setSent(true);
        setSending(false);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 4000);
    };

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 22 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    });

    return (
        <section id="contact" ref={ref} style={{ background: 'linear-gradient(180deg, #060a18 0%, #020810 100%)' }}>
            <div className="section-wrap section-pad">

                {/* ── Header ── */}
                <motion.div {...fadeUp()} style={{ marginBottom: '3.5rem' }}>
                    <span className="section-label">📬 Contact</span>
                    <h2 className="section-title">
                        Let's Build Something{' '}
                        <span className="gradient-text">Together</span>
                    </h2>
                    <p className="section-subtitle">
                        Open to full-time roles, freelance projects, speaking engagements, or mentorship collaborations.
                    </p>
                    <div className="glow-line" />
                </motion.div>

                {/* ── Two-column layout ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

                    {/* Left: Info + Socials */}
                    <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Contact info cards */}
                        {CONTACT_INFO.map((c, i) => (
                            <motion.div
                                key={c.label}
                                {...fadeUp(0.15 + i * 0.08)}
                                className="glass-sm"
                                style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{
                                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a5b4fc',
                                }}>
                                    {c.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.72rem', color: 'rgba(200,210,240,0.4)', fontWeight: 600, marginBottom: '0.15rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                        {c.label}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: 'rgba(200,210,240,0.8)', fontWeight: 500 }}>{c.value}</div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social links */}
                        <motion.div {...fadeUp(0.4)} className="glass-sm" style={{ padding: '1.5rem' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,210,240,0.4)', marginBottom: '1rem' }}>
                                Connect with Me
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {SOCIALS.map(s => (
                                    <motion.a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-btn"
                                        whileHover={{ y: -3, color: s.color, borderColor: `${s.color}50`, boxShadow: `0 0 20px ${s.color}25` }}
                                        title={s.label}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        {s.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div {...fadeUp(0.2)}>
                        <form
                            onSubmit={handleSubmit}
                            className="glass"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(200,210,240,0.5)', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                                        Name *
                                    </label>
                                    <input className="input" required placeholder="John Doe" value={form.name}
                                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(200,210,240,0.5)', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                                        Email *
                                    </label>
                                    <input className="input" type="email" required placeholder="you@email.com" value={form.email}
                                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(200,210,240,0.5)', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                                    Subject *
                                </label>
                                <input className="input" required placeholder="Project collaboration / Job opportunity" value={form.subject}
                                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(200,210,240,0.5)', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                                    Message *
                                </label>
                                <textarea className="input" required rows={5} placeholder="Tell me what you have in mind..." value={form.message}
                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                    style={{ resize: 'vertical', minHeight: 130 }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary"
                                disabled={sending || sent}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                style={{ marginTop: '0.5rem', borderRadius: 12, fontSize: '0.92rem', justifyContent: 'center' }}
                            >
                                {sending ? (
                                    <>Sending…</>
                                ) : sent ? (
                                    <>✅ Message Sent!</>
                                ) : (
                                    <><Send size={16} /> Send Message</>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    {...fadeUp(0.5)}
                    style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}
                >
                    <p style={{ fontSize: '0.83rem', color: 'rgba(200,210,240,0.3)' }}>
                        © {new Date().getFullYear()} Paindla Narendar Reddy — Built with React + Vite + TailwindCSS
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
