import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, ArrowDown } from 'lucide-react';

const LINES = [
    { key: 'name', color: '#F97316', k: 'name', val: '"Paindla Narendar Reddy"' },
    { key: 'role', color: '#FBBF24', k: 'role', val: '"Technical Trainer"' },
    { key: 'stack', color: '#86EFAC', k: 'stack', val: '["React","Node","MongoDB","Angular","SpringBoot"]' },
    { key: 'impact', color: '#7DD3FC', k: 'impact', val: '"1000+ learners · 5+ products"' },
    { key: 'location', color: '#F97316', k: 'location', val: '"Hyderabad, India 🇮🇳"' },
    { key: 'status', color: '#86EFAC', k: 'status', val: '"working in bytexl as technical trainer"' },
];

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setVisibleLines(n => {
                if (n >= LINES.length) { clearInterval(t); return n; }
                return n + 1;
            });
        }, 380);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="home" style={{
            minHeight: '100vh', paddingTop: '6rem', paddingBottom: '5rem',
            background: 'var(--bg)', display: 'flex', alignItems: 'center',
            position: 'relative', overflow: 'hidden',
        }}>

            {/* Background subtle grid */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
                backgroundImage: `
          linear-gradient(rgba(249,115,22,0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(249,115,22,0.022) 1px, transparent 1px)
        `,
                backgroundSize: '64px 64px',
            }} />

            {/* Orange ambient glow */}
            <div style={{
                position: 'absolute', top: '-200px', left: '-100px', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)',
                pointerEvents: 'none', zIndex: 0,
            }} />

            <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div id="hero-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 0.9fr',
                    gap: '4rem',
                    alignItems: 'center',
                }}>

                    {/* ── LEFT: Text ── */}
                    <div>
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15, duration: 0.5 }} style={{ marginBottom: '1.5rem' }}>
                            <span className="eyebrow">01 — Introduction</span>
                        </motion.div>

                        <motion.h1 className="h1"
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            style={{ marginBottom: '1.25rem' }}>
                            <span style={{
                                display: 'block', color: 'var(--t3)', fontSize: '0.38em',
                                fontFamily: 'var(--font-mono)', fontWeight: 500, letterSpacing: '0.12em',
                                marginBottom: '0.4rem', textTransform: 'uppercase',
                            }}>
                                Full Stack Trainer · Educator
                            </span>
                            Paindla<br />
                            <span style={{ color: 'var(--fire)' }}>Narendar</span><br />
                            Reddy
                        </motion.h1>

                        {/* Typing subtitle */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                            style={{
                                marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.78rem, 1.5vw, 0.9rem)', color: 'var(--t2)',
                            }}>
                            <span style={{ color: 'var(--fire)' }}>›</span>
                            <TypeAnimation
                                sequence={['Building scalable web products', 2000, 'Empowering 1000+ learners', 2000, 'Mentoring the next generation', 2000, 'Training the Future with AI Stack', 2000]}
                                speed={55} wrapper="span" repeat={Infinity}
                            />
                            <span className="cursor" style={{ color: 'var(--fire)', fontWeight: 700 }}>_</span>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <motion.button className="btn btn-fire" onClick={() => go('projects')}
                                whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                                View Projects <ArrowRight size={15} />
                            </motion.button>
                            <motion.button className="btn btn-outline" onClick={() => go('contact')}
                                whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                                Let's Talk
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                            style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                            {[
                                { n: '1000+', l: 'Learners Mentored' },
                                { n: '16+', l: 'Projects Completed' },
                                { n: '1500+', l: 'Hours of Content' },

                            ].map((s, i) => (
                                <motion.div key={s.l}
                                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.3 + i * 0.12 }}>
                                    <div className="stat-num">{s.n}</div>
                                    <div className="stat-label">{s.l}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── RIGHT: Terminal ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="float"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                        <div className="terminal">
                            <div className="terminal-bar">
                                <div className="terminal-dot" style={{ background: '#FF5F57' }} />
                                <div className="terminal-dot" style={{ background: '#FEBC2E' }} />
                                <div className="terminal-dot" style={{ background: '#28C840' }} />
                                <span style={{ marginLeft: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--t3)' }}>
                                    profile.json
                                </span>
                            </div>
                            <div className="terminal-body">
                                <div style={{ color: 'var(--t3)' }}>{'{'}</div>
                                {LINES.map((line, i) => (
                                    <motion.div key={line.key}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: i < visibleLines ? 1 : 0, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ paddingLeft: '1.25rem' }}>
                                        <span style={{ color: 'var(--t3)' }}>"</span>
                                        <span style={{ color: line.color }}>{line.k}</span>
                                        <span style={{ color: 'var(--t3)' }}>"</span>
                                        <span style={{ color: 'var(--t2)' }}>: </span>
                                        <span style={{ color: '#D4D0C8' }}>{line.val}</span>
                                        {i < LINES.length - 1 && <span style={{ color: 'var(--t3)' }}>,</span>}
                                    </motion.div>
                                ))}
                                <div style={{ color: 'var(--t3)' }}>{'}'}</div>
                            </div>
                        </div>

                        {/* Available badge */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                            padding: '0.875rem 1.25rem',
                            background: 'rgba(134,239,172,0.06)', border: '1px solid rgba(134,239,172,0.2)', borderRadius: 12,
                        }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#86EFAC', boxShadow: '0 0 8px #86EFAC', animation: 'float 2s ease-in-out infinite' }} />
                            <div>
                                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', color: '#86EFAC' }}>
                                    Technical Trainer
                                </div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--t3)', marginTop: '0.1rem' }}>
                                    Full-time · Freelance · Mentorship
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                    style={{
                        marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
                        color: 'var(--t3)',
                    }}>
                    <span className="mono">Scroll</span>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                        <ArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 820px) {
          #hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #hero-grid > div:last-child { display: none; }
        }
      `}</style>
        </section>
    );
}
