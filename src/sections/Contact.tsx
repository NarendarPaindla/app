import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

interface Form { name: string; email: string; subject: string; message: string; }

const SOCIALS = [
    { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/NarendarPaindla', color: '#F5F0E8' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/', color: '#60a5fa' },
    { icon: <Twitter size={18} />, label: 'Twitter', href: 'https://twitter.com/', color: '#38bdf8' },
    { icon: <Youtube size={18} />, label: 'YouTube', href: 'https://youtube.com/', color: '#f87171' },
];

const INFO = [
    { icon: <Mail size={16} />, label: 'Email', value: 'narendarreddypaindla@gmail.com' },
    { icon: <MapPin size={16} />, label: 'Location', value: 'Hyderabad, India' },
    { icon: <Phone size={16} />, label: 'Phone', value: '+91 6300089705' },
];

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.07, triggerOnce: true });
    const [form, setForm] = useState<Form>({ name: '', email: '', subject: '', message: '' });
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

    const up = (d = 0) => ({ initial: { opacity: 0, y: 22 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { delay: d, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } });

    return (
        <section id="contact" ref={ref} style={{ background: 'var(--bg-1)' }} className="section angle-top">
            <div className="wrap" style={{ position: 'relative' }}>

                <div className="section-num" style={{ position: 'absolute', right: 0, top: '-3rem', zIndex: 0 }}>08</div>

                {/* Header */}
                <motion.div {...up()} style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                    <span className="eyebrow">08 — Contact</span>
                    <h2 className="h2">Let's Build<br /><span className="fire-text">Together</span></h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--t2)', marginTop: '0.75rem', maxWidth: 450, lineHeight: 1.7 }}>
                        Open to full-time roles, freelance projects, speaking, or mentorship. Don't hesitate to reach out.
                    </p>
                </motion.div>

                {/* Layout */}
                <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>

                    {/* Left */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {INFO.map((c, i) => (
                            <motion.div key={c.label} {...up(0.1 + i * 0.1)} className="card"
                                style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                                    background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fire)',
                                }}>
                                    {c.icon}
                                </div>
                                <div>
                                    <div className="mono" style={{ marginBottom: '0.15rem' }}>{c.label}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--t1)', fontWeight: 500 }}>{c.value}</div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Socials */}
                        <motion.div {...up(0.4)} className="card" style={{ padding: '1.5rem' }}>
                            <p className="mono" style={{ marginBottom: '1rem' }}>Find me online</p>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {SOCIALS.map(s => (
                                    <motion.a
                                        key={s.label}
                                        href={s.href} target="_blank" rel="noopener noreferrer"
                                        whileHover={{ y: -3, color: s.color, borderColor: `${s.color}50` }}
                                        title={s.label}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            width: 40, height: 40, borderRadius: 10,
                                            background: 'var(--bg-2)', border: '1px solid var(--border)',
                                            color: 'var(--t2)', textDecoration: 'none',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {s.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Form */}
                    <motion.form {...up(0.2)} onSubmit={handleSubmit} className="card"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--t3)', fontWeight: 600, marginBottom: '0.45rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Name *</label>
                                <input className="field" required placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--t3)', fontWeight: 600, marginBottom: '0.45rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Email *</label>
                                <input className="field" type="email" required placeholder="you@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--t3)', fontWeight: 600, marginBottom: '0.45rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Subject *</label>
                            <input className="field" required placeholder="Project / Job / Mentorship" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--t3)', fontWeight: 600, marginBottom: '0.45rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Message *</label>
                            <textarea className="field" required rows={5} placeholder="Tell me what you have in mind…" value={form.message}
                                onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical', minHeight: 120 }} />
                        </div>

                        <motion.button type="submit" className="btn btn-fire" disabled={sending || sent}
                            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                            style={{ marginTop: '0.5rem', justifyContent: 'center', borderRadius: 10, fontSize: '0.9rem' }}>
                            {sending ? 'Sending…' : sent ? '✅ Message Sent!' : <><Send size={15} /> Send Message</>}
                        </motion.button>
                    </motion.form>
                </div>

                {/* Footer */}
                <motion.div {...up(0.5)}
                    style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--t3)' }}>
                        © {new Date().getFullYear()} Paindla Narendar Reddy ---0--- Techincal Trainer
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
