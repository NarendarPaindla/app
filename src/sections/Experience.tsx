import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolio';
import { ChevronDown, Briefcase, BookOpen, Laptop } from 'lucide-react';

type ExpType = 'full-time' | 'teaching' | 'freelance';

const TYPE_CONFIG: Record<ExpType, { icon: React.ReactNode; badge: string; color: string }> = {
    'full-time': { icon: <Briefcase size={14} />, badge: 'Full-time', color: '#60a5fa' },
    'teaching': { icon: <BookOpen size={14} />, badge: 'Educator', color: '#a78bfa' },
    'freelance': { icon: <Laptop size={14} />, badge: 'Freelance', color: '#34d399' },
};

export default function Experience() {
    const [expanded, setExpanded] = useState<number>(0);
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="experience" ref={ref} style={{ background: '#060a18' }}>
            <div className="section-wrap section-pad">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <span className="section-label">💼 Experience</span>
                    <h2 className="section-title">
                        Where I've Made an{' '}
                        <span className="gradient-text">Impact</span>
                    </h2>
                    <div className="glow-line" />
                </motion.div>

                {/* ── Cards ── */}
                <div style={{ maxWidth: 780, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {experiences.map((exp, i) => {
                        const cfg = TYPE_CONFIG[exp.type as ExpType];
                        const isOpen = expanded === i;
                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -24 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: i * 0.13, duration: 0.55 }}
                                className="glass"
                                style={{
                                    overflow: 'hidden',
                                    borderColor: isOpen ? `${cfg.color}35` : 'rgba(255,255,255,0.08)',
                                    boxShadow: isOpen ? `0 0 0 1px ${cfg.color}25, 0 8px 40px rgba(0,0,0,0.3)` : 'none',
                                    transition: 'border-color 0.3s, box-shadow 0.3s',
                                }}
                            >
                                {/* ── Card Header ── */}
                                <button
                                    onClick={() => setExpanded(isOpen ? -1 : i)}
                                    style={{
                                        width: '100%', textAlign: 'left', background: 'none', border: 'none',
                                        padding: '1.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                                        gap: '1rem',
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        {/* Role + badge */}
                                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.4rem' }}>
                                            <h3 style={{
                                                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                                                color: '#f0f4ff', margin: 0,
                                            }}>
                                                {exp.role}
                                            </h3>
                                            <span style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                                                fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.65rem',
                                                borderRadius: 100, border: `1px solid ${cfg.color}40`,
                                                background: `${cfg.color}12`, color: cfg.color,
                                            }}>
                                                {cfg.icon}{cfg.badge}
                                            </span>
                                        </div>

                                        {/* Company + period */}
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'rgba(200,210,240,0.7)' }}>{exp.company}</span>
                                            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                                            <span style={{ fontSize: '0.83rem', color: 'rgba(200,210,240,0.4)' }}>{exp.period}</span>
                                        </div>

                                        {/* Tech tags */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.85rem' }}>
                                            {exp.tech.map(t => (
                                                <span key={t} className="pill">{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Expand toggle */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ color: 'rgba(200,210,240,0.35)', flexShrink: 0, marginTop: '0.2rem' }}
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </button>

                                {/* ── Expanded Content ── */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ padding: '0 1.5rem 1.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                                                {/* Bullets */}
                                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                                    {exp.description.map((d, di) => (
                                                        <motion.li
                                                            key={di}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: di * 0.07 }}
                                                            style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(200,210,240,0.65)', lineHeight: 1.65 }}
                                                        >
                                                            <span style={{ color: cfg.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                                                            {d}
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                {/* Metrics */}
                                                <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`, gap: '0.75rem' }}>
                                                    {exp.metrics.map((m, mi) => (
                                                        <motion.div
                                                            key={m.label}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.15 + mi * 0.1 }}
                                                            className="glass-sm"
                                                            style={{ padding: '1rem', textAlign: 'center' }}
                                                        >
                                                            <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 800, color: cfg.color }}>
                                                                {m.value}
                                                            </div>
                                                            <div style={{ fontSize: '0.72rem', color: 'rgba(200,210,240,0.4)', marginTop: '0.3rem', fontWeight: 500 }}>
                                                                {m.label}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
