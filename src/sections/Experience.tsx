import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolio';
import { Plus, Minus } from 'lucide-react';

const TYPE_COLOR: Record<string, string> = {
    'full-time': 'var(--fire)',
    'teaching': 'var(--ember)',
    'freelance': 'var(--sage)',
};
const TYPE_LABEL: Record<string, string> = {
    'full-time': 'Full-time',
    'teaching': 'Educator',
    'freelance': 'Freelance',
};

export default function Experience() {
    const [open, setOpen] = useState<number>(0);
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="experience" ref={ref} style={{ background: 'var(--bg)' }} className="section">
            <div className="wrap" style={{ position: 'relative' }}>

                <div className="section-num" style={{ position: 'absolute', right: 0, top: '-3rem', zIndex: 0 }}>03</div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{
                        marginBottom: '3rem', position: 'relative', zIndex: 1,
                        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem'
                    }}
                >
                    <div>
                        <span className="eyebrow">03 — Experience</span>
                        <h2 className="h2">Where I've Made<br />an <span className="fire-text">Impact</span></h2>
                    </div>
                    <div className="mono" style={{ paddingBottom: '0.5rem' }}>
                        Click to expand ↓
                    </div>
                </motion.div>

                {/* Cards */}
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {experiences.map((exp, i) => {
                        const color = TYPE_COLOR[exp.type] ?? 'var(--fire)';
                        const isOpen = open === i;
                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                                style={{
                                    background: isOpen ? 'var(--card-2)' : 'var(--card)',
                                    border: `1px solid ${isOpen ? color + '40' : 'var(--border)'}`,
                                    borderLeft: `3px solid ${color}`,
                                    borderRadius: '0 14px 14px 0',
                                    overflow: 'hidden',
                                    transition: 'background 0.25s, border-color 0.25s',
                                }}
                            >
                                {/* Trigger */}
                                <button
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    style={{
                                        width: '100%', background: 'none', border: 'none', textAlign: 'left',
                                        padding: '1.5rem', display: 'grid',
                                        gridTemplateColumns: 'auto 1fr auto',
                                        gap: '1.25rem', alignItems: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {/* Index number */}
                                    <div style={{
                                        fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700,
                                        color, width: 32, height: 32, borderRadius: '50%',
                                        background: `${color}12`, border: `1px solid ${color}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>

                                    {/* Info */}
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.3rem' }}>
                                            <h3 className="h3" style={{ margin: 0, fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>{exp.role}</h3>
                                            <span className="tag" style={{ background: `${color}12`, borderColor: `${color}35`, color }}>
                                                {TYPE_LABEL[exp.type]}
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--t2)' }}>
                                                {exp.company}
                                            </span>
                                            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-2)' }} />
                                            <span className="mono">{exp.period}</span>
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
                                            {exp.tech.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}
                                            {exp.tech.length > 5 && <span className="tag">+{exp.tech.length - 5}</span>}
                                        </div>
                                    </div>

                                    {/* Toggle */}
                                    <div style={{ color: 'var(--t3)', flexShrink: 0 }}>
                                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                        </motion.div>
                                    </div>
                                </button>

                                {/* Expanded */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ padding: '0 1.5rem 1.75rem', marginLeft: '3.25rem' }}>
                                                <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.5rem' }} />

                                                {/* Bullets */}
                                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem', listStyle: 'none' }}>
                                                    {exp.description.map((d, di) => (
                                                        <motion.li
                                                            key={di} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: di * 0.08 }}
                                                            style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--t2)', lineHeight: 1.65 }}
                                                        >
                                                            <span style={{ color, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>→</span>
                                                            {d}
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                {/* Metrics */}
                                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                                    {exp.metrics.map((m, mi) => (
                                                        <motion.div
                                                            key={m.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.12 + mi * 0.1 }}
                                                            style={{
                                                                padding: '1rem 1.25rem', borderRadius: 10,
                                                                background: `${color}08`, border: `1px solid ${color}25`, minWidth: 110,
                                                            }}
                                                        >
                                                            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color, lineHeight: 1 }}>{m.value}</div>
                                                            <div className="mono" style={{ marginTop: '0.3rem' }}>{m.label}</div>
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
