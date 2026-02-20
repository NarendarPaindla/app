import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { careerTimeline } from '../data/portfolio';

const BADGES = ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker', 'System Design', 'REST API', 'Python', 'TailwindCSS', 'Socket.io'];

const STATS = [
    { num: '1000+', lbl: 'Learners', color: '#60a5fa' },
    { num: '5+', lbl: 'Products', color: '#a78bfa' },
    { num: '92%', lbl: 'Success Rate', color: '#34d399' },
];

function fadeUp(delay = 0) {
    return { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } };
}

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="about" ref={ref} style={{ background: 'linear-gradient(180deg, #020810 0%, #080c1a 100%)' }}>
            <div className="section-wrap section-pad">

                {/* ── Header ── */}
                <motion.div {...fadeUp()} style={{ marginBottom: '3.5rem' }}>
                    <span className="section-label">👤 About Me</span>
                    <h2 className="section-title">
                        Engineer by craft.{' '}
                        <span className="gradient-text">Educator by calling.</span>
                    </h2>
                    <div className="glow-line" />
                </motion.div>

                {/* ── Two columns ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>

                    {/* Left: Story */}
                    <motion.div {...fadeUp(0.1)}>
                        <div className="glass" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                            <p style={{ fontSize: '1rem', color: 'rgba(200,210,240,0.7)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                I'm <strong style={{ color: '#f0f4ff', fontWeight: 600 }}>Paindla Narendar Reddy</strong> — a Full Stack Engineer and Technical Educator who believes the best engineers don't just build products, they multiply impact by uplifting others.
                            </p>
                            <p style={{ fontSize: '1rem', color: 'rgba(200,210,240,0.7)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                I've shipped production-grade LMS platforms, SaaS tools, and real-time applications — while simultaneously mentoring{' '}
                                <span style={{ color: '#60a5fa', fontWeight: 600 }}>1000+ learners</span> through bootcamps, 1:1 sessions, and project-based curriculum that mirrors the real industry.
                            </p>
                            <p style={{ fontSize: '1rem', color: 'rgba(200,210,240,0.7)', lineHeight: 1.8 }}>
                                My philosophy: <span style={{ color: '#a78bfa', fontWeight: 600, fontStyle: 'italic' }}>ship fast, teach deeply, iterate always.</span>
                            </p>
                        </div>

                        {/* Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            {STATS.map((s, i) => (
                                <motion.div
                                    key={s.lbl}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.45, type: 'spring' }}
                                    className="glass-sm"
                                    style={{ padding: '1.25rem 1rem', textAlign: 'center' }}
                                >
                                    <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.7rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>
                                        {s.num}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'rgba(200,210,240,0.45)', marginTop: '0.4rem', fontWeight: 500 }}>
                                        {s.lbl}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Timeline + Badges */}
                    <motion.div {...fadeUp(0.2)}>
                        {/* Career Timeline */}
                        <div className="glass" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: '#f0f4ff', marginBottom: '1.5rem' }}>
                                ⏳ Career Journey
                            </h3>
                            <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
                                <div className="timeline-line-vert" />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {careerTimeline.map((item, i) => (
                                        <motion.div
                                            key={item.year}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                                            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                                        >
                                            <div className="timeline-dot" />
                                            <div>
                                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60a5fa', marginBottom: '0.2rem', letterSpacing: '0.04em' }}>
                                                    {item.year}
                                                </div>
                                                <div style={{ fontSize: '0.88rem', color: 'rgba(200,210,240,0.7)', lineHeight: 1.5 }}>
                                                    <span style={{ marginRight: '0.45rem' }}>{item.icon}</span>
                                                    {item.event}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Skill Badges */}
                        <div className="glass-sm" style={{ padding: '1.5rem' }}>
                            <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(200,210,240,0.4)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                Tech Arsenal
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {BADGES.map((b, i) => (
                                    <motion.span
                                        key={b}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.5 + i * 0.05 }}
                                        className="badge"
                                    >
                                        {b}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
