import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/portfolio';

const CAT_STYLE: Record<string, { accent: string; bg: string; border: string }> = {
    blue: { accent: '#60a5fa', bg: 'rgba(96,165,250,0.06)', border: 'rgba(96,165,250,0.18)' },
    purple: { accent: '#a78bfa', bg: 'rgba(167,139,250,0.06)', border: 'rgba(167,139,250,0.18)' },
    cyan: { accent: '#34d399', bg: 'rgba(52,211,153,0.06)', border: 'rgba(52,211,153,0.18)' },
};

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

    return (
        <section id="skills" ref={ref} style={{ background: 'linear-gradient(180deg, #080c1a 0%, #020810 100%)' }}>
            <div className="section-wrap section-pad">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <span className="section-label">⚡ Skills</span>
                    <h2 className="section-title">
                        The Stack I{' '}
                        <span className="gradient-text">Master</span>
                    </h2>
                    <div className="glow-line" />
                </motion.div>

                {/* ── Category Cards ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {skillCategories.map((cat, ci) => {
                        const style = CAT_STYLE[cat.color] ?? CAT_STYLE.blue;
                        return (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 28 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: ci * 0.12, duration: 0.55 }}
                                className="glass"
                                style={{
                                    padding: '1.75rem',
                                    borderColor: style.border,
                                    transition: 'box-shadow 0.3s ease',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${style.accent}20, 0 8px 40px rgba(0,0,0,0.3)`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                }}
                            >
                                {/* Category header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                                    <div style={{
                                        width: 36, height: 36, borderRadius: 10, background: style.bg,
                                        border: `1px solid ${style.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.1rem',
                                    }}>
                                        {cat.category === 'Frontend' ? '🖥️' : cat.category === 'Backend' ? '⚙️' : '🔧'}
                                    </div>
                                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.05rem', color: '#f0f4ff', margin: 0 }}>
                                        {cat.category}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                                    {cat.skills.map((sk, si) => (
                                        <div key={sk.name}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                                                <span style={{ fontSize: '0.85rem', color: 'rgba(200,210,240,0.75)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <span>{sk.icon}</span>{sk.name}
                                                </span>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: style.accent }}>{sk.level}%</span>
                                            </div>
                                            <div className="skill-bar-track">
                                                <motion.div
                                                    className="skill-bar-fill"
                                                    initial={{ width: 0 }}
                                                    animate={inView ? { width: `${sk.level}%` } : { width: 0 }}
                                                    transition={{ delay: 0.3 + ci * 0.12 + si * 0.07, duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                                                    style={{ background: `linear-gradient(90deg, ${style.accent}, ${style.accent}99)` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    style={{ marginTop: '2.5rem', textAlign: 'center' }}
                >
                    <p style={{ fontSize: '0.85rem', color: 'rgba(200,210,240,0.35)' }}>
                        Currently exploring{' '}
                        <span style={{ color: '#60a5fa', fontWeight: 600 }}>AI/ML integration</span> &amp;{' '}
                        <span style={{ color: '#a78bfa', fontWeight: 600 }}>Web3 patterns</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
