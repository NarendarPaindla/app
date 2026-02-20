import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

    const COLORS: Record<string, { accent: string; tag: string }> = {
        blue: { accent: 'var(--fire)', tag: 'tag-fire' },
        purple: { accent: 'var(--ember)', tag: 'tag-ember' },
        cyan: { accent: 'var(--sage)', tag: 'tag-sage' },
    };

    return (
        <section id="skills" ref={ref} style={{ background: 'var(--bg-1)' }} className="section angle-top">
            <div className="wrap" style={{ position: 'relative' }}>

                <div className="section-num" style={{ position: 'absolute', left: 0, top: '-3rem', zIndex: 0 }}>04</div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}
                >
                    <span className="eyebrow">04 — Skills</span>
                    <h2 className="h2">The Stack<br />I <span className="fire-text">Master</span></h2>
                </motion.div>

                {/* Category grid */}
                <div className="grid-3" style={{ position: 'relative', zIndex: 1 }}>
                    {skillCategories.map((cat, ci) => {
                        const c = COLORS[cat.color] ?? COLORS.blue;
                        return (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: ci * 0.14, duration: 0.55 }}
                                className="card card-accent-b"
                                style={{ padding: '1.75rem 1.5rem' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px -8px ${c.accent}30`; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                            >
                                {/* Header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                                    <div style={{
                                        width: 38, height: 38, borderRadius: 10,
                                        background: `${c.accent}14`, border: `1px solid ${c.accent}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                                    }}>
                                        {cat.category === 'Frontend' ? '🖥️' : cat.category === 'Backend' ? '⚙️' : '🔧'}
                                    </div>
                                    <h3 className="h3" style={{ margin: 0, fontSize: '1rem' }}>{cat.category}</h3>
                                </div>

                                {/* Skills */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                                    {cat.skills.map((sk, si) => (
                                        <div key={sk.name}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--t2)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <span>{sk.icon}</span>{sk.name}
                                                </span>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: c.accent, fontWeight: 700 }}>
                                                    {sk.level}%
                                                </span>
                                            </div>
                                            <div className="bar-track">
                                                <motion.div
                                                    className="bar-fill"
                                                    initial={{ width: 0 }} animate={inView ? { width: `${sk.level}%` } : { width: 0 }}
                                                    transition={{ delay: 0.3 + ci * 0.15 + si * 0.08, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                                    style={{ background: `linear-gradient(90deg, ${c.accent}, ${c.accent}80)` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Marquee ticker */}
                <motion.div
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
                    className="marquee-wrap" style={{ marginTop: '3rem', borderRadius: 12 }}
                >
                    <div className="marquee-track">
                        {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'PostgreSQL', 'Redis', 'Python', 'System Design', 'Socket.io', 'Git', 'CI/CD', 'REST API', 'Tailwind',
                            'React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'PostgreSQL', 'Redis', 'Python', 'System Design', 'Socket.io', 'Git', 'CI/CD', 'REST API', 'Tailwind'].map((t, i) => (
                                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--t3)' }}>
                                    <span style={{ color: 'var(--fire)' }}>✦</span> {t}
                                </span>
                            ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
