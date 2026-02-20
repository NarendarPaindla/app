import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { careerTimeline } from '../data/portfolio';

const BADGES = ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'System Design', 'PostgreSQL', 'REST APIs', 'Python', 'TailwindCSS', 'Socket.io', 'Git', 'CI/CD'];



export default function About() {
    const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

    return (
        <section id="about" ref={ref} style={{ background: 'var(--bg-1)' }} className="section angle-top angle-bottom">
            <div className="wrap">

                {/* Section number watermark */}
                <div className="section-num" style={{ position: 'absolute', right: '-0.5rem', top: '1rem', zIndex: 0 }}>02</div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}
                >
                    <span className="eyebrow">02 — About</span>
                    <h2 className="h2">
                        Engineer by craft.<br />
                        <span className="fire-text">Educator</span> by calling.
                    </h2>
                </motion.div>

                {/* Bento grid  */}
                <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem' }}>

                    {/* Bio card — wide */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.55 }}
                        className="card"
                        style={{ gridColumn: 'span 7', padding: '2rem' }}
                    >
                        <p style={{ fontSize: '1.05rem', color: 'var(--t2)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                            I'm <strong style={{ color: 'var(--t1)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Paindla Narendar Reddy</strong> — a Full Stack Engineer and Technical Educator from Hyderabad, India.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: 'var(--t2)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                            I ship production-grade LMS platforms, SaaS products, and real-time systems. At the same time, I've mentored <span style={{ color: 'var(--fire)', fontWeight: 700 }}>1000+ learners</span> through bootcamps, 1:1 sessions, and industry-mirrored curricula.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: 'var(--t2)', lineHeight: 1.8 }}>
                            My philosophy:{' '}
                            <em style={{ color: 'var(--ember)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                                "Ship fast. Teach deeply. Iterate always."
                            </em>
                        </p>
                    </motion.div>

                    {/* Stats — stacked */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.55 }}
                        style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        {[
                            { n: '1000+', l: 'Learners Mentored', c: 'var(--fire)' },
                            { n: '200+', l: 'Hours of Content', c: 'var(--ember)' },
                            { n: '92%', l: 'Student Success Rate', c: 'var(--sage)' },
                        ].map((s, i) => (
                            <motion.div
                                key={s.l}
                                initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                                className="card card-accent-l"
                                style={{ padding: '1.25rem 1.5rem', flex: 1 }}
                            >
                                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2rem', color: s.c, lineHeight: 1, marginBottom: '0.3rem' }}>
                                    {s.n}
                                </div>
                                <div className="mono">{s.l}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.55 }}
                        className="card"
                        style={{ gridColumn: 'span 6', padding: '2rem' }}
                    >
                        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Career Timeline</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {careerTimeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                                >
                                    <div style={{
                                        fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--fire)',
                                        background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)',
                                        padding: '0.2rem 0.5rem', borderRadius: 6, flexShrink: 0, marginTop: 2,
                                    }}>
                                        {item.year}
                                    </div>
                                    <div style={{ fontSize: '0.88rem', color: 'var(--t2)', lineHeight: 1.55 }}>
                                        <span style={{ marginRight: '0.4rem' }}>{item.icon}</span>
                                        {item.event}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech arsenal */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.55 }}
                        className="card"
                        style={{ gridColumn: 'span 6', padding: '2rem' }}
                    >
                        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Tech Arsenal</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {BADGES.map((b, i) => (
                                <motion.span
                                    key={b}
                                    initial={{ opacity: 0, scale: 0.75 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.35 + i * 0.04 }}
                                    className="tag"
                                >
                                    {b}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          #about .wrap > div:last-child > * { grid-column: span 12 !important; }
        }
      `}</style>
        </section>
    );
}
