import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

const CAT_COLOR: Record<string, string> = {
    'Full Stack': '#60a5fa',
    'AI/ML': '#a78bfa',
    'Desktop': '#34d399',
};

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="projects" ref={ref} style={{ background: '#060a18' }}>
            <div className="section-wrap section-pad">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <span className="section-label">🚀 Projects</span>
                    <h2 className="section-title">
                        Things I've{' '}
                        <span className="gradient-text">Built</span>
                    </h2>
                    <p className="section-subtitle">
                        Production-grade projects solving real problems — from LMS platforms to AI-powered tools.
                    </p>
                    <div className="glow-line" />
                </motion.div>

                {/* ── Project Grid ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    {projects.map((p, i) => {
                        const color = CAT_COLOR[p.category] ?? '#60a5fa';
                        return (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="glass project-card"
                                style={{
                                    display: 'flex', flexDirection: 'column',
                                    overflow: 'hidden',
                                    borderColor: 'rgba(255,255,255,0.08)',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = `${color}35`;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${color}25, 0 16px 48px rgba(0,0,0,0.4)`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                }}
                            >
                                {/* Top accent bar */}
                                <div style={{ height: 3, background: `linear-gradient(90deg, ${color}, transparent)` }} />

                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    {/* Meta row */}
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                                        <span style={{
                                            fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.7rem', borderRadius: 100,
                                            background: `${color}15`, border: `1px solid ${color}35`, color,
                                        }}>
                                            {p.category}
                                        </span>
                                        {p.featured && (
                                            <span style={{ fontSize: '0.72rem', color: '#fcd34d', fontWeight: 600 }}>★ Featured</span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 style={{
                                        fontFamily: 'Space Grotesk', fontWeight: 700,
                                        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                                        color: '#f0f4ff', marginBottom: '0.75rem', lineHeight: 1.3,
                                    }}>
                                        {p.title}
                                    </h3>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '0.875rem', color: 'rgba(200,210,240,0.58)', lineHeight: 1.7,
                                        marginBottom: '1.25rem', flex: 1,
                                    }}>
                                        {p.description}
                                    </p>

                                    {/* Tech pills */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                                        {p.tech.map(t => <span key={t} className="pill">{t}</span>)}
                                    </div>

                                    {/* Action buttons */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                                        <a
                                            href={p.github} target="_blank" rel="noopener noreferrer"
                                            className="btn btn-ghost"
                                            style={{ fontSize: '0.82rem', padding: '0.6rem 1rem', borderRadius: 10, textDecoration: 'none' }}
                                        >
                                            <Github size={14} /> GitHub
                                        </a>
                                        <a
                                            href={p.live} target="_blank" rel="noopener noreferrer"
                                            className="btn"
                                            style={{
                                                fontSize: '0.82rem', padding: '0.6rem 1rem', borderRadius: 10, textDecoration: 'none',
                                                background: `linear-gradient(135deg, ${color}30, ${color}18)`,
                                                border: `1px solid ${color}45`, color,
                                            }}
                                        >
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <a
                        href="https://github.com/narendar" target="_blank" rel="noopener noreferrer"
                        className="btn btn-ghost"
                        style={{ textDecoration: 'none', display: 'inline-flex' }}
                    >
                        <Github size={16} /> View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
