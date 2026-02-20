import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

const CAT_TAG: Record<string, string> = {
    'Full Stack': 'tag-fire',
    'AI/ML': 'tag-ember',
    'Desktop': 'tag-sage',
};

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="projects" ref={ref} style={{ background: 'var(--bg)' }} className="section">
            <div className="wrap" style={{ position: 'relative' }}>

                <div className="section-num" style={{ position: 'absolute', right: 0, top: '-3rem', zIndex: 0 }}>05</div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
                >
                    <div>
                        <span className="eyebrow">05 — Projects</span>
                        <h2 className="h2">Things I've<br /><span className="fire-text">Built</span></h2>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--t3)', maxWidth: 280, textAlign: 'right' }}>
                        Production-grade software solving real problems at scale.
                    </p>
                </motion.div>

                {/* Project grid */}
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {projects.map((p, i) => {
                        const isLeft = i % 2 === 0;
                        const tagCls = CAT_TAG[p.category] ?? 'tag-fire';
                        return (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.55 }}
                                className="card"
                                style={{
                                    padding: '1.75rem',
                                    display: 'grid',
                                    gridTemplateColumns: 'auto 1fr auto',
                                    gap: '1.5rem',
                                    alignItems: 'center',
                                    borderLeft: `3px solid ${p.featured ? 'var(--fire)' : 'var(--border)'}`,
                                    borderRadius: '0 14px 14px 0',
                                    transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderLeftColor = 'var(--fire)';
                                    el.style.boxShadow = '0 4px 32px -8px rgba(249,115,22,0.2)';
                                    el.style.background = 'var(--card-2)';
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderLeftColor = p.featured ? 'var(--fire)' : 'var(--border)';
                                    el.style.boxShadow = 'none';
                                    el.style.background = 'var(--card)';
                                }}
                            >
                                {/* Index */}
                                <div style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 900,
                                    color: 'rgba(249,115,22,0.12)', lineHeight: 1, userSelect: 'none', flexShrink: 0, minWidth: 40,
                                }}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                {/* Content */}
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.5rem' }}>
                                        <h3 className="h3" style={{ margin: 0, fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>{p.title}</h3>
                                        <span className={`tag ${tagCls}`}>{p.category}</span>
                                        {p.featured && <span className="tag tag-ember">⭐ Featured</span>}
                                    </div>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--t2)', lineHeight: 1.65, marginBottom: '1rem', maxWidth: 600 }}>
                                        {p.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flexShrink: 0 }}>
                                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-outline" style={{ padding: '0.55rem 1rem', fontSize: '0.8rem', textDecoration: 'none', justifyContent: 'center' }}>
                                        <Github size={14} /> GitHub
                                    </a>
                                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-fire" style={{ padding: '0.55rem 1rem', fontSize: '0.8rem', textDecoration: 'none', justifyContent: 'center' }}>
                                        <ExternalLink size={14} /> Live
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          #projects .card > * { grid-column: span 3; }
          #projects .card { grid-template-columns: 1fr !important; }
          #projects .card > div:first-child { display: none; }
        }
      `}</style>
        </section>
    );
}
